import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { checkAuth } from "@/lib/auth";

// GET all blogs
export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const published = searchParams.get("published");

    const query = published === "true" ? { published: true } : {};

    const blogs = await Blog.find(query).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: blogs });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}

// POST create new blog
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

    const blog = await Blog.create({ ...body, slug });

    return NextResponse.json({ success: true, data: blog }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
