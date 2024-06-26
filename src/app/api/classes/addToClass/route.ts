import { NextResponse } from "next/server";
import { db } from "@/lib/firebase/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const body = await request.text();
      const { classId, selectedStudents } = JSON.parse(body);
    const studentsToAdd = selectedStudents.map(
        (student: { id: string; label: string; studentTeacherLastName?: string }) => ({
        studentId: student.id,
            studentName: student.label,
        studentTeacherLastName: student.studentTeacherLastName
            
      })
    );

    const classRef = doc(db, "classes", classId);
    const classDoc = await getDoc(classRef);
    const classData = classDoc.data();
    const existingStudents = classData ? classData.classStudents || [] : [];
    const mergedStudents = [...existingStudents, ...studentsToAdd];
    await updateDoc(classRef, {
      classStudents: mergedStudents,
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
