import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// eslint-disable-next-line
import Stack from "@mui/material/Stack";

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1, px: 30}}>
      <Typography variant="h3" sx={{maxWidth: 500}}>
        Go GREEN one challenge at a time
      </Typography>
      <Box sx={{my: 4}}/>
      <Typography variant="body1" sx={{maxWidth: 500}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      </Typography>
      <Box sx={{my: 4}}/>
      <Button variant="contained" color="primary" sx={{color: "white"}}>
        Register my Usage
      </Button>
    </Box>
  );
};
export default Home;
