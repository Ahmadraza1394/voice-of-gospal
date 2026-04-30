import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Event from "@/models/Event";
import { checkAuth } from "@/lib/auth";

// GET single event
export async function GET(req, { params }) {
  try {
    await connectDB();
    const { id } = await params;

    const event = await Event.findById(id);

    if (!event) {
      return NextResponse.json(
        { success: false, message: "Event not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true, data: event });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}

// PUT update event
export async function PUT(req, { params }) {
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
    const { id } = await params;

    const body = await req.json();

    // Update slug if title changed
    if (body.title) {
      body.slug = body.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
    }

    const event = await Event.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!event) {
      return NextResponse.json(
        { success: false, message: "Event not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true, data: event });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}

// DELETE event
export async function DELETE(req, { params }) {
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
    const { id } = await params;

    const event = await Event.findByIdAndDelete(id);

    if (!event) {
      return NextResponse.json(
        { success: false, message: "Event not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
