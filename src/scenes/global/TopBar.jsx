import { Box, Link, Popover, Typography, colors, useTheme } from "@mui/material";
import React from "react";
import Logo from "../../components/Logo";
import { useSelector } from "react-redux";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { tokens } from "../../theme";

function TopBar() {
  const navdata = useSelector((state) => state.navdata);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px="20px"
      gap="40px"
    >
      <Box width="10%">
        <Logo />
      </Box>
      <Box display="flex" width="70%" justifyContent="space-between" gap="10px">
        {navdata.map((item, index) => {
          return (
            <Box key={index} textAlign="center">
              {/* <Typography varient="h3">{item.label}</Typography> */}
              <MouseOverPopover label={item.label} />
            </Box>
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
  );
}

export default TopBar;

const MouseOverPopover = ({ label }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const navdata = useSelector((state) => state.navdata);
  const data = navdata.find((item) => item.label === label);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Typography
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        {label}
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Box display="flex" justifyContent="center" alignItems="center" width='1000px' height='100hv'>
          {data.dropdown.map((item, key) => {
            return (
              <Box key={key}>
                <Typography>{item.title}</Typography>
                {item.links.map((link, key) => {
                  return (
                    <Link href={link.link} key={key}>
                      <Typography variant='h3' color={colors.gray[500]}>{link.label}</Typography>
                    </Link>
                  );
                })}
              </Box>
            );
          })}
        </Box>
        {/* <Typography sx={{ p: 1 }}>{data["dropdown"][0]["title"]}</Typography> */}
      </Popover>
    </div>
  );
};
