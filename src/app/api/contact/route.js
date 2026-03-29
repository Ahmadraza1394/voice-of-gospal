import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const adminEmail = process.env.CONTACT_EMAIL_TO || process.env.GMAIL_USER;

    const userEmailTemplate = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #90221A 0%, #b52e24 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
    .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
    .button { display: inline-block; background: #90221A; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You for Contacting Us!</h1>
    </div>
    <div class="content">
      <p>Dear ${name},</p>
      <p>Thank you for reaching out to <strong>Voice of the Gospel Tabernacle</strong>. We have received your message and will respond as soon as possible.</p>
      
      <h3>Your Message Details:</h3>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p style="background: white; padding: 15px; border-left: 4px solid #90221A; border-radius: 4px;">${message}</p>
      
      <p>We typically respond within 24-48 hours. If your matter is urgent, please feel free to call us directly.</p>
      
      <p>May God bless you abundantly!</p>
      
      <p style="margin-top: 30px;">
        <strong>Voice of the Gospel Tabernacle</strong><br>
        Spreading the Gospel with Love and Faith
      </p>
    </div>
    <div class="footer">
      <p>This is an automated confirmation email. Please do not reply to this message.</p>
      <p>&copy; ${new Date().getFullYear()} Voice of the Gospel Tabernacle. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
    `;

    const adminEmailTemplate = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
    .info-box { background: white; padding: 15px; margin: 10px 0; border-radius: 5px; border-left: 4px solid #3b82f6; }
    .label { font-weight: bold; color: #1e40af; }
    .message-box { background: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 5px; margin-top: 15px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🔔 New Contact Form Submission</h1>
    </div>
    <div class="content">
      <p>You have received a new message from the Voice of the Gospel website contact form.</p>
      
      <div class="info-box">
        <p><span class="label">Name:</span> ${name}</p>
      </div>
      
      <div class="info-box">
        <p><span class="label">Email:</span> <a href="mailto:${email}">${email}</a></p>
      </div>
      
      <div class="info-box">
        <p><span class="label">Subject:</span> ${subject}</p>
      </div>
      
      <div class="info-box">
        <p><span class="label">Submitted:</span> ${new Date().toLocaleString()}</p>
      </div>
      
      <h3>Message:</h3>
      <div class="message-box">
        ${message.replace(/\n/g, '<br>')}
      </div>
      
      <p style="margin-top: 20px; padding: 15px; background: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 4px;">
        <strong>💡 Tip:</strong> Click "Reply" to respond directly to ${name} at ${email}
      </p>
    </div>
  </div>
</body>
</html>
    `;

    await transporter.sendMail({
      from: `"Voice of the Gospel" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting Voice of the Gospel",
      html: userEmailTemplate,
    });

    await transporter.sendMail({
      from: `"VoG Contact Form" <${process.env.GMAIL_USER}>`,
      to: adminEmail,
      replyTo: email,
      subject: `New Contact Form: ${subject}`,
      html: adminEmailTemplate,
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
