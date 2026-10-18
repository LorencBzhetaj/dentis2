import { NextResponse } from "next/server";
// This preview accepts bookings by phone until a real delivery service is configured.
export async function POST() {
  return NextResponse.json({ error: "Ju lutemi telefononi klinikën për rezervime." }, { status: 503 });
}
