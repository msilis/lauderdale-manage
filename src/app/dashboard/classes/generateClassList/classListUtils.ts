"use client";

import { useContext } from "react";
import { ClassDataContext } from "../../../../../utils/context/context";
import { json } from "stream/consumers";

export const fetchAssignedStudentInfo = async (studentIds: []) => {
  const { classAssignedStudents, setClassAssignedStudents } =
    useContext(ClassDataContext);
  const response = await fetch(
    "../../../api/classes/getClassStudentsForTable",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentIds),
    }
  );
  if (!response.ok) {
    throw new Error("There was an error getting student info");
  }
  console.log(response);
  setClassAssignedStudents(response.json());
};
