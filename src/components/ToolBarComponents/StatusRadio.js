// @mui
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

// ----------------------------------------------------------------------

export default function StatusRadio({
  activityStatus,
  onChangeActivityStatus,
}) {
  return (
    <FormControl>
      <FormLabel>Activity Status</FormLabel>
      <RadioGroup row value={activityStatus} onChange={onChangeActivityStatus}>
        <FormControlLabel value="" control={<Radio />} label="All" />
        <FormControlLabel value="1" control={<Radio />} label="Online" />
        <FormControlLabel value="0" control={<Radio />} label="Offline" />
      </RadioGroup>
    </FormControl>
  );
}
