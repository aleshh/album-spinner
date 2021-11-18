export interface Album {
  artist: string;
  name: string;
  mood: string;
}

export interface SpotifyData {
  images: Array<{ url: string }>;
  artists: Array<{}>;
  name: string;
  album_type: string;
  uri: string;
}
