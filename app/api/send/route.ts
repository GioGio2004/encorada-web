import { NextResponse } from "next/server";
import { Resend } from "resend";
import WelcomeEmail from "@/emails/my-email";
import SupportNotificationEmail from "@/emails/support-notification";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // Parse the request body
    const body = await req.json();
    
    // Extract data with fallbacks to prevent undefined values
    const email = body.email || "";
    const name = body.name || "";
    const projectType = body.projectType || "";
    const description = body.description || "";
    const urgency = body.urgency || "standard"; // Default to "standard" if not provided
    
    // Validate required fields
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Send confirmation email to client
    const clientEmailResponse = await resend.emails.send({
      from: "jobs@ideisgarshemo.space",
      to: email,
      subject: `${name} confirmation email | the order has been received`,
      react: WelcomeEmail({ name, projectType, description, urgency }),
    });

    // Send notification email to support team
    const supportEmailResponse = await resend.emails.send({
      from: "jobs@ideisgarshemo.space",
      to: "giokhvichia69@gmail.com", // Replace with your actual support email
      subject: `New Project Request from ${name} - ${urgency.toUpperCase()} Priority`,
      react: SupportNotificationEmail({ 
        clientEmail: email,
        name, 
        projectType, 
        description, 
        urgency,
        submittedAt: new Date().toISOString()
      }),
    });

    console.log("Client email sent successfully:", clientEmailResponse);
    console.log("Support email sent successfully:", supportEmailResponse);
    console.log("Recipient Email:", email);

    return NextResponse.json({ 
      success: true, 
      message: "Emails sent successfully!"
    }, { status: 200 });
    
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json({ 
      error: "Failed to send emails", 
      details: error instanceof Error ? error.message : String(error) 
    }, { status: 500 });
  }
}