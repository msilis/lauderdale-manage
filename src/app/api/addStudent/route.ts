import { NextResponse } from "next/server";
import { db } from "@/lib/firebase/firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const studentData = await request.json();
    console.log({ studentData });
    await addDoc(collection(db, "students"), {
      studentFirstName: studentData.studentFirstName,
      studentLastName: studentData.studentLastName,
      studentFamily: studentData.studentFamily,
      studentBirthdate: studentData.studentBirthdate,
    });
    return NextResponse.json(
      { message: "Student added to database" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding student to database", error);
    return NextResponse.json(
      { message: "Error adding student to database" },
      { status: 500 }
    );
  }
}
