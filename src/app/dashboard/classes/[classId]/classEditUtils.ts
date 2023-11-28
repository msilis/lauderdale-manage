import { errorToast, successToast } from "@/components/toast/toast";
import { TOAST_TEXT } from "@/components/toast/toastText";
import { StudentToDeleteType } from "./page";

export const handleRemoveStudent = async (
  studentsToDelete: StudentToDeleteType[],
  classId: string | undefined
) => {
  const deleteData = {
    studentsToDelete: studentsToDelete,
    classId: classId,
  };
  const response = await fetch("../../../api/classes/removeStudent", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(deleteData),
  });
  if (!response.ok) {
    errorToast(TOAST_TEXT.errorRemovingStudent);
    throw new Error("There was an error removing students");
  }
  successToast(TOAST_TEXT.studentRemoved);
};
