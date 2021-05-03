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
  { artist: "Adele", name: "21" },
  { artist: "serpentwithfeet", name: "DEACON" },
  { artist: "Tommy James & The Shondells", name: "Crimson and Clover" },
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
  { artist: "Yo-Yo Ma", name: "Bach Trios" },
  {
    artist: "The Tallis Scholars",
    name: "Heinrich Isaac - Missa De Apostolis",
  },
  { artist: "Charles Mingus", name: "Oh Yeah" },
  { artist: "Masayoshi Fujita", name: "Apologues" },
  { artist: "Lisa Gerrard", name: "Immortal Memory" },
  { artist: "Dolly Parton", name: "Trio" },
  { artist: "The Beach Boys", name: "Pet Sounds" },
  { artist: "King Tubby", name: "Dub From The Roots" },
  { artist: "Talking Heads", name: "Speaking In Tongues" },
  { artist: "Willie Nelson", name: "Phases and Stages" },
  { artist: "John Coltrane", name: "Olé Coltrane" },
  { artist: "Syd Barrett", name: "The Madcap Laughs" },
  { artist: "Marvin Gaye", name: "What's Going On" },
  { artist: "Kacey Musgraves", name: "Golden Hour" },
  { artist: "Richard & Linda Thompson", name: "Shoot Out the Lights" },
  { artist: "Al Green", name: "Back Up Train" },
  { artist: "Etta James", name: "Tell Mama" },
  { artist: "Miles Davis", name: "Walkin'" },
  { artist: "Field Musicians", name: "Gamelan Music of Bali" },
  { artist: "Billie Holiday", name: "Live in Cologne, 1954" },
  { artist: "Cassandra Wilson", name: "Blue Light Til' Dawn" },
  { artist: "Cesária Evora", name: "La diva aux pieds nus" },
  { artist: "Jens Lekman", name: "Night Falls Over Kortedala" },
  { artist: "Hiroshi Yoshimura", name: "Music for Nine Post Cards" },
  { artist: "John Cale", name: "Paris 1919" },
  { artist: "Janet Jackson", name: "Rhythm Nation 1814" },
  { artist: "Ann Peebles", name: "I Can't Stand the Rain" },
  { artist: "Keith Jarrett", name: "After the Fall (Live)" },
  { artist: "Funkadelic", name: "Maggot Brain" },
  { artist: "Aretha Franklin", name: "Amazing Grace" },
  { artist: "King Sunny Ade", name: "Juju Music" },
  { artist: "Afrika Bambaataa", name: "Planet Rock: The Album" },
  { artist: "Ambitious Lovers", name: "Ambitious Lovers" },
  { artist: "Diana Ross", name: "Diana & Marvin" },
  { artist: "Kings of Convenience", name: "Declaration of Dependence" },
  { artist: "Renée Reed", name: "Renée Reed" },
  {
    artist: "Valerie June",
    name: "The Moon and Stars: Prescriptions for Dreamers",
  },
  { artist: "Mia Doi Todd", name: "Music Life" },
  { artist: "Angel Bat Dawid", name: "LIVE" },
  { artist: "Jyoti", name: "Mama, You Can Bet!" },
  { artist: "Bessie Jones", name: "Get in Union" },
  { artist: "Fiona Apple", name: "Fetch The Bolt Cutters" },
  { artist: "Phoebe Bridgers", name: "Punisher" },
  { artist: "Nana Yamato", name: "Before Sunrise" },
  { artist: "Dawn Penn", name: "Vintage, Vol. 1" },
  { artist: "Nina Simone", name: "Fodder on My Wings" },
  { artist: "Lucinda Williams", name: "Good Souls Better Angels" },
  { artist: "Cocteau Twins", name: "Heaven or Las Vegas" },
  { artist: "k.d. lang", name: "Ingénue" },
  { artist: "Shannon Lay", name: "August" },
  {
    artist: "Bulgarian State Television Female Choir",
    name: "Le Mystere des Voix Bulgares",
  },
  { artist: "Ladysmith Black Mambazo", name: "Ulwandle Olungcwele" },
  { artist: "J.J. Cale", name: "Okie" },
  { artist: "Tina Turner", name: "Private Dancer" },
  { artist: "Belle & Sebastian", name: "Write About Love" },
  {
    artist: "Bill Monroe & His Blue Grass Boys",
    name: "The Essential Bill Monroe (1945-1949)",
  },
  { artist: "Karl Hector & The Malcouns", name: "Unstraight Ahead" },
  { artist: "D'Angelo", name: "Black Messiah" },
  { artist: "Fleetwood Mac", name: "Then Play On" },
  { artist: "Joni Mitchell", name: "Court and Spark" },
  { artist: "Roxanne Shanté", name: "Bad Sister" },
  { artist: "Archie Shepp", name: "Mama Too Tight" },
  { artist: "Eric Dolphy", name: "Out to Lunch" },
  { artist: "John Coltrane", name: "My Favorite Things" },
  { artist: "Sonny Rollins", name: "Saxophone Colossus" },
  { artist: "Cannonball Adderly", name: "Somethin' Else" },
  {
    artist: "Alice Coltrane",
    name: "World Spirituality Classics 1: The Ecstatic Music of Alice Coltrane",
  },
  { artist: "Roxy Music", name: "Avalon" },
  { artist: "Mirah", name: "Advisory Committee" },
  { artist: "Sister Rosetta Tharpe", name: "Sister On Tour" },
  { artist: "Grouper", name: "Dragging a Dead Deer Up a Hill" },
  { artist: "Nobuto Suda", name: "Transitoriness" },
  { artist: "Sylvain Chauveau", name: "Simple" },
  { artist: "William Basinski", name: "92982" },
  { artist: "Clarice Jensen", name: "For This from That Will Be Filled" },
  {
    artist: "Beatrice Dillon",
    name: "Studies I-XVII for Samplers and Percussion",
  },
  { artist: "CV", name: "Thoughts of a Dot as It Travels a Surface" },
  { artist: "Suso Saiz", name: "Between No Things" },
  { artist: "Lizzo", name: "Lizzobangers" },
  {
    artist: "Carl Stalling",
    name:
      "The Carl Stalling Project - Music From Warner Bros. Cartoons 1936-1958",
  },
  { artist: "Modern Jazz Quartet", name: "Third Stream Music" },
  { artist: "Bill Evans Trio", name: "Trio 65" },
  { artist: "Louis Armstrong", name: "The Great Reunion" },
  { artist: "Chet Baker", name: "Chet Baker Sings" },
  { artist: "Ricki Lee Jones", name: "The Devil You Know" },
  { artist: "Janis Joplin", name: "I Got Dem Ol' Kozmic Blues Again Mama!" },
  { artist: "Joy Division", name: "Unknown Pleasures" },
  { artist: "Bill Withers", name: "Just As I Am" },
  { artist: "Sly & The Family Stone", name: "Fresh" },
  { artist: "Gloria Lynne", name: "Try a Little Tenderness" },
  { artist: "Donny Hathaway", name: "Live" },
  { artist: "Paul McCartney", name: "Ram" },
  { artist: "Sarah Vaughan", name: "How Long Has This Been Going On?" },
  { artist: "Herman Max", name: "Bach: Passions-Oratorium" },
  {
    artist: "Berlin Philharmonic String Quintet",
    name: "Dvořák String Quintets",
  },
  { artist: "Nash Ensemble", name: "Brahms: The String Quintets" },
  { artist: "Francesco Pasqualotto", name: "Bruckner: Complete Piano Music" },
  { artist: "Parliament", name: "Up For the Down Stroke" },
  { artist: "Steely Dan", name: "Countdown to Ecstasy" },
  { artist: "Robert Palmer", name: "Sneakin' Sally Through the Alley" },
  { artist: "Latin Playboys", name: "Dose" },
  { artist: "John Fahey", name: "The Transfiguration of Blind Joe Death " },
  { artist: "Devendra Banhart", name: "Rejoicing in the Hands" },
  { artist: "Dawn McCarthy", name: "What the Brothers Sang" },
  { artist: "Bonnie Prince Billy", name: "The Letting Go" },
  { artist: "Rhye", name: "Woman" },
  { artist: "The xx", name: "xx" },
  { artist: "Lightnin' Hopkins", name: "Autobiography In Blues" },
  { artist: "John Lee Hooker", name: "More Real Blues" },
  { artist: "Cowboy Junkies ", name: "Whites Off Earth Now" },
  { artist: "Prince", name: "1999" },
  { artist: "Arooj Aftab", name: "Vulture Prince" },
  { artist: "Ketama", name: "Songhai, Vol. 2" },
  { artist: "Ella Fitzgerald", name: "Love, Ella" },
  { artist: "Chuck Johnson", name: "Balsams" },
  { artist: "Thunder Mountain Singers", name: "One Voice, One Nation" },
  { artist: "Mission Of Burma", name: "Signals, Calls and Marches" },
  { artist: "Grant Green", name: "Visions" },
  { artist: "Wire", name: "Pink Flag" },
  { artist: "Jacky Terrasson", name: "Jacky Terrasson" },
  {
    artist: "A Tribe Called Quest",
    name: "We got it from Here... Thank You 4 Your service",
  },
  { artist: "Blackalicious", name: "Blazing Arrow" },
  { artist: "Destroyer", name: "Have We Met" },
  { artist: "Gary Peacock", name: "Good Morning Heartache" },
  { artist: "Khatia Buniatishvili", name: "Schubert" },
  { artist: "Al Green", name: "Higher Plane" },
  { artist: "Richard Thompson", name: "Mirror Blue" },
  { artist: "Bon Iver", name: "i,i" },
  { artist: "Japanese Breakfast", name: "Psychopomp" },
  { artist: "Stan Getz", name: "Getz / Gilberto '76" },
  { artist: "Ron Miles", name: "Heaven" },
  { artist: "Anenon", name: "Tongue" },
  { artist: "Ivan Mladek", name: "Dobrý Den!" },
  { artist: "The Upsetters", name: "Clint Eastwood" },
  { artist: "Lee Scratch Perry", name: "Scratch Attack!" },
  { artist: "Van Morrison", name: "His Band and the Street Choir" },
  { artist: "Jenny Hval", name: "Blood Bitch" },
  { artist: "Neil Young", name: "Hitchhiker" },
  { artist: "Yoko Ono", name: "Fly" },
  { artist: "Surprise Chef", name: "Daylight Savings" },
  { artist: "Madvillain", name: "Madvillainy" },
  { artist: "Cleaners from Venus", name: "Midnight Cleaners" },
  { artist: "Alton Ellis", name: "I'm Still in Love With You" },
  { artist: "Louise Bock", name: "Sketch for WinterVII - Abyss: For Cello" },
  { artist: "Eve Adams", name: "Metal Bird" },
  { artist: "Jon Balke", name: "Siwan" },
  { artist: "Saint Etienne", name: "Foxbase Alpha" },
  { artist: "The Meters", name: "The Meters" },
  { artist: "János Starker", name: "Suites for Solo Cello" },
  { artist: "Ernesto Djedje", name: "Roi du Ziglibithy" },
  { artist: "Unknown Mortal Orchestra", name: "II" },
  { artist: "The Weather Station", name: "Ignorance" },
  { artist: "Lyra Pramuk", name: "Fountain" },
  // { artist: "", name: "" },
];

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

const shuffleAlbum: any = () => {
  const i = Math.floor(Math.random() * albums.length);
  console.log(i);
  const album: Album = albums[i];
  return album;
};

const App = () => {
  const [accessToken, setAccessToken] = useState<SpotifyData | undefined>(
    undefined
  );
  const [album, setAlbum] = useState(shuffleAlbum());
  const [spotifyData, setSpotifyData] = useState(undefined);

  console.log(album);

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

        const matchingAlbum = items.find((alb: any) =>
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

      if (items.length === 0) {
        console.warn("Received 0 results for", album.artist, ":", album.name);
        setSpotifyData(undefined);
        return;
      }

      setSpotifyData(items[0]);
    };

    getAlbum();
  }, [accessToken, album]);

  const { images, uri } = spotifyData || { images: [{ url: "" }], uri: "" };
  const { url } = images[0];
  const albumString = `${album.artist} — ${album.name}`;

  const handleNewAlbum = () => setAlbum(shuffleAlbum());
  const handleOpenAlbum = () => {
    window.open(uri);
  };

  return (
    <div className="container">
      <div className="content">
        {url && (
          <button
            className="imageButton"
            type="button"
            onClick={handleOpenAlbum}
          >
            <img
              className="albumCover"
              alt={albumString}
              title={albumString}
              src={url}
            />
          </button>
        )}
        <div className="buttonContainer">
          <button className="button" type="button" onClick={handleNewAlbum}>
            New pick
          </button>
          <button
            className="button buttonPrimary"
            type="button"
            onClick={handleOpenAlbum}
          >
            Play this
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
