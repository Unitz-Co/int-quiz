import { CircularProgress, Grid } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Grid flex={1} container justifyContent="center" alignItems="center">
      <CircularProgress />
    </Grid>
  );
};

export default Loading;
