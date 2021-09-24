import { model, Schema } from "mongoose";

export const leaderboardSchema = new Schema({
  leaderboardId: {
    type: String,
    required: true,
  },
  users: {
    type: [
      {
        userId: {
          type: String,
          required: true,
        },
        score: {
          type: Number,
          required: true,
        },
      },
    ],
    required: true,
  },
});

export const Leaderboard = model("Leaderboard", leaderboardSchema);
