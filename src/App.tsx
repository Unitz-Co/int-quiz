import { CssBaseline, ThemeProvider } from "@mui/material";
import { Home } from "container";
import React from "react";
import { theme } from "utils";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
