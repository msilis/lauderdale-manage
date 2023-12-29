import { TeacherData } from "../../teachers/teacherView/teacherView";

const editStudentOptions = (teacherData: TeacherData[]) => {
  const parsedTeaherNames = teacherData.map((teacher) => ({
    teacherLastName: teacher.teacherLastName,
    teacherFirstName: teacher.teacherFirstName,
    teacherId: teacher.id,
  }));
};
