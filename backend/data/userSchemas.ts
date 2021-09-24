import { model, Schema } from "mongoose";

export const userSchema = new Schema({
  externId: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  electricityUsage: {
    type: [
      {
        date: String,
        usage: Number,
      },
    ],
  },
  waterUsage: {
    type: [
      {
        date: String,
        usage: Number,
      },
    ],
  },
});

export const User = model("User", userSchema);
