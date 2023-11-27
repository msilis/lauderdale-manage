import { NextResponse } from "next/server";
import { db } from "@/lib/firebase/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const body = await request.text();
    console.log({ body });
    const { classId, selectedStudents } = JSON.parse(body);
    const studentsToAdd = selectedStudents.map(
      (student: { id: string; label: string }) => ({
        studentId: student.id,
        studentName: student.label,
      })
    );
    console.log({ studentsToAdd });
    const classRef = doc(db, "classes", classId);
    await updateDoc(classRef, {
      classStudents: studentsToAdd,
    });
    return NextResponse.json(
      { message: "Students added to class" },
      { status: 200 }
    );
  } catch (error) {
    console.error("There was an error adding students to class", error);
    return NextResponse.json(
      { message: "There was an error adding students to class" },
      { status: 500 }
    );
  }
}
