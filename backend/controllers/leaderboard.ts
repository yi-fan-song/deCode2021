import { Express, RequestHandler } from "express";
import { RouteParameters } from "express-serve-static-core";
import { connect } from "mongoose";
import { ParsedQs } from "qs";

import { connectionUri } from "../data/databaseConfig";
import { Leaderboard } from "../data/leaderboardSchemas";

const getLeaderboard: RequestHandler<
  RouteParameters<string>,
  any,
  any,
  ParsedQs,
  Record<string, any>
> = async (req, res) => {
  try {
    await connect(connectionUri);
    const leaderboard = await Leaderboard.find();
    console.log(leaderboard);
  } catch (error) {
    console.log(error);
  }
};

export const registerLeaderboardHandlers = (app: Express) => {
  const basePath = "/leaderboard";

  app.get(`${basePath}`, getLeaderboard);
};
