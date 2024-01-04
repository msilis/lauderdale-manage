import { NextResponse } from "next/server";
import { db } from "@/lib/firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const studentsToGet = await request.json();
    const studentPromises = studentsToGet.map(
      (student: { studentId: string }) => {
        const studentDocRef = doc(db, "students", student.studentId);
        return getDoc(studentDocRef);
      }
    );
    const studentDocs = await Promise.all(studentPromises);
    const studentData = studentDocs.map((studentDoc) => studentDoc.data());
    return NextResponse.json(studentData);
  } catch (error) {
    console.error("There was an error getting student info", error);
    return NextResponse.json(
      { message: "Error getting student info" },
      { status: 500 }
    );
  }
}
