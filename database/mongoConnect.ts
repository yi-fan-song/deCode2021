import * as Mongoose from "mongoose";
// import { UserModel } from "./users/users.model";
let database: Mongoose.Connection;
export const connect = () => {
  // add your own uri below
  const uri = "mongodb+srv://dbUser:${process.env.DB_PASS}@decode.bqo98.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  if (database) {
    return;
  }
  Mongoose.connect(uri);
  database = Mongoose.connection;
  database.once("open", async () => {
    console.log("Connected to database");
  });
  database.on("error", () => {
    console.log("Error connecting to database");
  });
};
export const disconnect = () => {
  if (!database) {
    return;
  }
  Mongoose.disconnect();
};

// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://dbUser:${process.env.DB_PASS}@decode.bqo98.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });