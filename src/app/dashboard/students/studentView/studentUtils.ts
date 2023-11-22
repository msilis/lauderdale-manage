import { errorToast, successToast } from "@/components/toast/toast";
import { TOAST_TEXT } from "@/components/toast/toastText";

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

export const deleteStudent = async (studentId: string) => {
  const studentToDelete = studentId;
  const response = await fetch("../../../api/deletestudent", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(studentToDelete),
  });
  if (!response.ok) {
    errorToast(TOAST_TEXT.errorStudentDelete);
    throw new Error("Error deleting student");
  }
  successToast(TOAST_TEXT.studentDeleted);
};

export const handleDialogClose = (setEditStudentData) => {
  setEditStudentData(null);
};

export const handleDialogSave = (setEditStudentData) => {
  setEditStudentData(null);
};
