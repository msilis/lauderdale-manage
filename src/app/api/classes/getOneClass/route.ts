import { NextResponse } from "next/server";
import { db } from "@/lib/firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const classId = await request.json();
    const docRef = doc(db, "classes", classId);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    const id = docSnap.id;
    return NextResponse.json({ id, ...data }, { status: 200 });
  } catch (error) {
    console.error("There was an error getting class details", error);
    return NextResponse.json(
      { message: "There was an error getting class details" },
      { status: 500 }
    );
  }
}
