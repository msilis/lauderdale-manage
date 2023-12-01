import { NextResponse } from "next/server";
import { db } from "@/lib/firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const termData = await request.json();
    await addDoc(collection(db, "settings"), {
      termDates: termData.termDates,
    });
  } catch (error) {
    console.error("There was an error storing settings in the database", error);
    return NextResponse.json(
      { message: "Error storing settings in database" },
      { status: 500 }
    );
  }
}
