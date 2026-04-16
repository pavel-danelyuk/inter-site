import { NextResponse } from "next/server";
import { validateContactPayload } from "@/lib/validations";

export async function POST(request) {
  const body = await request.json();
  const errors = validateContactPayload(body);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    message: "Inquiry received successfully.",
  });
}
