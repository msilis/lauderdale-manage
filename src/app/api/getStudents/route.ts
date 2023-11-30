import { NextResponse } from "next/server";
import { db } from "@/lib/firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export async function GET(request: Request) {
  try {
    const querySnapshot = await getDocs(collection(db, "students"));
    const documents = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return NextResponse.json(documents);
  } catch (error) {
    console.error(
      "There was an error getting student info from the database",
      error
    );
    return NextResponse.json(
      { message: "Error getting students from database" },
      { status: 500 }
    );
  }
}
