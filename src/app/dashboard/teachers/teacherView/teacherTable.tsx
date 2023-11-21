"use client";

import { useEffect, useState } from "react";
import { TEACHER_TABLE, getAllTeachers } from "./teacherUtils";

interface TeacherData {
  teacherFirstName: string;
  teacherLastName: string;
  teacherEmail: string;
  teacherPhone: string;
}

const TeacherTable = () => {
  const [teacherData, setTeacherData] = useState<TeacherData[]>([]);

  useEffect(() => {
    const fetchAllTeachers = async () => {
      const data = await getAllTeachers();
      setTeacherData(data);
    };
    fetchAllTeachers();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <th>{TEACHER_TABLE.teacherFirstName}</th>
          <th>{TEACHER_TABLE.teacherLastName}</th>
          <th>{TEACHER_TABLE.teacherEmail}</th>
          <th>{TEACHER_TABLE.teacherPhone}</th>
        </thead>
        <tbody>
          {teacherData.map((teacher, index) => (
            <tr key={index}>
              <td>{teacher.teacherFirstName}</td>
              <td>{teacher.teacherLastName}</td>
              <td>{teacher.teacherEmail}</td>
              <td>{teacher.teacherPhone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherTable;
