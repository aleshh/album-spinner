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
        backgroundImage: `linear-gradient(${colors.vibrant}, ${colors.darkMuted}`,
      }}
    >
      <div className="content">
        {imageUrl && (
          <button className="imageButton" type="button" onClick={onOpenAlbum}>
            <img className="albumCover" alt={albumString} src={imageUrl} />
          </button>
        )}
        <h2 style={{ color: colors.lightVibrant }}>{albumString}</h2>
        <button
          className="button"
          type="button"
          onClick={onNewAlbum}
          style={{
            borderColor: colors.lightVibrant,
            color: colors.lightVibrant,
          }}
        >
          New pick
        </button>
        <button
          className="button buttonPrimary"
          type="button"
          onClick={onOpenAlbum}
          style={{
            backgroundColor: colors.lightVibrant,
            borderColor: colors.lightVibrant,
            color: colors.darkMuted,
          }}
        >
          Play this
        </button>
      </div>
    </div>
  );
};

export default Page;
