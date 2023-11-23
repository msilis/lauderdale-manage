import { NextResponse } from "next/server";
import { db } from "@/lib/firebase/firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const classData = await request.json();
    await addDoc(collection(db, "classes"), {
      className: classData.className,
      classTeacher: classData.classTeacher,
      classAccompanist: classData.classAccompanist,
      classLocation: classData.classLocation,
      classStartTime: classData.classStartTime,
      classEndTime: classData.classEndTime,
    });
    return NextResponse.json(
      { message: "Class added to database" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Could not add class to database", error);
    return NextResponse.json(
      { message: "Error adding class to database" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const querySnapshot = await getDocs(collection(db, "classes"));
    const documents = await querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return NextResponse.json(documents, { status: 200 });
  } catch (error) {
    console.error("Could not get classes from database", error);
    return NextResponse.json(
      { message: "Error getting classes from database" },
      { status: 500 }
    );
  }
}
