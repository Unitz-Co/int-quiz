import "../App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "features/Home";

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route path="/" component={Home} exact />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
