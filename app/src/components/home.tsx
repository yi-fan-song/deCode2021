import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Home = () => (
  <Box sx={{ flexGrow: 1, textAlign: "center"}}>
    <img src="cover.jpg" alt="the cover"></img>
    <Box sx ={{flexGrow: 1}}>
        <Stack spacing={2} direction="row" sx={{width: "fit-content", margin: "auto", marginTop: 2}}>
            <Button color="primary" variant="contained">Learn More</Button>
            <Button variant="contained">Register Your Meter</Button>
        </Stack>
    </Box>
  </Box>
);
export default Home;
