import { React, useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import { useDispatch, useSelector } from "react-redux";
import {toggleSlice} from '../../features/navbar/toggleSlice'

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.gray[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};
const SideBar = () => {
  // const [toggled, setToggled] = useState(false);
  const toggled = useSelector((state) => state.toggle)
  const dispatch = useDispatch();
  return (
    <div style={{ display: "flex", height: "100%", minHeight: "400px" }}>
      <Sidebar
        onBackdropClick={() => dispatch(toggleSlice.actions.hideSidebar())}
        toggled={toggled}
        breakPoint="always"
      >
        <Menu>
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
          <MenuItem> Examples</MenuItem>
        </Menu>
      </Sidebar>
      <main style={{ display: "flex", padding: 10 }}>
        <div>
          <button
            className="sb-button"
            onClick={() => dispatch(toggleSlice.actions.showSidebar())}
            showSidebar
          >
            Toggle
          </button>
        </div>
      </main>
    </div>
  );
};

export default SideBar;