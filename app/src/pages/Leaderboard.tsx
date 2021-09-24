import { reduce } from "lodash";
import React, { FC, ReactElement, useState } from "react";

import { Grid, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: "1rem",
    },
    numberingGrid: {
      display: "flex",
    },
    numbering: {
      fontSize: "24px",
      fontWeight: "bold",
    },
    usernameSpan: {
      fontSize: "18px",
      fontWeight: "bold",
    },
  })
);

export const Leaderboard: FC = () => {
  const classes = useStyles();
  // eslint-disable-next-line
  const [leaderboardName, setLeaderboardName] = useState("Clairview Hills");

  // eslint-disable-next-line
  const [users, setUsers] = useState([
    {
      _id: "12312311aawq",
      externId: "123",
      username: "john doe",
      email: "john@doe.com",
      electricityUsage: [
        { date: "2021-09-23", usage: 26 },
        { date: "2021-09-22", usage: 24 },
        { date: "2021-09-21", usage: 26 },
        { date: "2021-09-20", usage: 27 },
        { date: "2021-09-19", usage: 25 },
        { date: "2021-09-18", usage: 25 },
        { date: "2021-09-17", usage: 26 },
        { date: "2021-09-16", usage: 28 },
      ],
      waterUsage: [
        { date: "2021-09-23", usage: 80 },
        { date: "2021-09-22", usage: 75 },
        { date: "2021-09-21", usage: 72 },
        { date: "2021-09-20", usage: 82 },
        { date: "2021-09-19", usage: 83 },
        { date: "2021-09-18", usage: 70 },
        { date: "2021-09-17", usage: 94 },
        { date: "2021-09-16", usage: 72 },
      ],
    },
    {
      _id: "12312311bawq",
      externId: "153",
      username: "sara doe",
      email: "sara@doe.com",
      electricityUsage: [
        { date: "2021-09-23", usage: 26 },
        { date: "2021-09-22", usage: 24 },
        { date: "2021-09-21", usage: 26 },
        { date: "2021-09-20", usage: 27 },
        { date: "2021-09-19", usage: 25 },
        { date: "2021-09-18", usage: 25 },
        { date: "2021-09-17", usage: 26 },
        { date: "2021-09-16", usage: 28 },
      ],
      waterUsage: [
        { date: "2021-09-23", usage: 80 },
        { date: "2021-09-22", usage: 75 },
        { date: "2021-09-21", usage: 72 },
        { date: "2021-09-20", usage: 82 },
        { date: "2021-09-19", usage: 83 },
        { date: "2021-09-18", usage: 70 },
        { date: "2021-09-17", usage: 94 },
        { date: "2021-09-16", usage: 72 },
      ],
    },
  ]);

  const leaderboardList = reduce(
    users,
    (res, val, key) => {
      res.push(
        <Grid container key={val._id}>
          <Grid xs={1} className={classes.numberingGrid}>
            <Typography variant="h4" className={classes.numbering}>
              {key + 1}.
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="subtitle1" className={classes.usernameSpan}>
              {val.username}{" "}
              {key === 0 ? <img src="/crown.png" alt="crown" /> : null}
            </Typography>
          </Grid>
        </Grid>
      );
      return res;
    },
    [] as ReactElement[]
  );

  return (
    <>
      <Grid container sx={{ height: "85vh" }}>
        <Grid
          item
          md={3}
          sx={{
            bgcolor: "primary.light",
            paddingLeft: "50px",
            padding: 4,
            // mt: -8,
          }}
        >
          <Typography variant="h3">{leaderboardName}</Typography>
          <Typography variant="h5">Overview</Typography>
          {/* <h2>Overview</h2> */}
          {leaderboardList}
        </Grid>
        <Grid item md={9} sx={{ padding: 4 }}>
          <Typography variant="h3">Guildwood Village</Typography>
          <br />
          <Typography variant="h5">14 total members</Typography>
          <img src="/Leaderboard.png" alt="leaderboard" width={1200} />
        </Grid>
      </Grid>
    </>
  );
};
