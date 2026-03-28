import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Event from "@/models/Event";
import { checkAuth } from "@/lib/auth";

// GET all events
export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const published = searchParams.get("published");

    const query = published === "true" ? { published: true } : {};

    const events = await Event.find(query).sort({ date: 1 });

    return NextResponse.json({ success: true, data: events });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}

// POST create new event
export async function POST(req) {
  try {
    // Temporarily disabled for development
    // const auth = checkAuth(req);
    // if (!auth.authenticated) {
    //   return NextResponse.json(
    //     { success: false, message: "Unauthorized" },
    //     { status: 401 }
    //   );
    // }

    await connectDB();

    const body = await req.json();

    // Generate slug from title
    const slug = body.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    const event = await Event.create({ ...body, slug });

    return NextResponse.json({ success: true, data: event }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
