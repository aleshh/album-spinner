import { useEffect, useState } from "react";
import "./App.css";
import Page from "./components/Page";
import albums from "./albums";
import credentials from "./credentials";
import { Album, SpotifyData } from "./interfaces";

function encode(val: string): string {
  return val.replace(/\s/g, "+").replace(/,/g, "+");
}

function fuzzyMatch(val1: string, val2: string): number {
  const encode = (val: string): string =>
    val.toLowerCase().replace(/[^0-9a-zA-Z]/g, "");

  val1 = encode(val1);
  val2 = encode(val2);

  if (val1 === val2) return 2;
  if (val1.indexOf(val2) !== -1 || val2.indexOf(val1) !== -1) return 1;
  return 0;
}

function shuffleAlbum(previous: Array<Album>): Album {
  let isNew = false;
  let album: Album;
  const search = (prev: Album): boolean => prev === album;

  do {
    const i = Math.floor(Math.random() * albums.length);
    album = albums[i];
    if (!previous.find(search)) {
      isNew = true;
    }
  } while (!isNew);

  return album;
}

function App() {
  const [accessToken, setAccessToken] = useState<string | undefined>(undefined);
  const [album, setAlbum] = useState<Album>(shuffleAlbum([]));
  const [previous, setPrevious] = useState<Album[]>([]);
  const [spotifyData, setSpotifyData] = useState<SpotifyData | undefined>(
    undefined
  );

  // get and store access token
  useEffect(() => {
    if (accessToken) return;

    const getAccessToken = async (): Promise<void> => {
      const authorization = btoa(
        `${credentials["Client ID"]}:${credentials["Client Secret"]}`
      );

      const { access_token: newToken } = await fetch(
        "https://accounts.spotify.com/api/token",
        {
          method: "POST",
          body: "grant_type=client_credentials",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${authorization}`,
          },
        }
      )
        .then((res) => res.json())
        .catch((error) => {
          console.error(error);
        });

      setAccessToken(newToken);
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
        .catch((error) => {
          console.error(error);
        });

      if (response.error) {
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
  const { url: imageUrl } = images[0];

  const handleNewAlbum = () => {
    const newAlbum = shuffleAlbum(previous);
    const newPrev = [newAlbum, ...previous];
    if (newPrev.length > albums.length / 2) {
      newPrev.pop();
    }
    setPrevious(newPrev);
    setAlbum(newAlbum);
  };

  const handleOpenAlbum = () => {
    window.open(uri);
  };

  return (
    <Page
      onOpenAlbum={handleOpenAlbum}
      onNewAlbum={handleNewAlbum}
      artist={album.artist}
      albumName={album.name}
      imageUrl={imageUrl}
    />
  );
}

export default App;
