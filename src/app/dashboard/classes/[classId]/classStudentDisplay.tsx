"use client";

import { useEffect, useState } from "react";
import { getAllStudents } from "../../students/studentView/studentUtils";

const ClassStudentDisplay = () => {
  const [students, setStudents] = useState();

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
    </div>
  );
};

export default ClassStudentDisplay;
