export const STUDENT_TABLE = {
  studentFirstName: "First Name",
  studentLastName: "Last Name",
  studentFamily: "Family",
  studentBirthdate: "Birthdate",
};

export const getAllStudents = async () => {
  const response = await fetch("../../../api/getStudents", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
