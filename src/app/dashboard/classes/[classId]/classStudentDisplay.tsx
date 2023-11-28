"use client";

import { useEffect, useState, useRef } from "react";
import { getAllStudents } from "../../students/studentView/studentUtils";
import AddStudentToClass from "./addStudentModal";
import { ClassData } from "../classView/classTable";

type ClassStudentDisplayProps = {
  classDetail: ClassData;
  addStudent: boolean;
  setAddStudent: (value: boolean) => void;
  dialogRef: React.RefObject<HTMLDialogElement>;
  setUpdateTable: React.Dispatch<React.SetStateAction<boolean>>;
};

const ClassStudentDisplay: React.FC<ClassStudentDisplayProps> = ({
  classDetail,
  addStudent,
  setAddStudent,
  dialogRef,
  setUpdateTable,
}) => {
  const [students, setStudents] = useState();
  const [studentsToDelete, setStudentsToDelete] = useState<string[]>([]);

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

  const handleCheckInput = (
    event: { target: { checked: any } },
    studentId: string
  ) => {
    if (event.target.checked) {
      setStudentsToDelete([...studentsToDelete, studentId]);
    } else {
      setStudentsToDelete(
        studentsToDelete.filter((student) => student !== studentId)
      );
    }
  };

  console.log(studentsToDelete, "studentsToDelete");

  return (
    <div className="flex flex-col ml-5 gap-6">
      <h3 className="font-bold">Students</h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Student Name</th>
            </tr>
          </thead>
          <tbody>
            {classDetail &&
              classDetail.classStudents?.map((student, index) => (
                <tr key={student.studentId}>
                  <td>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm"
                      onChange={(event) =>
                        handleCheckInput(event, student?.studentId)
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
        setUpdateTable={setUpdateTable}
      />
    </div>
  );
};

export default ClassStudentDisplay;
