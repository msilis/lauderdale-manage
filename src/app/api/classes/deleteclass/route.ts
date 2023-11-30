import { NextResponse } from "next/server";
import { db } from "@/lib/firebase/firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const deleteData = await request.json();
    await deleteDoc(doc(db, "classes", deleteData));
    return NextResponse.json({ message: "Class deleted" }, { status: 200 });
  } catch (error) {
    console.error("There was an error deleting the class", error);
    return NextResponse.json(
      { message: "There was an error deleting the class" },
      { status: 500 }
    );
  }
}
