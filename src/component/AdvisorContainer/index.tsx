import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import AdvisorCard from "component/AdvisorCard";
import React from "react";
import { memo } from "react";
import { AdvisorType } from "utils";

type AdvisorContainerProps = {
  data: Array<AdvisorType>;
};

const AdvisorContainer = ({ data }: AdvisorContainerProps) => {
  return data.length > 0 ? (
    <Grid container flex={1} alignContent="flex-start" spacing={2} paddingY={2}>
      {data?.map((item) => (
        <Grid key={item.sys.id} item xs={12} sm={6} md={4} lg={3}>
          <AdvisorCard {...item} />
        </Grid>
      ))}
    </Grid>
  ) : (
    <Grid flex={1} container justifyContent="center" alignItems="center">
      <Typography fontWeight="bold">No result!</Typography>
    </Grid>
  );
};

export default memo(AdvisorContainer);
export type { AdvisorContainerProps };
