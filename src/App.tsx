import React from "react";
import "./App.css";

interface Album {
  artist: string;
  name: string;
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
    artist: "Elliott Sharp, Mary Halvorson, and Marc Ribot",
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

const getAlbum: any = () => {
  const album: Album = albums[Math.floor(Math.random() * albums.length)];
  return album;
};

const App = () => {
  const [album, setAlbum] = React.useState(getAlbum());

  const handleNewAlbum = () => setAlbum(getAlbum());

  return (
    <div className="container">
      <div className="content">
        <h2>{album.artist}</h2>
        <h1>{album.name}</h1>
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
