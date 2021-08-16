const covers = [
  {
    artist: "Albert Ayler",
    name: "Spiritual Unity",
    url: "albert-ayler-spiritual-unity.jpg",
  },
];

const getAlbumUrl = (artist: string, name: string): string | undefined => {
  const cover = covers.find(
    (cover) => cover.artist === artist && cover.name === name
  );

  if (!cover) return undefined;

  return cover.url;
};

export default getAlbumUrl;
