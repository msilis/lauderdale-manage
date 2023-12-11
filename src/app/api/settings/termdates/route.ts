import { NextResponse } from "next/server";
import { db } from "@/lib/firebase/firebaseConfig";
import { collection, addDoc, getDoc, doc, updateDoc } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const termData = await request.json();
    let dateRef;
    switch (termData.termNumber) {
      case 1:
        dateRef = doc(db, "settings", "lauderdale-term-1-master");
        break;
      case 2:
        dateRef = doc(db, "settings", "lauderdale-term-2-master");
        break;
      case 3:
        dateRef = doc(db, "settings", "lauderdale-term-3-master");
        break;
      default:
        dateRef = null;
    }

    if (!dateRef) {
      await addDoc(collection(db, "settings"), {
        termDates: termData.termDates,
      });
    } else {
      await updateDoc(dateRef, termData);
    }
    return NextResponse.json(
      { message: "Term dates set successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("There was an error storing settings in the database", error);
    return NextResponse.json(
      { message: "Error storing settings in database" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const termIDs = [
      "lauderdale-term-1-master",
      "lauderdale-term-2-master",
      "lauderdale-term-3-master",
    ];
    const termPromises = termIDs.map((id) => getDoc(doc(db, "settings", id)));
    const termDocs = await Promise.all(termPromises);
    const terms = termDocs.map((doc) => doc.data());

    return NextResponse.json(terms);
  } catch (error) {
    console.error("Error fetching term dates", error);
    return NextResponse.json(
      { message: "Error fetching term dates" },
      { status: 500 }
    );
  }
}
