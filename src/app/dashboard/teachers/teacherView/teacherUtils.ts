export const TEACHER_TABLE = {
  teacherFirstName: "First Name",
  teacherLastName: "Last Name",
  teacherEmail: "Email",
  teacherPhone: "Phone",
};

export const getAllTeachers = async () => {
  const response = await fetch("../../../api/teachers", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
