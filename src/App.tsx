import { useEffect, useState, useMemo } from "react";
import "./App.css";
import getAlbumUrl from "./utils/getAlbumUrl";
import AlbumPage from "./components/AlbumPage";
import StatusPage from "./components/StatusPage";
import ErrorPage from "./components/ErrorPage";
import allAlbums from "./albums";
import credentials from "./credentials";
import { Album, SpotifyData } from "./interfaces";
import encode from "./utils/encode";
import fuzzyMatch from "./utils/fuzzyMatch";
import shuffleAlbum from "./utils/shuffleAlbum";

const moodKey = "mood";

const moodFromStorage = localStorage.getItem(moodKey);

function App() {
  const moods: string[] = useMemo(
    () =>
      Array.from(
        new Set(
          allAlbums.reduce(
            (arr: string[], album) => [...arr, ...album.moods],
            []
          )
        )
      ),
    []
  );

  const initialMood =
    moodFromStorage && moods.includes(moodFromStorage)
      ? moodFromStorage
      : moods[0];

  const [albums, setAlbums] = useState(allAlbums);
  const [accessToken, setAccessToken] = useState<string | undefined>(undefined);
  const [album, setAlbum] = useState<Album>(shuffleAlbum(albums, []));
  const [previous, setPrevious] = useState<Album[]>([]);
  const [spotifyData, setSpotifyData] = useState<SpotifyData | undefined>(
    undefined
  );
  const [error, setError] = useState<string | undefined>(undefined);
  const [mood, setMood] = useState<string>(initialMood);

  const handleSetMood = (mood: string) => {
    localStorage.setItem(moodKey, mood);
    setMood(mood);
  };

  const handleError = (err: string | object | undefined): void => {
    const error = err?.toString() || "Unknown error";
    setError(error);
    setAccessToken(undefined);
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
        if (error) setError(undefined);
      }
    };

    getAccessToken();
  }, [accessToken, error]);

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
        return;
      }

      const {
        albums: { items: fetchedAlbums },
      } = response;

      if (fetchedAlbums.length > 1) {
        // Scores each returned album a point for any artist match, a point for
        // partial album name match, another point for an exact album name
        // match. We want to prefer, e.g., "N??r" over "N??r (Remixes)"
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
    setAlbums(allAlbums.filter((album) => album.moods.includes(mood)));
  }, [mood]);

  const handleOpenAlbum = () => {
    window.open(uri);
  };

  if (error) {
    return <ErrorPage error={error} />;
  }

  const message: string | null = (() => {
    if (!accessToken) return "Attempting to contact Spotify...";
    if (!spotifyData)
      return `Attempting to download info and image for ${album.artist} ??? ${album.name}...`;

    return null;
  })();

  if (message) {
    return <StatusPage status={message} />;
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
      setMood={handleSetMood}
    />
  );
}

export default App;
