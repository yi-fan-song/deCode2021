import cors from "cors";
import express from "express";

import { registerLeaderboardHandlers } from "./controllers/leaderboard";
import { registerUserHandlers } from "./controllers/user";

const app = express();

app.use(express.json());
app.use(cors());

registerLeaderboardHandlers(app);
registerUserHandlers(app);

app.listen(3001);
console.info("Server listening on port 3001");
