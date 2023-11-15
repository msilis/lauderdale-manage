import { NextResponse } from "next/server";
import { doc, getDocs, collection, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase/firebaseConfig";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  const usersRef = collection(db, "users");
  const q = query(usersRef, where("email", "==", email));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return NextResponse.json(
      { message: "Username does not exist" },
      { status: 400 }
    );
  }

  const userDoc = querySnapshot.docs[0];
  const userData = userDoc.data();

  if (userData.password !== password) {
    return NextResponse.json(
      { message: "Password is incorrect" },
      { status: 400 }
    );
  }

  return NextResponse.json({ message: "User logged in" }, { status: 200 });
}
