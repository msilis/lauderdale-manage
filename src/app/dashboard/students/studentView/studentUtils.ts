import { errorToast, successToast } from "@/components/toast/toast";
import { TOAST_TEXT } from "@/components/toast/toastText";
import { SetStateAction } from "react";
import { StudentData } from "./studentView";

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

export const handleDialogClose = (setEditStudentData: {
  (value: SetStateAction<StudentData | null>): void;
  (arg0: null): void;
}) => {
  setEditStudentData(null);
};

export const handleDialogSave = async (
  setEditStudentData: React.Dispatch<React.SetStateAction<StudentData | null>>,
  editedStudentData: StudentData,
  callback: () => void
) => {
  const response = await fetch("../../../api/editstudent", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedStudentData),
  });
  if (!response.ok) {
    errorToast(TOAST_TEXT.errorUpdatingStudent);
    throw new Error("There was an error updating the student");
  }
  successToast(TOAST_TEXT.studentUpdated);
  callback();
  setEditStudentData(null);
};
