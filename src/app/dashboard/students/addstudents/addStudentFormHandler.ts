"use client";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const handleAddStudentSubmit = async (
  event: React.FormEvent<HTMLFormElement>,
  router: string[] | AppRouterInstance
) => {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);
  console.log({ formData });
  const studentData = Object.fromEntries(formData.entries());
  console.log({ studentData });

  const response = await fetch("../../../api/addStudent", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(studentData),
  });

  if (!response.ok) {
    throw new Error("Could not add student to database");
  }

  console.log("Student added to database");

  router.push("/dashboard/students");
};
