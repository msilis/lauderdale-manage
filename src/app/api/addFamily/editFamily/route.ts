import { NextResponse } from "next/server";
import { db } from "@/lib/firebase/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const body = await request.text();
    const { id, ...data } = JSON.parse(body);
    const familyRef = doc(db, "families", id);
    await updateDoc(familyRef, data);
    return NextResponse.json({ message: "Family updated" }, { status: 200 });
  } catch (error) {
    console.error("There was an error updating the family", error);
    return NextResponse.json(
      { message: "There was an error updating the family" },
      { status: 500 }
    );
  }
}
