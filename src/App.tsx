import { useEffect, useState } from "react";
import "./App.css";
import Page from "./Page";
import albums from "./albums";
import credentials from "./credentials";
import { Album, SpotifyData } from "./interfaces";

const encode = (val: string): string =>
  val.replace(/\s/g, "+").replace(/,/g, "+");

const fuzzyMatch = (val1: string, val2: string): boolean => {
  const encode = (val: string): string =>
    val.toLowerCase().replace(/[^0-9a-zA-Z]/g, "");

  val1 = encode(val1);
  val2 = encode(val2);

  return (
    val1 === val2 || val1.indexOf(val2) !== -1 || val2.indexOf(val1) !== -1
  );
};

const shuffleAlbum = (): Album => {
  const i = Math.floor(Math.random() * albums.length);
  const album: Album = albums[i];
  return album;
};

const App = () => {
  const [accessToken, setAccessToken] = useState<string | undefined>(undefined);
  const [album, setAlbum] = useState<Album>(shuffleAlbum());
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
        const matchingAlbum = fetchedAlbums.find((alb: SpotifyData) =>
          alb.artists.find(
            (a: any) =>
              a.name === album.artist &&
              fuzzyMatch(alb.name, album.name) &&
              alb.album_type !== "single"
          )
        );

        setSpotifyData(matchingAlbum);
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
  const { url } = images[0];

  const handleNewAlbum = () => setAlbum(shuffleAlbum());
  const handleOpenAlbum = () => {
    window.open(uri);
  };

  return (
    <Page
      onOpenAlbum={handleOpenAlbum}
      onNewAlbum={handleNewAlbum}
      artist={album.artist}
      albumName={album.name}
      url={url}
    />
  );
};

export default App;
