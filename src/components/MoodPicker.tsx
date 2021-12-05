import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import { Layers as Icon } from "react-feather";
import Button from "./Button";

const moodEmoji: any = {
  morning: "🌞",
  minimal: "🌾",
  maximal: "🐲",
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
        <div style={{ padding: 30 }}>
          <DialogTitle
            style={{
              borderBottom: "1px solid black",
              marginBottom: 10,
              padding: 0,
            }}
          >
            Select mood
          </DialogTitle>

          {moods.map((m) => (
            <MenuItem
              key={m}
              selected={m === mood}
              onClick={() => handleClick(m)}
              style={{ borderRadius: 10, textTransform: "capitalize" }}
            >
              {moodEmoji[m]} {m}
            </MenuItem>
          ))}
        </div>
      </Dialog>
    </>
  );
};

export default MoodPicker;
