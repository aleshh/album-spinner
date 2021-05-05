import { usePalette } from "react-palette";

type PageProps = {
  onOpenAlbum: () => void;
  onNewAlbum: () => void;
  artist: string;
  albumName: string;
  imageUrl: string;
};

const Page = ({
  onOpenAlbum,
  onNewAlbum,
  artist,
  albumName,
  imageUrl,
}: PageProps): JSX.Element => {
  const { data: colors } = usePalette(imageUrl);
  const albumString = `${artist} — ${albumName}`;

  return (
    <div
      className="container"
      style={{
        backgroundImage: `linear-gradient(${colors.vibrant}, #000`,
      }}
    >
      <div className="content">
        {imageUrl && (
          <button className="imageButton" type="button" onClick={onOpenAlbum}>
            <img className="albumCover" alt={albumString} src={imageUrl} />
          </button>
        )}
        <h2>{albumString}</h2>
        <button className="button" type="button" onClick={onNewAlbum}>
          New pick
        </button>
        <button
          className="button buttonPrimary"
          type="button"
          onClick={onOpenAlbum}
        >
          Play this
        </button>
      </div>
    </div>
  );
};

export default Page;
