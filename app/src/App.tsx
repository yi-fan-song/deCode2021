import React from "react";
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Dashboard from "./components/dashboard";
import Home from "./components/home";
import Profile from "./components/profile";
import { Leaderboard } from "./pages/Leaderboard";

const theme = createTheme({
  palette: {
    primary: {
      light: "#d1e1fa",
      main: "#2971de",
      dark: "#2971de",
      contrastText: "#363636",
    },
    secondary: {
      light: "#d1e1fa",
      main: "#d1e1fa",
      dark: "#d1e1fa",
      contrastText: "#363636",
    },
  },
});

const App = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Router>
          <Box sx={{ flexGrow: 1 }} color="secondary">
            <AppBar
              position="static"
              sx={{
                bgcolor: "white",
                boxShadow: "none",
                color: "primary.main",
              }}
            >
              <Toolbar>
                <NavLink to="/" exact>
                  <img src="/logo_reaware.png" alt="logo" width="256px" />
                </NavLink>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <Switch>
                    <Route path="/dashboard">Dashboard</Route>
                    <Route path="/leaderboard">Leaderboard</Route>
                    <Route path="/profile">Profile</Route>
                    <Route path="/">Home</Route>
                  </Switch>
                  <Button color="inherit" href="/dashboard" sx={{ pl: 4 }}>
                    Dashboard
                  </Button>
                  <Button color="inherit" href="/leaderboard">
                    Leaderboard
                  </Button>
                  <Button color="inherit" href="/challenges">
                    Challenges
                  </Button>
                </Typography>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  href="/leaderboard"
                >
                  <NotificationsNoneIcon />
                </IconButton>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  href="/profile"
                >
                  <PermIdentityIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
          </Box>
          <Box sx={{ mt: 8 }}>
            <Switch>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/leaderboard">
                <Leaderboard />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Box>
        </Router>
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default App;
