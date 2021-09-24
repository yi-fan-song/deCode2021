import { model, Schema } from "mongoose";

export const leaderboardSchema = new Schema({
  users: {
    type: [
      {
        type: String,
        required: true,
      },
    ],
    required: true,
  },
});

export const Leaderboard = model("Leaderboard", leaderboardSchema);
