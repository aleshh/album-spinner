import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { Layers as Icon } from "react-feather";
import Button from "./Button";

const moodEmoji: any = {
  family: "🌞",
  minimal: "🌾",
  // maximal: "🐲",
};

type MoodPickerProps = {
  buttonColor?: string;
  setMood: (mood: any) => void;
  mood: string;
  moods: string[];
};

const MoodPicker = ({
  setMood,
  mood,
  moods,
  buttonColor,
  ...rest
}: MoodPickerProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  const handleClick = (mood: string) => {
    setMood(mood);
    setOpen(false);
  };

  return (
    <>
      <Button
        ariaLabel="change mood"
        color={buttonColor}
        onClick={() => {
          setOpen(true);
        }}
        style={{ position: "absolute", top: 10, right: 10 }}
      >
        <Icon />
      </Button>
      <Dialog
        onClose={() => {
          setOpen(false);
        }}
        open={open}
      >
        <div style={{ padding: 30, textAlign: "left" }}>
          <Typography
            style={{
              borderBottom: "1px solid black",
              padding: 0,
              paddingBottom: 10,
              marginBottom: 10,
            }}
          >
            Select mood
          </Typography>

          {moods.map((m) =>
            moodEmoji[m] ? (
              <MenuItem
                key={m}
                selected={m === mood}
                onClick={() => handleClick(m)}
                style={{
                  textAlign: "left",
                  borderRadius: 10,
                  textTransform: "capitalize",
                  padding: 10,
                  paddingLeft: 15,
                  minWidth: 160,
                }}
              >
                {moodEmoji[m]} {m}
              </MenuItem>
            ) : null
          )}
        </div>
      </Dialog>
    </>
  );
};

export default MoodPicker;
