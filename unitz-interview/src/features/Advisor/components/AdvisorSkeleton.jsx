import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, makeStyles } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
AdvisorSkeleton.propTypes = {
  length: PropTypes.number,
};

AdvisorSkeleton.defaultProps = {
  length: 6,
};
const useStyle = makeStyles((theme) => ({
  root: {},
  left: {
    width: "250px",
    marginRight: theme.spacing(2),
  },
  right: {
    flex: "1 1 0",
  },
}));
function AdvisorSkeleton({ length }) {
  const classes = useStyle();
  return (
    <Box>
      <Grid container>
        {Array.from(new Array(length)).map((x, index) => (
          <Grid item key={index} xs={12}>
            <Box padding={1}>
              <Grid container>
                <Grid item className={classes.left}>
                  <Skeleton
                    variant="rect"
                    width="100%"
                    height={200}
                    animation="wave"
                  />
                </Grid>
                <Grid item className={classes.right}>
                  <Skeleton width="90%" />
                  <Skeleton width="85%" />
                  <Skeleton width="80%" />
                  <Skeleton width="70%" />
                  <Skeleton width="20%" />
                  <Skeleton width="50%" />
                  <Grid container justify="flex-start" alignItems="center">
                    <Grid item xs={3}>
                      <Skeleton width="70%" />
                    </Grid>
                    <Grid item xs={3}>
                      <Skeleton width="70%" />
                    </Grid>
                    <Grid item xs={3}>
                      <Skeleton width="70%" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default AdvisorSkeleton;
