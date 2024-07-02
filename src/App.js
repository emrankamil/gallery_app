import React from "react";
import Home from "./scenes/Home";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./scenes/global/TopBar";
import { theme } from "./theme";
import SideBar from "./scenes/global/SideBar";
import Footer from "./scenes/global/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <main className="content">
          {/* <TopBar />
          <Home />
          <SideBar /> */}
          <Footer/>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
