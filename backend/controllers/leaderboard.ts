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
    const leaderboardId = req.query.id;

    await connect(connectionUri);

    const leaderboard = await Leaderboard.find({
      _id: leaderboardId,
    });

    res.send(leaderboard[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const postLeaderboard: RequestHandler<
  RouteParameters<string>,
  any,
  any,
  ParsedQs,
  Record<string, any>
> = async (req, res) => {
  try {
    await connect(connectionUri);

    const leaderboard = new Leaderboard(req.body);

    await leaderboard.save();
    res.send(leaderboard);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const putLeaderboard: RequestHandler<
  RouteParameters<string>,
  any,
  any,
  ParsedQs,
  Record<string, any>
> = async (req, res) => {
  try {
    const leaderboardId = req.params.id;

    await connect(connectionUri);

    const leaderboards = await Leaderboard.find({
      _id: leaderboardId,
    });
    if (leaderboards.length === 0) {
      const leaderboard = new Leaderboard({ ...req.body, _id: leaderboardId });

      await leaderboard.save();
      res.send(leaderboard);
      return;
    }

    const leaderboard = await Leaderboard.findOneAndUpdate(
      { _id: leaderboardId },
      { ...req.body },
      { new: true }
    );

    res.send(leaderboard);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const getMyLeaderboard: RequestHandler<
  RouteParameters<string>,
  any,
  any,
  ParsedQs,
  Record<string, any>
> = async (req, res) => {
  try {
    const userId = req.query.userId;

    await connect(connectionUri);

    const leaderboard = await Leaderboard.find({
      users: { $in: [userId] },
    });

    res.send(leaderboard);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const registerLeaderboardHandlers = (app: Express) => {
  const basePath = "/leaderboard";

  app.get(`${basePath}`, getLeaderboard);
  app.post(`${basePath}`, postLeaderboard);
  app.put(`${basePath}/:id`, putLeaderboard);

  app.get(`${basePath}/my`, getMyLeaderboard);
};
