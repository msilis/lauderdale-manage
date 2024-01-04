"use client";

export const fetchAssignedStudentInfo = async (studentIds: []) => {
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
};
