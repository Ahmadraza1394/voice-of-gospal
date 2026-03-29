import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json(
        { success: false, message: "No file provided" },
        { status: 400 }
      );
    }

    // Convert file to base64
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = buffer.toString("base64");
    const dataURI = `data:${file.type};base64,${base64}`;

    // Upload to Cloudinary
    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;

    const uploadResponse = await fetch(cloudinaryUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        file: dataURI,
        upload_preset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
      }),
    });

    const uploadData = await uploadResponse.json();

    if (!uploadResponse.ok) {
      return NextResponse.json(
        { success: false, message: "Upload failed", error: uploadData },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      url: uploadData.secure_url,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
