import React from "react";
import Home from "./scenes/Home";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./scenes/global/TopBar";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <main className="content">
          <TopBar />
          <Home />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
