import { NextResponse } from "next/server";

export async function GET() {
  console.log("api route");
  return NextResponse.json({ message: "Hello from the apicheck route" });
}
