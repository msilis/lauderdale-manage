import { NextResponse } from "next/server";
import { db } from "@/lib/firebase/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const body = await request.text();
    const { id, ...data } = JSON.parse(body);
    const classRef = doc(db, "classes", id);
    console.log({ data });
    await updateDoc(classRef, data);
    return NextResponse.json({ message: "Class updated" }, { status: 200 });
  } catch (error) {
    console.error("There was an error updating the class", error);
    return NextResponse.json(
      { message: "There was an error updating the class" },
      { status: 500 }
    );
  }
}
