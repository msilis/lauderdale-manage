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
};

const ClassStudentDisplay: React.FC<ClassStudentDisplayProps> = ({
  classDetail,
  addStudent,
  setAddStudent,
  dialogRef,
}) => {
  const [students, setStudents] = useState();

  useEffect(() => {
    const fetchAllStudents = async () => {
      const studentData = await getAllStudents();
      setStudents(studentData);
    };
    fetchAllStudents();
  }, []);

  return (
    <div className="flex flex-col ml-5 gap-6">
      <h3 className="font-bold">Students</h3>

      <AddStudentToClass
        className={classDetail?.className}
        classId={classDetail?.id}
        ref={dialogRef}
        onClose={() => setAddStudent(false)}
        onSave={() => {}}
      />
    </div>
  );
};

export default ClassStudentDisplay;
