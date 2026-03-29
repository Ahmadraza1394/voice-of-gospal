import mongoose from "mongoose";

const LivestreamSchema = new mongoose.Schema(
  {
    youtubeUrl: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    streamTitle: {
      type: String,
      default: "Live Stream — Join Us Every Sunday 9:00 AM",
    },
    serviceTimes: [
      {
        day: {
          type: String,
          required: true,
        },
        time: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Livestream ||
  mongoose.model("Livestream", LivestreamSchema);
