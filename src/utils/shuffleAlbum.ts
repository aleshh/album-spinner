import { Album } from "../interfaces";

// TODO fix this so that it's not imperative garbage?

export default function shuffleAlbum(
  albums: Array<Album>,
  previous: Array<Album>
): Album {
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
