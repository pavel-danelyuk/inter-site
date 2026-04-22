import { createSupabaseServerClient } from "@/lib/supabase/server";
import { resend } from "@/lib/resend";

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, email, phone, service, budget, timeline, message } = body;

    const errors = {};

    if (!name?.trim()) errors.name = "Full name is required.";
    if (!email?.trim()) errors.email = "Email is required.";
    if (!message?.trim()) errors.message = "Project details are required.";

    if (Object.keys(errors).length > 0) {
      return Response.json({ errors }, { status: 400 });
    }

    const supabase = createSupabaseServerClient();

    const { data, error } = await supabase
      .from("meliora_contact_inquiries")
      .insert({
        full_name: name.trim(),
        email: email.trim(),
        phone: phone?.trim() || null,
        service: service || null,
        budget: budget || null,
        timeline: timeline?.trim() || null,
        message: message.trim(),
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return Response.json(
        { errors: { form: error.message || "Unable to submit right now. Please try again." } },
        { status: 500 }
      );
    }

    // 1) Notification email to you
    try {
      await resend.emails.send({
        from: "Meliora Maison <onboarding@resend.dev>",
        to: ["melioramaisoninfo@gmail.com"],
        subject: "New Contact Form Submission",
        html: `
          <h2>New Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "-"}</p>
          <p><strong>Service:</strong> ${service || "-"}</p>
          <p><strong>Budget:</strong> ${budget || "-"}</p>
          <p><strong>Timeline:</strong> ${timeline || "-"}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });
    } catch (notifyError) {
      console.error("Owner notification email error:", notifyError);
    }

    // 2) Auto-reply email to client
    try {
      await resend.emails.send({
        from: "Meliora Maison <onboarding@resend.dev>",
        to: [email.trim()],
        subject: "We received your inquiry",
        html: `
          <div style="font-family: Georgia, 'Times New Roman', serif; color: #241c18; line-height: 1.6;">
            <h2 style="margin-bottom: 16px;">Thank you for reaching out</h2>

            <p>Hi ${name.trim()},</p>

            <p>
              Thank you for contacting Meliora Maison. We’ve received your inquiry
              and will review the details shortly.
            </p>

            <p>
              We’ll be in touch as soon as possible to discuss next steps.
            </p>

            <div style="margin: 24px 0; padding: 16px; background: #f5f1ec; border-radius: 12px;">
              <p style="margin: 0 0 8px;"><strong>Submitted details</strong></p>
              <p style="margin: 0;"><strong>Service:</strong> ${service || "-"}</p>
              <p style="margin: 0;"><strong>Budget:</strong> ${budget || "-"}</p>
              <p style="margin: 0;"><strong>Timeline:</strong> ${timeline || "-"}</p>
            </div>

            <p>Warmly,<br />Meliora Maison</p>
          </div>
        `,
      });
    } catch (autoReplyError) {
      console.error("Client auto-reply email error:", autoReplyError);
    }

    return Response.json({ success: true, row: data }, { status: 200 });
  } catch (error) {
    console.error("Contact route error:", error);
    return Response.json(
      { errors: { form: "Something went wrong. Please try again." } },
      { status: 500 }
    );
  }
}