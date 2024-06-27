import { React, useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import { useDispatch, useSelector } from "react-redux";
import { selectToggle, hideSidebar } from "./toggleSlice";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.gray[900],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      {/* <Link to={to} /> */}
    </MenuItem>
  );
};

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const toggled = useSelector(selectToggle)
  const dispatch = useDispatch();
  
  return (
    <div style={{ display: "flex", height: "100%", minHeight: "400px" }}>
      <Sidebar
        onBackdropClick={() => dispatch(hideSidebar())}
        toggled={toggled}
        breakPoint="all"
        backgroundColor={colors.primary[500]}
        rootStyles={{
          // paddingTop: "80px",
        }}
      >
        <Menu>
          <Item title="Dashboard" to="/dashboard" />
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
          <MenuItem> Examples</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SideBar;