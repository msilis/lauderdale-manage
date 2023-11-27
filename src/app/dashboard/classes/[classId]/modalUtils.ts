import { errorToast, successToast } from "@/components/toast/toast";
import { StudentNames, StudentOption } from "./addStudentModal";
import { TOAST_TEXT } from "@/components/toast/toastText";

export const selectOptions = (
  studentNames: StudentNames[] | undefined,
  assignedStudents: StudentOption[] | undefined
) => {
  if (studentNames) {
    const mappedOptions = studentNames.map((student) => ({
      value: `${student.studentLastName}, ${student.studentFirstName}`,
      label: `${student.studentLastName}, ${student.studentFirstName}`,
      id: student.id,
    }));

    const filteredStudents = studentNames?.filter(
      (student) =>
        !assignedStudents?.find(
          (assignedStudent) => assignedStudent.id === student.id
        )
    );
    return filteredStudents;
  }
};

export const getAssignedStudents = async (classId: string) => {
  const response = await fetch("../../../api/classes/getAssignedStudents", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(classId),
  });
  if (!response.ok) {
    console.error("There was an error getting assigned students", Error);
  }
  const data = await response.json();
  return data;
};

export const saveStudentsToClass = async (
  selectedStudents: StudentOption[],
  classId: string
) => {
  const addStudentData = {
    classId: classId,
    selectedStudents: selectedStudents,
  };
  const response = await fetch("../../../api/classes/addToClass", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(addStudentData),
  });
  if (!response.ok) {
    errorToast(TOAST_TEXT.errorAddingStudentToClass);
  }
  successToast(TOAST_TEXT.studentAddedToClass);
};
