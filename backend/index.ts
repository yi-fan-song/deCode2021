import express from "express";
import { registerLeaderboardHandlers } from "./controllers/leaderboard";

const app = express();

registerLeaderboardHandlers(app);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3001);
