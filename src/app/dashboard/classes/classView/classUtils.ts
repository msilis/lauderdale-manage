import { errorToast, successToast } from "@/components/toast/toast";
import { TOAST_TEXT } from "@/components/toast/toastText";
import { ClassData } from "./classTable";
import { Dispatch, SetStateAction } from "react";

export const CLASS_TABLE = {
  className: "Class Name",
  classLocation: "Class Location",
  classStartTime: "Start Time",
  classEndTime: "End Time",
  classTeacher: "Teacher",
  classAccompanist: "Accompanist",
};

export const getAllClasses = async () => {
  const response = await fetch("../../../api/classes", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export const deleteClass = async (classId: string) => {
  const classToDelete = classId;
  const response = await fetch("../../../api/classes/deleteclass", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(classToDelete),
  });
  if (!response.ok) {
    errorToast(TOAST_TEXT.errorDeletingClass);
  }
  successToast(TOAST_TEXT.classDeleted);
};

export const handleClassDialogClose = (
  setEditClassData: (arg0: null) => void
) => {
  setEditClassData(null);
};

export const handleClassDialogSave = async (
  setEditClassData: React.Dispatch<React.SetStateAction<ClassData | null>>,
  editedClassData: ClassData
) => {
  const response = await fetch("../../../api/classes/editclass", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedClassData),
  });
  if (!response.ok) {
    errorToast(TOAST_TEXT.errorUpdatingStudent);
    throw new Error("There was an error updating the class");
  }
  successToast(TOAST_TEXT.classUpdated);
  setEditClassData(null);
};
