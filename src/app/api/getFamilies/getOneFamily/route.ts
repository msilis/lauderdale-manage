import { NextResponse } from "next/server";
import { db } from "@/lib/firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const familyId = await request.json();
    const docRef = doc(db, "families", familyId);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data(), "docSnap");
    return NextResponse.json(docSnap.data(), { status: 200 });
  } catch (error) {
    console.error("There was an error getting family details", error);
    return NextResponse.json(
      { message: "There was an error getting family details" },
      { status: 500 }
    );
  }
}
