import { Album } from "./interfaces";

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
  { artist: "Ambitious Lovers", name: "Lust" },
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
  { artist: "Ladysmith Black Mambazo", name: "Induku Zethu" },
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
  { artist: "Prince", name: "Sign O'The Times" },
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
  { artist: "Gary Peacock", name: "Tales of Another" },
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
  { artist: "The Band", name: "Music From Big Pink (Remastered)" },
  { artist: "Susana Baca", name: "Vestida de Vida" },
  { artist: "JJ", name: "jj n° 2" },
  { artist: "Kate Bush", name: "50 Words for Snow" },
  { artist: "Nick Drake", name: "Family Tree" },
  { artist: "The Starlights", name: "Soldering: Reggae's Greatest Hits" },
  { artist: "Zola Jesus", name: "Versions" },
  { artist: "Dua Saleh", name: "Nūr" },
  { artist: "Yo La Tengo", name: "The Sounds of the Sounds of Science" },
  { artist: "Rosie Lowe", name: "Control" },
  {
    artist: "Rhiannon Giddens",
    name: "there is no Other (with Francesco Turrisi)",
  },
  { artist: "ALASKALASKA", name: "The Dots" },
  { artist: "Jamila Woods", name: "LEGACY! LEGACY!" },
  { artist: "Broadway Revival Cast", name: "The Threepenny Opera" },
  { artist: "Klezmer Conservatory Band", name: "Dance Me To the End of Love" },
  { artist: "Tom Waits", name: "Foreign Affairs" },
  { artist: "Sinéad O'Connor", name: "Am I Not Your Girl?" },
  { artist: "Choir Boy", name: "Passive with Desire" },
  { artist: "Surfing", name: "Deep Fantasy" },
  { artist: "Sylvia Telles", name: "Bossa, Balanço, Balada" },
  { artist: "Lisel", name: "Angels on the Slope" },
  { artist: "Tirzah", name: "Devotion" },
  { artist: "Razika", name: "Program 91" },
  { artist: "Vashti Bunyan", name: "Just Another Diamond Day" },
  { artist: "Massive Attack", name: "Mezzanine" },
  { artist: "Photek", name: "Modus Operandi" },
  { artist: "Marianne Faithfull", name: "Broken English" },
  { artist: "James Cleveland", name: "Peace Be Still" },
  { artist: "Jimmy Cliff", name: "Wonderful World, Beautiful People" },
  { artist: "George Clinton", name: "Computer Games" },
  { artist: "Natalie Cole", name: "Inseparable" },
  { artist: "Chic Corea", name: "Now He Sings, Now He Sobs" },
  { artist: "Creedence Clearwater Revival", name: "Green River" },
  { artist: "The Cure", name: "Seventeen Seconds" },
  { artist: "The Dillards", name: "Back Porch Bluegrass" },
  { artist: "The Dity Dozen Brass Band", name: "The New Orleans Album" },
  { artist: "Dr. John", name: "Dr. John's Gumbo" },
  { artist: "Bob Dylan", name: "Desire" },
  { artist: "Lonnie Holley", name: "Just Before Music" },
  { artist: "Paul Bley", name: "Partners" },
  { artist: "Cecil Taylor", name: "Jazz Advance" },
  { artist: "Laurie Anderson", name: "Strange Angels" },
  { artist: "Aztec Camera", name: "High Land, Hard Rain" },
  { artist: "The Pogues", name: "Rum Sodomy & the Lash" },
  { artist: "Derek Bailey", name: "The Music Improvisation Company" },
  { artist: "The Bangles", name: "Different Light" },
  { artist: "The Bats", name: "Daddy's Highway" },
  { artist: "Tim Buckley", name: "Happy Sad" },
  { artist: "Can", name: "Soon Over Babaluma" },
  { artist: "Cameo", name: "Word Up" },
  { artist: "Capitain Beefheart", name: "Safe As Milk" },
  { artist: "R.E.M.", name: "Murmur" },
  { artist: "Sun Ra", name: "The Futuristic Sounds of Sun Ra" },
  { artist: "John Cage", name: "In a Landscape / Dream / Haiku" },
  {
    artist: "Third Coast Percussion",
    name: "Reich: Mallet Quartet, Sextet, Nagoya Marimbas & Music for Pieces",
  },
  { artist: "Ensemble Signal", name: "Steve Reich: Music for 18 Musicians" },
  { artist: "Weather Report", name: "Weather Report" },
  { artist: "Rosanne Cash", name: "She Remembers Everything" },
  { artist: "Future Sound of London", name: "Environment Five" },
  { artist: "Dionne Warwick", name: "Presenting Dionne Warwick" },
  { artist: "Ahmed Fakroun", name: "Shawara Al Madina" },
  { artist: "Princess Nokia", name: "Metallic Butterfly" },
  { artist: "Ebo Taylor", name: "Life Stories" },
  { artist: "Toro y Moi", name: "Underneath the Pine" },
  { artist: "Domenique Dumont", name: "Miniatures de auto rhythm" },
  { artist: "Shirley Brown", name: "Woman to Woman" },
  { artist: "Nation of Launguage", name: "Introduction, Presence" },
  { artist: "Amber Coffman", name: "City of No Reply" },
  { artist: "Dirty Projectors", name: "Lamp Lit Prose" },
  // { artist: "", name: "" },
];

export default albums;
