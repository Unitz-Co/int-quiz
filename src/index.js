import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { Provider } from "react-redux";
import Store from "./components/Store/Store";

const theme = extendTheme({
  colors: {
    head: "#2eb2aa",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={Store}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </Provider>
  // </React.StrictMode>
);

reportWebVitals();
