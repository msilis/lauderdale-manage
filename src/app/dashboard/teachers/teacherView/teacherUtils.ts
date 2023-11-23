import { errorToast, successToast } from "@/components/toast/toast";
import { TOAST_TEXT } from "@/components/toast/toastText";
import { TeacherData } from "./teacherView";
import { SetStateAction } from "react";

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

export const deleteTeacher = async (teacherId: string) => {
  const teacherToDelete = teacherId;
  const response = await fetch("../../../api/teachers/deleteteacher", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(teacherToDelete),
  });
  if (!response.ok) {
    errorToast(TOAST_TEXT.errorDeletingTeacher);
    throw new Error("Error deleting teacher");
  }
  successToast(TOAST_TEXT.teacherDeleted);
};

export const handleTeacherDialogClose = (setEditTeacherData: {
  (value: SetStateAction<TeacherData | null>): void;
  (arg0: null): void;
}) => {
  setEditTeacherData(null);
};

export const handleTeacherDialogSave = async (
  setEditTeacherData: React.Dispatch<React.SetStateAction<TeacherData | null>>,
  editedTeacherData: TeacherData,
  callback: () => void
) => {
  const response = await fetch("../../../api/teachers/editteacher", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedTeacherData),
  });
  if (!response.ok) {
    errorToast(TOAST_TEXT.errorUpdatingTeacher);
    throw new Error("There was an error updating the teacher");
  }
  successToast(TOAST_TEXT.teacherUpdated);
  callback();
  setEditTeacherData(null);
};
