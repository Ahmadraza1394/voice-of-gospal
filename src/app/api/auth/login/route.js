import { NextResponse } from "next/server";
import { generateToken } from "@/lib/auth";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Simple authentication - in production, use hashed passwords
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@voiceofgospel.com";
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const token = generateToken({ email, role: "admin" });

      return NextResponse.json({
        success: true,
        token,
        user: { email, role: "admin" },
      });
    }

    return NextResponse.json(
      { success: false, message: "Invalid credentials" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
