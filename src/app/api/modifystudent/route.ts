import { NextResponse } from "next/server";
import { db } from "@/lib/firebase/firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const deleteData = await request.json();
    console.log("Delete data: ", deleteData);
    await deleteDoc(doc(db, "students", deleteData));
    return NextResponse.json({ message: "Student deleted" }, { status: 200 });
  } catch (error) {
    console.error("There was an error deleting the student", error);
    return NextResponse.json(
      { message: "There was an error deleting the student" },
      { status: 500 }
    );
  }
}
