"use client";

import { useEffect, useState } from "react";
import { STUDENT_TABLE, getAllStudents } from "./studentUtils";

interface StudentData {
  studentFirstName: string;
  studentLastName: string;
  studentFamily: string;
  studentBirthdate: string;
  id: string;
}

const StudentTable = () => {
  const [studentData, setStudentData] = useState<StudentData[]>([]);

  useEffect(() => {
    const fetchAllStudents = async () => {
      const data = await getAllStudents();
      setStudentData(data);
    };
    fetchAllStudents();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <th>{STUDENT_TABLE.studentFirstName}</th>
          <th>{STUDENT_TABLE.studentLastName}</th>
          <th>{STUDENT_TABLE.studentFamily}</th>
          <th>{STUDENT_TABLE.studentBirthdate}</th>
        </thead>
        <tbody>
          {studentData.map((student) => (
            <tr key={student.id}>
              <td>{student.studentFirstName}</td>
              <td>{student.studentLastName}</td>
              <td>{student.studentFamily}</td>
              <td>{student.studentBirthdate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
