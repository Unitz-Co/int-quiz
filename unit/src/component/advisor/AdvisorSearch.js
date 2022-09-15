import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { useState } from "react";
import { ADVISOR_STATUS } from "../../constants/constants";

export const AdvisorSearch = ({
  status,
  handleResetAdvisor,
  onClickButtonSearch,
  handleChangeStatus,
}) => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <Grid container spacing={2} p={2} alignItems="center">
      <Grid item xs={6}>
        <TextField
          label="Name or Category ..."
          variant="outlined"
          fullWidth
          size="small"
          onChange={(event) => {
            setSearchInput(event.target.value);
          }}
        />
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          endIcon={<PersonSearchIcon />}
          onClick={() => onClickButtonSearch(searchInput)}
        >
          Search
        </Button>
      </Grid>
      <Grid item xs={3}>
        <FormControl>
          <RadioGroup
            row
            value={status}
            onChange={(event) => {
              handleChangeStatus(event.target.value);
            }}
          >
            {Object.keys(ADVISOR_STATUS).map((value) => (
              <FormControlLabel
                key={value}
                value={value}
                control={<Radio />}
                label={ADVISOR_STATUS[value]}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
};
