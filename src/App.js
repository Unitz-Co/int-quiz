import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header></Header>
                    <div className="main">
                        <div className="grid-container">
                            {this.showContent(routes)}
                        </div>
                    </div>
                </div>
            </Router>
        );
    }

    showContent = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    >
                    </Route>
                );
            })
        }
        return <Switch>{result}</Switch>;
    }
}



export default App;