import { NextResponse } from "next/server";
import { db } from "@/lib/firebase/firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const termData = await request.json();
    await addDoc(collection(db, "settings"), {
      termDates: termData.termDates,
    });
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
    const querySnapshot = await getDocs(collection(db, "settings"));
    const data = querySnapshot.docs.map((document) => {
      const data = document.data();
      const field = data["termDates"];
      return {
        id: document.id,
        field,
        ...data,
      };
    });
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching term dates", error);
    return NextResponse.json(
      { message: "Error fetching term dates" },
      { status: 500 }
    );
  }
}
