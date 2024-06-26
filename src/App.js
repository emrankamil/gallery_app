import React from "react";
import Home from "./scenes/Home";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./scenes/global/TopBar";
import { theme } from "./theme";
import SideBar from "./scenes/global/SideBar";
import Box from "@mui/material/Box";
import Navbar from "./scenes/global/Navbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <main className="content">
          {/* <TopBar /> */}
          {/* <SideBar/> */}
          <Navbar/>
          <Home />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
