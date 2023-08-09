import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import RefreshIcon from "@mui/icons-material/Refresh";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import Person2Icon from "@mui/icons-material/Person2";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Energyviss / Live Dashboard
          </Typography>
          <RefreshIcon
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            sx={{ padding: "0.5rem", cursor: "pointer" }}
          ></RefreshIcon>
          <AccessAlarmIcon
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            sx={{ padding: "0.5rem", cursor: "pointer" }}
          ></AccessAlarmIcon>
          <Person2Icon
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            sx={{ padding: "0.5rem", cursor: "pointer" }}
          ></Person2Icon>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
