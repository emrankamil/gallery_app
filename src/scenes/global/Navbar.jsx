import { Box, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import Logo from "../../components/Logo";
import { tokens } from "../../theme";
import { useSelector } from "react-redux";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
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
    <Box px="20px" className="">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap="40px"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="60px"
          >
          <button>
            <MenuIcon />
          </button>
          <button>
            <Box>
              <SearchOutlinedIcon />
            </Box>
          </button>
        </Box>

        <Box width="10%">
          <Logo />
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="20%"
        >
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
    </Box>
  );
}

export default Navbar;
