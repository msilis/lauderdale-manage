"use client";

import { useEffect, useState, useRef } from "react";
import { getAllStudents } from "../../students/studentView/studentUtils";
import AddStudentToClass from "./addStudentModal";
import { ClassData } from "../classView/classTable";
import { StudentToDeleteType } from "./page";

type ClassStudentDisplayProps = {
  classDetail: ClassData;
  addStudent: boolean;
  setAddStudent: (value: boolean) => void;
  dialogRef: React.RefObject<HTMLDialogElement>;
  updateTable: boolean;
  setUpdateTable: React.Dispatch<React.SetStateAction<boolean>>;
  studentsToDelete: StudentToDeleteType[];
  setStudentsToDelete: React.Dispatch<
    React.SetStateAction<StudentToDeleteType[]>
  >;
};

const ClassStudentDisplay: React.FC<ClassStudentDisplayProps> = ({
  classDetail,
  addStudent,
  setAddStudent,
  dialogRef,
  updateTable,
  setUpdateTable,
  studentsToDelete,
  setStudentsToDelete,
}) => {
  const [students, setStudents] = useState();

  interface StudentListProps {
    studentName: string;
    studentId: string;
  }

  useEffect(() => {
    const fetchAllStudents = async () => {
      const studentData = await getAllStudents();
      setStudents(studentData);
    };
    fetchAllStudents();
  }, [classDetail]);

  console.log(classDetail, "classDetail");

  const handleCheckInput = (
    event: { target: { checked: any } },
    studentId: string,
    studentName: string
  ) => {
    if (event.target.checked) {
      setStudentsToDelete([
        ...studentsToDelete,
        { studentId: studentId, studentName: studentName },
      ]);
    } else {
      setStudentsToDelete(
        studentsToDelete.filter((student) => student.studentId !== studentId)
      );
    }
  };

  const alphabeticalStudents = classDetail?.classStudents?.sort((a, b) => {
    const studentComparison = a.studentName.localeCompare(b.studentName);
    return studentComparison;
  });

  return (
    <div className="flex flex-col ml-5 gap-6">
      <h3 className="font-bold">Students</h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Remove?</th>
              <th></th>
              <th>Student Name</th>
            </tr>
          </thead>
          <tbody>
            {classDetail &&
              alphabeticalStudents &&
              alphabeticalStudents.map((student, index) => (
                <tr key={student.studentId}>
                  <td>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm"
                      onChange={(event) =>
                        handleCheckInput(
                          event,
                          student?.studentId,
                          student?.studentName
                        )
                      }
                    />
                  </td>
                  <td>{index + 1}</td>
                  <td>{student.studentName}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <AddStudentToClass
        className={classDetail?.className}
        classId={classDetail?.id}
        ref={dialogRef}
        onClose={() => setAddStudent(false)}
        onSave={() => {}}
        updateTable={updateTable}
        setUpdateTable={setUpdateTable}
      />
    </div>
  );
};

export default ClassStudentDisplay;
