import { Grid } from "@mui/material";
import AdvisorContainer, {
  AdvisorContainerProps,
} from "component/AdvisorContainer";
import CategorySelection, {
  CategorySelectionProps,
} from "component/CategorySelection";
import Loading from "component/Loading";
import SearchBar, { SearchBarProps } from "component/SearchBar";
import React from "react";
import { memo } from "react";

type HomeUIProps = {
  searchBar: SearchBarProps;
  categorySelection: CategorySelectionProps;
  advisorContainer: AdvisorContainerProps;
  loading: boolean;
};

const HomeUI = ({
  advisorContainer,
  categorySelection,
  searchBar,
  loading,
}: HomeUIProps) => {
  return (
    <Grid
      container
      padding={1}
      flexDirection="column"
      flex={1}
      sx={{ backgroundColor: "#efefef", maxWidth: 1200, margin: "0 auto" }}
    >
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8} lg={6}>
          <SearchBar {...searchBar} />
        </Grid>
      </Grid>

      {loading ? (
        <Loading />
      ) : (
        <>
          <Grid container>
            <CategorySelection {...categorySelection} />
          </Grid>
          <AdvisorContainer {...advisorContainer} />
        </>
      )}
    </Grid>
  );
};

export default memo(HomeUI);
