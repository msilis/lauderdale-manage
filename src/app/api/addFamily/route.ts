import { NextResponse } from "next/server";
import { db } from "@/lib/firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const familyData = await request.json();
    await setDoc(doc(db, "families"), {
      parent1FirstName: familyData.parent1FirstName,
      parent1LastName: familyData.parent1LastName,
      parent1Email: familyData.parent1Email,
      parent1Phone: familyData.parent1Phone,
      parent1Address: familyData.parent1Address,
      parent2FirstName: familyData.parent2FirstName,
      parent2LastName: familyData.parent2LastName,
      parent2Email: familyData.parent2Email,
      parent2Phone: familyData.parent2Phone,
      parent2Address: familyData.parent2Address,
    });
    return NextResponse.json(
      { message: "Family added to database" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding family to database");
    return NextResponse.json(
      { message: "Error adding family to database" },
      { status: 500 }
    );
  }
}
