"use client";

import { useEffect, useState } from "react";
import { getAllStudents } from "../../students/studentView/studentUtils";
import AddStudentToClass from "./addStudentModal";
import { ClassData } from "../classView/classTable";

const ClassStudentDisplay = ({ classDetail }: { classDetail: ClassData }) => {
  const [students, setStudents] = useState();
  const [addStudent, setAddStudent] = useState<boolean>(true);

  useEffect(() => {
    const fetchAllStudents = async () => {
      const studentData = await getAllStudents();
      setStudents(studentData);
    };
    fetchAllStudents();
  }, []);

  console.log(students);
  return (
    <div className="flex flex-col ml-5 gap-6">
      <h3 className="font-bold">Students</h3>
      {addStudent && <AddStudentToClass className={classDetail?.className} />}
    </div>
  );
};

export default ClassStudentDisplay;
