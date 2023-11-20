import { NextResponse } from "next/server";
import { db } from "@/lib/firebase/firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const teacherData = await request.json();
    await addDoc(collection(db, "teachers"), {
      teacherFirstName: teacherData.teacherFirstName,
      teacherLastName: teacherData.teacherLastName,
      teacherEmail: teacherData.teacherEmail,
      teacherPhone: teacherData.teacherPhone,
      teacherClasses: [],
    });
    return NextResponse.json(
      { message: "Teacher added to database" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Could not add teacher to database", error);
    return NextResponse.json(
      { message: "Error adding teacher to database" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const querySnapshot = await getDocs(collection(db, "teachers"));
    const documents = await querySnapshot.docs.map((doc) => doc.data());
    return NextResponse.json(documents, { status: 200 });
  } catch (error) {
    console.error("Could not get list of teachers from database");
    return NextResponse.json(
      { message: "Could not get teachers from database" },
      { status: 500 }
    );
  }
}
