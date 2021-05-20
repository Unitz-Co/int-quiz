import React from "react";
import PropTypes from "prop-types";
import Advisor from "../Advisor";
import { Box, Grid } from "@material-ui/core";
AdvisorList.propTypes = {
  data: PropTypes.array,
};

AdvisorList.defaultProps = {
  data: [],
};

function AdvisorList({ data }) {
  return (
    <Box>
      <Grid container>
        {data.map((advisor) => (
          <Grid item key={advisor.sys.id} xs={12}>
            <Advisor advisor={advisor} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default AdvisorList;
