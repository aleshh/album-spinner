import React, { useEffect, useState } from "react";
import "./App.css";
import credentials from "./credentials";

interface Album {
  artist: string;
  name: string;
}

interface SpotifyData {
  images: Array<{ url: string }>;
}

const albums: Album[] = [
  { artist: "Joni Mitchell", name: "Blue" },
  { artist: "Adele", name: "21" },
  { artist: "serpentwithfeet", name: "DEACON" },
  { artist: "Tommy James & The Shondells", name: "Crimson & Clover" },
  { artist: "The Mountain Goats", name: "Get Lonely" },
  { artist: "Tom Petty and the Heartbreakers", name: "Damn the Torpedoes" },
  { artist: "Mississippi John Hurt", name: "The 1928 Sessions" },
  { artist: "Fennesz", name: "Endless Summer" },
  { artist: "Andy Stott", name: "Faith in Strangers" },
  { artist: "Bill Frisell", name: "Music IS" },
  {
    artist: "Jorge Bolet",
    name: "Liszt: Piano Works Vol. 2 - Schubert Song Transcriptions",
  },
  { artist: "Martino Tirimo", name: "Debussy: 20 Favourites for Piano" },
  { artist: "Thelonious Monk", name: "Thelonious Alone In San Francisco" },
  {
    artist: "Elliott Sharp",
    name: "ERR Guitar",
  },
  { artist: "Bill Evans Trio", name: "Waltz For Debby" },
  { artist: "Tomasz Stanko Quartet", name: "Matka Joanna" },
  { artist: "Jimmy Giuffre 3", name: "1961" },
  { artist: "Yo-Yo Ma", name: "Bach: Cello Suites Nos. 1, 5 & 6" },
  {
    artist: "The Tallis Scholars",
    name: "Heinrich Isaac - Missa De Apoltolis",
  },
  { artist: "Charles Mingus", name: "Oh Yeah" },
  { artist: "Masayoshi Fujita", name: "Apologues" },
  { artist: "Lisa Gerrard", name: "Immortal Memory" },
  { artist: "Dolly Parton", name: "Trio" },
  { artist: "The Beach Boys", name: "Pet Sounds" },
  { artist: "King Tubby", name: "Dub From the Roots" },
  { artist: "Talking Heads", name: "Speaking In Tongues" },
  { artist: "Willie Nelson", name: "Phases and Stages" },
  { artist: "John Coltrane", name: "Olé Coltrane" },
  { artist: "Syd Barrett", name: "The Madcap Laughs" },
  { artist: "Marvin Gaye", name: "What's Going On" },
  { artist: "Kacey Musgraves", name: "Golden Hour" },
  { artist: "Richard & Linda Thompson", name: "Shoot Out the Lights" },
  { artist: "Al Green", name: "Back Up Train" },
  { artist: "Etta James", name: "Tell Mama" },
  { artist: "Miles Davis Sextet", name: "Walkin'" },
  { artist: "Field Musicians", name: "Gamelan Music of Bali" },
  { artist: "Billie Holiday", name: "Live in Cologne, 1954" },
  { artist: "Cassandra Wilson", name: "Blue Light Til' Dawn" },
  { artist: "Cesária Evora", name: "La diva aux pieds nus" },
  { artist: "Jens Lekman", name: "Night Falls Over Kortedala" },
  { artist: "Hiroshi Yoshimura", name: "Music for Nine Post Cards" },
  { artist: "John Cale", name: "Paris 1919" },
  { artist: "Janet Jackson", name: "Rhythm Nation 1814" },
  // {artist: "", name: ""},
  // {artist: "", name: ""},
  // {artist: "", name: ""},
  // {artist: "", name: ""},
  // {artist: "", name: ""},
  // {artist: "", name: ""},
  // {artist: "", name: ""},
  // {artist: "", name: ""},
  // {artist: "", name: ""},
  // {artist: "", name: ""},
  // {artist: "", name: ""},
  // {artist: "", name: ""},
  // {artist: "", name: ""},
  // {artist: "", name: ""},
  // {artist: "", name: ""},
  // {artist: "", name: ""},
  // {artist: "", name: ""},
];

// const artists = [
//   "Nina Simone",
//   "Tom Petty",
//   "Bill Frisell",
//   "John Fahey",
//   "Mississippi John Hurt",
// ];

const encode = (val: string): string =>
  val.replace(/\s/g, "+").replace(/,/g, "");

const getAlbum: any = () => {
  const album: Album = albums[Math.floor(Math.random() * albums.length)];
  return album;
};

const App = () => {
  const [accessToken, setAccessToken] = useState<SpotifyData | undefined>(
    undefined
  );
  const [album, setAlbum] = useState(getAlbum());
  const [spotifyData, setSpotifyData] = useState(undefined);

  // get and store access token
  useEffect(() => {
    if (accessToken) return;

    const getAccessToken: any = async () => {
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
      ).then((res) => res.json());

      setAccessToken(newToken);
    };

    getAccessToken();
  }, [accessToken]);

  // get and store album info
  React.useEffect(() => {
    if (!accessToken) return;

    const queryString = `q=${encode(album.name)}+${encode(
      album.artist
    )}&type=album`;

    const getAlbum: any = async () => {
      const {
        albums: { items },
      } = await fetch(`https://api.spotify.com/v1/search?${queryString}`, {
        method: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${accessToken}`,
        },
      }).then((res) => res.json());

      if (items.length > 1) {
        console.warn(
          "Received more than 1 result for",
          album.artist,
          ":",
          album.name
        );
        console.log(items);
      }

      if (items.length === 0) {
        console.warn("Received 0 results for", album.artist, ":", album.name);
        setSpotifyData(undefined);
        return;
      }

      setSpotifyData(items[0]);
    };

    getAlbum();
  }, [accessToken, album]);

  const handleNewAlbum = () => setAlbum(getAlbum());

  console.log(typeof spotifyData);
  // const imageUrl = spotifyData?.images ? [0].url;
  const { images } = spotifyData || { images: [{ url: "" }] };
  const { url } = images[0];

  return (
    <div className="container">
      <div className="content">
        {url && <img className="albumCover" alt={album.name} src={url} />}
        <h2>
          {album.artist} — {album.name}
        </h2>
        <button
          className="newAlbumButton"
          type="button"
          onClick={handleNewAlbum}
        >
          New Album
        </button>
      </div>
    </div>
  );
};

export default App;
