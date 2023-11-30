import { NextResponse } from "next/server";
import { db } from "@/lib/firebase/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const body = await request.text();
    const { id, ...data } = JSON.parse(body);
    const teacherRef = doc(db, "teachers", id);
    await updateDoc(teacherRef, data);
    return NextResponse.json({ message: "Teacher updated" }, { status: 200 });
  } catch (error) {
    console.error("There was an error updating teacher info", error);
    return NextResponse.json(
      { message: "There was an error updating teacher info" },
      { status: 500 }
    );
  }
}
