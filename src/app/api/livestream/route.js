import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Livestream from "@/models/Livestream";

// GET livestream settings
export async function GET() {
  try {
    await connectDB();

    let livestream = await Livestream.findOne({ isActive: true });

    // If no livestream exists, create default one
    if (!livestream) {
      livestream = await Livestream.create({
        youtubeUrl: "",
        isActive: true,
        streamTitle: "Live Stream — Join Us Every Sunday 9:00 AM",
        serviceTimes: [
          { day: "SUNDAY", time: "9:00 AM" },
          { day: "MIDWEEK", time: "6:00 PM" },
        ],
      });
    }

    return NextResponse.json({ success: true, data: livestream });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

// POST/PUT update livestream settings
export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { youtubeUrl, streamTitle, serviceTimes } = body;

    let livestream = await Livestream.findOne({ isActive: true });

    if (livestream) {
      // Update existing
      livestream.youtubeUrl = youtubeUrl;
      livestream.streamTitle = streamTitle;
      livestream.serviceTimes = serviceTimes;
      await livestream.save();
    } else {
      // Create new
      livestream = await Livestream.create({
        youtubeUrl,
        streamTitle,
        serviceTimes,
        isActive: true,
      });
    }

    return NextResponse.json({ success: true, data: livestream });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
