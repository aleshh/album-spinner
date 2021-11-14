import { useEffect, useState } from "react";
import { Copy, RefreshCw, ExternalLink, Layers } from "react-feather";
import { usePalette } from "react-palette";
import copyToClipboard from "../utils/copyToClipboard";
import Button from "./Button";
import MoodSelect from "./MoodSelect";

type PageProps = {
  onOpenAlbum: () => void;
  onNewAlbum: () => void;
  artist: string;
  albumName: string;
  imageUrl: string;
};

const AlbumPage = ({
  onOpenAlbum,
  onNewAlbum,
  artist,
  albumName,
  imageUrl,
}: PageProps): JSX.Element => {
  const [tooltipText, setTooltipText] = useState("");
  const { data: colors } = usePalette(imageUrl);
  const albumString = `${artist} — ${albumName}`;
  const copyString = `${artist} ${albumName}`
    .replace(/[^\w\s ]/g, " ")
    .replace(/ +/g, " ");

  // clear tooltip text after a few seconds
  useEffect(() => {
    setTimeout(() => {
      setTooltipText("");
    }, 3000);
  }, [tooltipText]);

  const handleCopyText = () => {
    copyToClipboard(copyString);
    setTooltipText("Album name copied");
  };

  const handleMoodChange = () => {};

  return (
    <div
      className="container"
      style={{
        backgroundImage: `linear-gradient(${colors.vibrant}, ${colors.darkMuted}`,
      }}
    >
      <Button
        ariaLabel="change mood"
        colors={colors}
        onClick={() => {}}
        style={{ position: "absolute", top: 10, right: 10 }}
      >
        <Layers />
      </Button>
      {/* <MoodSelect
        color={colors?.lightVibrant || "white"}
        onMoodChange={handleMoodChange}
        mood="morning"
        moods={["morning", "minimal"]}
      /> */}
      <div className="content">
        <div className="imageContainer">
          {imageUrl && (
            <button className="imageButton" type="button" onClick={onOpenAlbum}>
              <img className="albumCover" alt={albumString} src={imageUrl} />
            </button>
          )}
        </div>
        <h2 style={{ color: colors.lightVibrant }}>{albumString}</h2>
        <Button ariaLabel="new pick" onClick={onNewAlbum} colors={colors}>
          <RefreshCw />
        </Button>
        <Button
          aria-label={`Play album ${albumString}`}
          colors={colors}
          onClick={onOpenAlbum}
          variant="primary"
        >
          <ExternalLink size={36} />
        </Button>
        <Button
          tooltipText={tooltipText}
          colors={colors}
          aria-label={`Copy album artist and title ${copyString}`}
          onClick={handleCopyText}
        >
          <Copy />
        </Button>
      </div>
    </div>
  );
};

export default AlbumPage;
