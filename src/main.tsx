import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "scss/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  DatalistProvider,
  SearchProvider,
  ThemeContext,
  ThemeProvider,
} from "./context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <DatalistProvider>
        <SearchProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </SearchProvider>
      </DatalistProvider>
    </React.StrictMode>
  </BrowserRouter>
);
