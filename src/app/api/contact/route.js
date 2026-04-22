import { createSupabaseServerClient } from "@/lib/supabase/server";

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

    console.log("Inserted row:", data);

    return Response.json({ success: true, row: data }, { status: 200 });
  } catch (error) {
    console.error("Contact route error:", error);
    return Response.json(
      { errors: { form: "Something went wrong. Please try again." } },
      { status: 500 }
    );
  }
}