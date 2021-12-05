import { useEffect, useState, useMemo } from "react";
import "./App.css";
import getAlbumUrl from "./utils/getAlbumUrl";
import AlbumPage from "./components/AlbumPage";
import ErrorPage from "./components/ErrorPage";
import allAlbums from "./albums";
import credentials from "./credentials";
import { Album, SpotifyData } from "./interfaces";
import encode from "./utils/encode";
import fuzzyMatch from "./utils/fuzzyMatch";
import shuffleAlbum from "./utils/shuffleAlbum";

function App() {
  const moods: string[] = useMemo(
    () => Array.from(new Set(allAlbums.map((album) => album.mood))),
    []
  );
  const initialMood = moods[0];

  const [albums, setAlbums] = useState(allAlbums);

  const [accessToken, setAccessToken] = useState<string | undefined>(undefined);
  const [album, setAlbum] = useState<Album>(shuffleAlbum(albums, []));
  const [previous, setPrevious] = useState<Album[]>([]);
  const [spotifyData, setSpotifyData] = useState<SpotifyData | undefined>(
    undefined
  );
  const [error, setError] = useState<string | undefined>(undefined);
  const [mood, setMood] = useState<string>(initialMood);

  const handleError = (err: string | object | undefined): void => {
    const error = err?.toString() || "Unknown error";
    setError(error);
  };

  // get and store access token
  useEffect(() => {
    if (accessToken) return;

    const getAccessToken = async (): Promise<void> => {
      const authorization = btoa(
        `${credentials["Client ID"]}:${credentials["Client Secret"]}`
      );

      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        body: "grant_type=client_credentials",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${authorization}`,
        },
      })
        .then((res) => res.json())
        .catch((err) => {
          handleError(err);
        });

      if (response) {
        const { access_token: newToken } = response;
        setAccessToken(newToken);
      }
    };

    getAccessToken();
  }, [accessToken]);

  // get and store album info
  useEffect(() => {
    if (!accessToken) return;

    const queryString = `q=${encode(album.name)}+${encode(
      album.artist
    )}&type=album`;

    const getAlbum = async (): Promise<void> => {
      const response = await fetch(
        `https://api.spotify.com/v1/search?${queryString}`,
        {
          method: "get",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
        .then((res) => res.json())
        .catch((err) => {
          handleError(err);
        });

      if (response.error) {
        handleError(response.error);
        setAccessToken(undefined);
        return;
      }

      const {
        albums: { items: fetchedAlbums },
      } = response;

      if (fetchedAlbums.length > 1) {
        // Scores each returned album a point for any artist match, a point for
        // partial album name match, another point for an exact album name
        // match. We want to prefer, e.g., "Nūr" over "Nūr (Remixes)"
        const scores = fetchedAlbums.map((a: SpotifyData) => {
          const artistScore = !!a.artists.find((artist: any) =>
            fuzzyMatch(artist.name, album.artist)
          )
            ? 1
            : 0;
          const albumScore = fuzzyMatch(a.name, album.name);
          return artistScore + albumScore;
        });

        let indexOfBestMatch = scores.indexOf(Math.max(...scores));

        setSpotifyData(fetchedAlbums[indexOfBestMatch]);
        return;
      }

      if (fetchedAlbums.length === 0) {
        console.warn("Received 0 results for", album.artist, ":", album.name);
        setSpotifyData(undefined);
        return;
      }

      setSpotifyData(fetchedAlbums[0]);
    };

    getAlbum();
  }, [accessToken, album]);

  const { images, uri } = spotifyData || { images: [{ url: "" }], uri: "" };
  const { url: spotifyUrl } = images[0] || {};
  const localUrl = getAlbumUrl(album.artist, album.name);
  const imageUrl = localUrl ? `assets/${localUrl}` : spotifyUrl;

  const handleNewAlbum = () => {
    const newAlbum = shuffleAlbum(albums, previous);
    const newPrev = [newAlbum, ...previous];
    if (newPrev.length > albums.length / 2) {
      newPrev.pop();
    }
    setPrevious(newPrev);
    setAlbum(newAlbum);
  };

  // shuffle albums when they're filtered by mood
  useEffect(() => {
    handleNewAlbum();
    // Arguably wrong to disable? Time to re-read Abramov's useEffect article!
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [albums]);

  // update albums when mood changes
  useEffect(() => {
    setAlbums(allAlbums.filter((album) => album.mood === mood));
  }, [mood]);

  const handleOpenAlbum = () => {
    window.open(uri);
  };

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <AlbumPage
      onOpenAlbum={handleOpenAlbum}
      onNewAlbum={handleNewAlbum}
      artist={album.artist}
      albumName={album.name}
      imageUrl={imageUrl}
      mood={mood}
      moods={moods}
      setMood={setMood}
    />
  );
}

export default App;
