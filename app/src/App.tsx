import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

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

const App = () => {
  return (
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
  );
};

export default App;
