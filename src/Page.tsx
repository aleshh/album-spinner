import "./App.css";

type PageProps = {
  onOpenAlbum: () => void;
  onNewAlbum: () => void;
  artist: string;
  albumName: string;
  url: string;
};

const Page = ({
  onOpenAlbum,
  onNewAlbum,
  artist,
  albumName,
  url,
}: PageProps): JSX.Element => {
  const albumString = `${artist} — ${albumName}`;

  return (
    <div className="container">
      <div className="content">
        {url && (
          <button className="imageButton" type="button" onClick={onOpenAlbum}>
            <img
              className="albumCover"
              alt={albumString}
              title={albumString}
              src={url}
            />
          </button>
        )}
        <div className="buttonContainer">
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
    </div>
  );
};

export default Page;
