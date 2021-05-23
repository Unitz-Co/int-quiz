import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from "./container/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import { getCookie } from "./helpers/cookie.js";
import { isTrue } from "./helpers/common.js";

const DashboardRouter = () => {
  return (
    <Switch>
      <Route exact path="/dashboard" component={Dashboard} />
      <Redirect path="*" to="/dashboard" />
    </Switch>
  );
}

export default () => (
  <Layout>
    <DashboardRouter />
  </Layout>
);
