import React from "react";
import { Box } from "@material-ui/core";
import { Route, Switch, useRouteMatch } from "react-router";
import ListPage from "./pages/ListPage";

function AdvisorFeature() {
  const match = useRouteMatch();
  return (
    <Box pt={5}>
      <Switch>
        <Route path={match.url} exact component={ListPage} />
      </Switch>
    </Box>
  );
}

export default AdvisorFeature;
