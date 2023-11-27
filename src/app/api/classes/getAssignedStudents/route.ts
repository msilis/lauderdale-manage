import { NextResponse } from "next/server";
import { db } from "@/lib/firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const classId = await request.json();
    const docRef = doc(db, "classes", classId);
    const docSnap = getDoc(docRef);
    const data = (await docSnap).data();
    const classStudents = data?.classStudents;
    NextResponse.json({ classStudents }, { status: 200 });
  } catch (error) {
    console.error("There was an error getting the list of students", error);
    return NextResponse.json(
      { message: "There was an error getting the list of students" },
      { status: 500 }
    );
  }
}
