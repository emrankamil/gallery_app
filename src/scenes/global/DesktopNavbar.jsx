import { Box, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import Logo from "../../components/Logo";
import { useSelector } from "react-redux";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { tokens } from "../../theme";
import DropDown from "./DropDown";

function DesktopNavbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navdata = useSelector((state) => state.navdata);
  const data = navdata.find((item) => item.label === "LIVING");
  const [currentDropdown, setCurrentDropdown] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseEnter = (label) => {
    setCurrentDropdown(label);
  };
  const handleMouseLeave = ({ label }) => {
    if (!isFocused) {
      setCurrentDropdown(null);
    }
  };

  useEffect(() => {
    if (!isFocused) {
      setCurrentDropdown(null);
    }
  }, [isFocused]);

  return (
    <Box px="20px" className="topbar">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap="40px"
        // className="topbar"
      >
        <Box width="10%">
          <Logo />
        </Box>
        <Box display="flex" width="70%" justifyContent="space-between">
          {navdata.map((item, index) => {
            return (
              <div
                style={{ textAlign: "center", padding: "10px" }}
                key={index}
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={() => handleMouseLeave(item.label)}
              >
                <Typography varient="h3">{item.label}</Typography>
              </div>
            );
          })}
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="20%"
        >
          <button>
            <Box
              borderBottom="solid 1px"
              width="70px"
              display="flex"
              justifyContent="left"
            >
              <SearchOutlinedIcon />
            </Box>
          </button>
          <button>
            <Box>
              <PermIdentityOutlinedIcon />
            </Box>
          </button>
          <button>
            <Box>
              <TurnedInNotOutlinedIcon />
            </Box>
          </button>
          <button>
            <Box>
              <ShoppingBagOutlinedIcon />
            </Box>
          </button>
        </Box>
      </Box>
      {/* drop down */}
      <div
        display="relative"
        onMouseEnter={() => setIsFocused(true)}
        onMouseLeave={() => setIsFocused(false)}
      >
        {currentDropdown ? (
          <DropDown
            data={navdata.find((item) => item.label === currentDropdown)}
          />
        ) : null}
      </div>
    </Box>
  );
}

export default DesktopNavbar;
