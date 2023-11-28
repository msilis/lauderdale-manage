import { NextResponse } from "next/server";
import { db } from "@/lib/firebase/firebaseConfig";
import { doc, updateDoc, arrayRemove } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const studentsToDelete = body.studentsToDelete;

    const classRef = doc(db, "classes", body.classId);
    await updateDoc(classRef, {
      classStudents: arrayRemove(...studentsToDelete),
    });
    return NextResponse.json(
      { message: "Student(s) removed from class" },
      { status: 200 }
    );
  } catch (error) {
    console.error("There was an error removing the students(s)", error);
    return NextResponse.json(
      { message: "Error removing the student(s)" },
      { status: 500 }
    );
  }
}
