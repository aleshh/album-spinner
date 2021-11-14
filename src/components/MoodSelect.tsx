import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SelectChangeEvent } from "@mui/material";

type MoodSelectProps = {
  color: string;
  onMoodChange: (mood: any) => void;
  mood: string;
  moods: string[];
};

const MoodSelect = ({
  onMoodChange,
  mood,
  moods,
  color,
  ...rest
}: MoodSelectProps): JSX.Element => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    onMoodChange(event.target.value);
  };

  return (
    <FormControl style={{ position: "absolute", top: 10, right: 10 }} {...rest}>
      <Select labelId="mood-select-label" value={mood} onChange={handleChange}>
        {moods.map((mood) => (
          <MenuItem value={mood}>{mood}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MoodSelect;
