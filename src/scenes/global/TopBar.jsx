import { Box, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { tokens } from "../../theme";
import DesktopNavbar from "./DesktopNavbar";
import Navbar from "./Navbar";

function TopBar() {
  const theme = useTheme();
  const navdata = useSelector((state) => state.navdata);

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1020);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 1020);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <Box px="20px" className="topbar">
      {isDesktop ? <DesktopNavbar /> : <Navbar />}
    </Box>
  );
}

export default TopBar;
