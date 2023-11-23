import { errorToast, successToast } from "@/components/toast/toast";
import { TOAST_TEXT } from "@/components/toast/toastText";

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
