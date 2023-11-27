import { StudentNames, StudentOption } from "./addStudentModal";

export const selectOptions = (studentNames: StudentNames[] | undefined) => {
  if (studentNames) {
    const mappedOptions = studentNames.map((student) => ({
      value: `${student.studentLastName}, ${student.studentFirstName}`,
      label: `${student.studentLastName}, ${student.studentFirstName}`,
      id: student.id,
    }));
    return mappedOptions;
  }
};

const saveStudentsToClass = (selectedStudents: StudentOption) => {};
