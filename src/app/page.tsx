"use client";

import { db } from "../lib/firebase/firebaseConfig";
import { collection, getDoc, addDoc } from "firebase/firestore";
import { useState } from "react";

async function addData(firstName, lastName, familyName, birthDate) {
  try {
    const docRef = await addDoc(collection(db, "students"), {
      firstName: firstName,
      lastName: lastName,
      familyName: familyName,
      birthdate: birthDate,
    });
    console.log("Document added", docRef.id);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const added = await addData(firstName, lastName, familyName, birthDate);
    if (added) {
      setFirstName("");
      setLastName("");
      setFamilyName("");
      setBirthDate("");
      alert("Data added");
    }
  };
  return (
    <>
      <div>
        <h1>Lauderdale Manage</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <label htmlFor="familyName">Family Name</label>
          <input
            type="text"
            id="familyName"
            value={familyName}
            onChange={(event) => setFamilyName(event.target.value)}
          />
          <label htmlFor="birthdate">Birthdate</label>
          <input
            type="text"
            id="birthdate"
            value={birthDate}
            onChange={(event) => setBirthDate(event.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
