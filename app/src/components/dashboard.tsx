import React from "react";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

// import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const TipCard = (props: any) => (
  <Card color="#1457BC">
    <Box bgcolor="#1457BC">
      <CardContent>
        <Typography sx={{ fontSize: 30, pt: 3}} color="white" textAlign="center" gutterBottom>
          Tip {props.num}
        </Typography>
        <Typography color="white" variant="h5" textAlign="center" component="div">
          Lorem Ipsum
        </Typography>
        <Typography sx={{ fontSize: 14, pb: 1, mx: 1}} color="white" variant="body2" textAlign="center" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </CardContent>
    </Box>
  </Card>
);

const Dashboard = () => (
  <>
    <Box sx={{ px: 30 }}>
      <Typography variant="h3" textAlign="center">
        👋 Welcome back, Sarah
      </Typography>
      <Box sx={{ my: 4 }} />
      <Typography variant="h5" textAlign="center">
        You helped save XYZ since you've started!
      </Typography>
      <Box sx={{ my: 8 }} />
      <Typography variant="h5" textAlign="center">
        <strong>You are so close to unlocking your next challenge 🥇</strong>
      </Typography>
      <Box sx={{ my: 5, }} />
      <LinearProgress sx={{height: 30, borderRadius: 20}} variant="determinate" value={80} />
    </Box>
    <Box sx={{ my: 20 }} />
    <Box sx={{ px: 30, py: 8, bgcolor: "white" }}>
      <Typography variant="h4">Your Usage Summary</Typography>
      <Box sx={{ my: 8 }} />
      <Grid container spacing={16}>
        <Grid item xs={4}>
          <Box sx={{ borderRadius: 20}}>
            <CircularProgressbar strokeWidth={10} circleRatio={0.7} styles={buildStyles({
              rotation: 0.65,
              pathColor: "0165DA",
              trailColor: "323232",
              textColor: "black",
              textSize: 14
            })}
            value={60} text={`12 Liters`} />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ textAlign: "center" }}>
            <CircularProgressbar strokeWidth={10} circleRatio={0.7} styles={buildStyles({
              rotation: 0.65,
              strokeLinecap: "22860B",
              pathColor: "22860B",
              trailColor: "323232",
              textColor: "black",
              textSize: 14
            })} value={80} text={`$240`} />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ textAlign: "center" }}>
            <CircularProgressbar strokeWidth={10} circleRatio={0.7} styles={buildStyles({
              rotation: 0.65,
              strokeLinecap: "22860B",
              pathColor: "E4B50B",
              trailColor: "323232",
              textColor: "black",
              textSize: 14
            })} value={40} text={`680kWh`}/>
          </Box>
        </Grid>
      </Grid>
    </Box>
    <Box sx={{ px: 30, pt: 8 }}>
      <Typography variant="h4">Tips for you</Typography>
      <Box sx={{ my: 4 }} />
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <TipCard num={1} />
        </Grid>
        <Grid item xs={4}>
          <TipCard  num={2} />
        </Grid>
        <Grid item xs={4}>
          <TipCard num={3} />
        </Grid>
      </Grid>
    </Box>
    <Box sx={{ borderRadius: 20, px: 30, py: 8 }}>
      <Typography variant="h4">Your impact</Typography>
      <Box sx={{ my: 4 }} />
      <Grid sx={{ borderRadius:30 }} container spacing={4}>
        <Grid sx={{ borderRadius:30 }} xs={6}>
          <img src="impact.jpg" width={"100%"} alt="about impact"></img>
        </Grid>
        <Grid item xs={6}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia
          </Typography>
          <Box sx={{ my: 4 }} />
          <Button sx={{ borderRadius:30 }} color="primary" variant="contained">
            Tell me more
          </Button>
        </Grid>
      </Grid>
    </Box>
    <Box sx={{ px: 30, py: 8, mb: 0, bgcolor: "primary.light" }}></Box>
  </>
);
export default Dashboard;
