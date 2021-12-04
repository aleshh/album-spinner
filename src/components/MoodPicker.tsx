import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import { Layers as Icon } from "react-feather";
import Button from "./Button";

const moodEmoji: any = {
  morning: "🌞",
  minimal: "🌾",
  maximal: "🧞‍♂️",
};

type MoodPickerProps = {
  colors?: object;
  setMood: (mood: any) => void;
  mood: string;
  moods: string[];
};
const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

const MoodPicker = ({
  setMood,
  mood,
  moods,
  colors,
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
        colors={colors}
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
            style={{ borderBottom: "1px solid black", marginBottom: 30 }}
          >
            Select mood
          </DialogTitle>

          {moods.map((m) => (
            <MenuItem
              key={m}
              selected={m === mood}
              onClick={() => handleClick(m)}
            >
              {moodEmoji[m]} {capitalize(m)}
            </MenuItem>
          ))}
        </div>
      </Dialog>
    </>
  );
};

export default MoodPicker;
