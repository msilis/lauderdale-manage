import { NextResponse } from "next/server";
import { db } from "@/lib/firebase/firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const deleteData = await request.json();
    await deleteDoc(doc(db, "teachers", deleteData));
    return NextResponse.json({ message: "Teacher deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting teacher", error);
    return NextResponse.json(
      { message: "There was an error deleting the teacher" },
      { status: 500 }
    );
  }
}
