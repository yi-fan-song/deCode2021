import { Express, RequestHandler } from "express";
import { RouteParameters } from "express-serve-static-core";
import { connect } from "mongoose";
import { ParsedQs } from "qs";

import { connectionUri } from "../data/databaseConfig";
import { User } from "../data/userSchemas";

const getUser: RequestHandler<
  RouteParameters<string>,
  any,
  any,
  ParsedQs,
  Record<string, any>
> = async (req, res) => {
  try {
    const id = req.query.id;
    const externId = req.query.externId;

    await connect(connectionUri);

    if (id !== undefined) {
      const user = await User.findById(id);
      res.json(user);
      return;
    }

    const users = await User.find({
      externId: externId,
    });

    res.send(users[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const postUser: RequestHandler<
  RouteParameters<string>,
  any,
  any,
  ParsedQs,
  Record<string, any>
> = async (req, res) => {
  try {
    await connect(connectionUri);

    const user = new User(req.body);

    await user.save();
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const putUser: RequestHandler<
  RouteParameters<string>,
  any,
  any,
  ParsedQs,
  Record<string, any>
> = async (req, res) => {
  try {
    const id = req.params.id;

    await connect(connectionUri);

    const user = await User.findById(id);

    if (user !== null) {
      Object.assign(user, req.body);
      await user.save();
      res.json(user);
      return;
    }

    const newUser = new User(req.body);
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const getUsers: RequestHandler<
  RouteParameters<string>,
  any,
  any,
  ParsedQs,
  Record<string, any>
> = async (req, res) => {
  try {
    const userIds = req.query.ids;

    await connect(connectionUri);

    const users = await User.find({
      _id: {
        $in: userIds,
      },
    });
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const registerUserHandlers = (app: Express) => {
  const basePath = "/user";

  app.get(`${basePath}`, getUser);
  app.post(`${basePath}`, postUser);
  app.put(`${basePath}/:id`, putUser);

  app.get(`${basePath}s`, getUsers);
};
