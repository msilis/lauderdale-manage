import { NextResponse } from "next/server";
import { db } from "@/lib/firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const body = await request.text();
    const { id, ...data } = JSON.parse(body);
  } catch (error) {
    console.error("There was an error adding students to class");
    return NextResponse.json(
      { message: "There was an error adding students to class" },
      { status: 500 }
    );
  }
}
