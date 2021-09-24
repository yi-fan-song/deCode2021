import "react-circular-progressbar/dist/styles.css";

import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
// import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

const TipCard = (props: any) => (
  <Card color="#000">
    <Box bgcolor="primary">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Tip {props.num}
        </Typography>
        <Typography variant="h5" component="div">
          Lorem Ipsum
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Box>
  </Card>
);

const Dashboard = () => {
  const rng = Math.floor(Math.random() * 3 + 1);
  return (
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
        {rng === 1 && (
          <Alert severity="info">
            <AlertTitle>💡&nbsp;TIP</AlertTitle>
            <Typography variant="body1">
              We noticed you ran 3 loads of laundry during peak hours over the
              last 2 weeks. If you shifted to off-peak hours instead, you would
              have saved $xx.
            </Typography>
            <br />
            <Typography variant="body2">
              Click here to see Toronto Hydro’s peak-hour schedule.
            </Typography>
          </Alert>
        )}
        {rng === 2 && (
          <Alert severity="error">
            <AlertTitle>⚠️&nbsp;Alert</AlertTitle>
            <Typography variant="body1">
              We’re noticing an unusually high and consistent consumption of
              water. This may be a sign of a leaky water fixture. We recommend
              checking all of your toilets, faucets, and showers for leaks.
              Learn more.
            </Typography>
            <br />
            <Typography variant="body2">Learn more</Typography>
          </Alert>
        )}
        {rng === 3 && (
          <Alert severity="info">
            <AlertTitle>✨ WE APPRECIATE YOU ✨</AlertTitle>
            <Typography variant="body1">
              You’re consuming 28% less water and 30% less electricity than your
              average neighbour over the past month!
            </Typography>
            <br />
            <Typography variant="body2">
              Thank you for doing your part.
            </Typography>
          </Alert>
        )}
        <Box sx={{ my: 8 }} />
        <Typography variant="h5" textAlign="center">
          <strong>You are so close to unlocking your next challenge 🥇</strong>
        </Typography>
        <Box sx={{ my: 2 }} />
        <LinearProgress variant="determinate" value={80} />
      </Box>
      <Box sx={{ my: 20 }} />
      <Box sx={{ px: 30, py: 8, bgcolor: "primary.light" }}>
        <Typography variant="h4">Your Usage Summary</Typography>
        <Box sx={{ my: 8 }} />
        <Grid container spacing={16}>
          <Grid item xs={4}>
            <Box sx={{ textAlign: "center" }}>
              <CircularProgressbar value={60} text={`12L`} />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ textAlign: "center" }}>
              <CircularProgressbar value={80} text={`$240`} />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ textAlign: "center" }}>
              <CircularProgressbar value={20} text={`680kWh`} />
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
            <TipCard num={2} />
          </Grid>
          <Grid item xs={4}>
            <TipCard num={3} />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ px: 30, py: 8 }}>
        <Typography variant="h4">Your impact</Typography>
        <Box sx={{ my: 4 }} />
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <img src="impact.jpg" width={"100%"} alt="about impact"></img>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia
            </Typography>
            <Box sx={{ my: 4 }} />
            <Button color="primary" variant="contained">
              Tell me more
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ px: 30, py: 8, mb: 0, bgcolor: "primary.light" }}></Box>
    </>
  );
};
export default Dashboard;
