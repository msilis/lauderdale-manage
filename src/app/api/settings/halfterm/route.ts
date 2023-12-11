import { NextResponse } from "next/server";
import { db } from "@/lib/firebase/firebaseConfig";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const halfTermData = await request.json();
    let dateRef;
    switch (halfTermData.halfTermNumber) {
      case 1:
        dateRef = doc(db, "settings", "lauderdale-half-term-1");
        break;
      case 2:
        dateRef = doc(db, "settings", "lauderdale-half-term-2");
        break;
      case 3:
        dateRef = doc(db, "settings", "lauderdale-half-term-3");
        break;
      default:
        dateRef = null;
    }

    console.log(dateRef);
    console.log(halfTermData);
    if (!dateRef) {
      await addDoc(collection(db, "settings"), {
        halfTermDate: halfTermData.halfTermDate,
      });
    } else {
      await updateDoc(dateRef, halfTermData);
    }

    return NextResponse.json(
      { message: "Half term date set successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("There was an error saving the half-term date", error);
    return NextResponse.json(
      { message: "Error saving half-term data" },
      { status: 500 }
    );
  }
}
