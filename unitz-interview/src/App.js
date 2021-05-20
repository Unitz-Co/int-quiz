import { Route, Switch } from "react-router-dom";
import AdvisorFeature from "./features/Advisor";
import NotFound from "./components/NotFound";
import Header from "components/Header";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" component={AdvisorFeature} exact />
        <Route path="/advisor" component={AdvisorFeature} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
