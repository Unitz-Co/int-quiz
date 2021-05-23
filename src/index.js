import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { createBrowserHistory } from "history";
import configureStore from "./store/configureStore";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./styles/main.css";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#5f867f',
      main: '#335953',
      dark: '#07302b',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ff7c56',
      main: '#e3492b',
      dark: '#a90600',
      contrastText: '#ffffff',
    },
    cardCustom: {
      infected: '#00838f',
      recoveries: '#2e7d32',
      deaths: '#c62828'
    }
  },
});

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const history = createBrowserHistory({ basename: baseUrl });

// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = window.initialReduxState;
const store = configureStore(history, initialState);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <React.Fragment>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
    </React.Fragment>
  </MuiThemeProvider>,
  rootElement
);

registerServiceWorker();