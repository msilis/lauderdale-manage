import { NextResponse } from "next/server";
import { db } from "@/lib/firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import firebase from "firebase/compat/app";

export async function POST(request: Request) {
  try {
    const body = await request.text();
    const { id, ...studentData } = JSON.parse(body);
    const classRef = doc(db, "classes", id);
    await setDoc(
      classRef,
      {
        classStudents: firebase.firestore.FieldValue.arrayUnion(...studentData),
      },
      { merge: true }
    );
    return NextResponse.json(
      { message: "Students added to class" },
      { status: 200 }
    );
  } catch (error) {
    console.error("There was an error adding students to class");
    return NextResponse.json(
      { message: "There was an error adding students to class" },
      { status: 500 }
    );
  }
}
