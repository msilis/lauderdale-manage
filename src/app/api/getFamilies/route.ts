import { NextResponse } from "next/server";
import { db } from "@/lib/firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export async function GET(request: Request) {
  try {
    const querySnapshot = await getDocs(collection(db, "families"));
    const documents = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return NextResponse.json(documents);
  } catch (error) {
    console.error("Error getting family information", error);
    return NextResponse.json(
      { message: "Error getting family information" },
      { status: 500 }
    );
  }
}
