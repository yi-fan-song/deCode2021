import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";

import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Leaderboard from "./components/leaderboard";
import Profile from "./components/profile";

// eslint-disable-next-line
import { app, analytics } from "./firebase";

const theme = createTheme({
  palette: {
    primary: {
      light: "#466d1d",
      main: "#466d1d",
      dark: "#466d1d",
      contrastText: "#fff",
    },
    secondary: {
      light: "#aaa",
      main: "#888",
      dark: "#666",
      contrastText: "#fff",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                href="/"
              >
                <HomeIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Switch>
                  <Route path="/dashboard">Dashboard</Route>
                  <Route path="/leaderboard">Leaderboard</Route>
                  <Route path="/profile">Profile</Route>
                  <Route path="/">Home</Route>
                </Switch>
              </Typography>
              <Button color="inherit" href="/dashboard">
                Dashboard
              </Button>
              <Button color="inherit" href="/leaderboard">
                Leaderboard
              </Button>
              <Button color="inherit" href="/Profile">
                Profile
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Box sx={{ m: 4 }}>
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
  );
};

export default App;
