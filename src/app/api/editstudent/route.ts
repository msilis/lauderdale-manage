import { NextResponse } from "next/server";
import { db } from "@/lib/firebase/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const body = await request.text();
    const { id, ...data } = JSON.parse(body);
    const studentRef = doc(db, "students", id);
    await updateDoc(studentRef, data);
    return NextResponse.json(
      { message: "Student data updated" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Could not update student info");
    return NextResponse.json(
      { message: "Could not update student information" },
      { status: 500 }
    );
  }
}
