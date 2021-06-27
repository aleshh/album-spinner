import { useEffect, useState } from "react";
import { usePalette } from "react-palette";
import Tooltip from "@material-ui/core/Tooltip";
import useLongPress from "./hooks/useLongPress";

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
  const [tooltipText, setTooltipText] = useState("");
  const { data: colors } = usePalette(imageUrl);
  const albumString = `${artist} — ${albumName}`;

  // clear tooltip text after a few seconds
  useEffect(() => {
    setTimeout(() => {
      setTooltipText("");
    }, 3000);
  }, [tooltipText]);

  const onPrimaryLongPress = () => {
    navigator.clipboard.writeText(`${artist} ${albumName}`).then(
      function () {
        setTooltipText("Album name copied");
      },
      function (e) {
        setTooltipText("Album name copy failed!");
      }
    );
  };

  const primaryButtonEvents = useLongPress(onPrimaryLongPress, onOpenAlbum, {
    shouldPreventDefault: true,
    delay: 500,
  });

  return (
    <div
      className="container"
      style={{
        backgroundImage: `linear-gradient(${colors.vibrant}, ${colors.darkMuted}`,
      }}
    >
      <div className="content">
        <div className="imageContainer">
          {imageUrl && (
            <button className="imageButton" type="button" onClick={onOpenAlbum}>
              <img className="albumCover" alt={albumString} src={imageUrl} />
            </button>
          )}
        </div>
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
        <Tooltip open={!!tooltipText} title={tooltipText} arrow placement="top">
          <button
            className="button"
            type="button"
            {...primaryButtonEvents}
            style={{
              backgroundColor: colors.lightVibrant,
              borderColor: colors.lightVibrant,
              color: colors.darkMuted,
            }}
          >
            Play this
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default Page;
