"use client";

import { TEACHER_TABLE } from "./teacherUtils";
import { TeacherData } from "./teacherView";

interface TeacherTableProps {
  teacherData: TeacherData[];
}

const TeacherTable: React.FC<TeacherTableProps> = ({ teacherData }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>{TEACHER_TABLE.teacherFirstName}</th>
            <th>{TEACHER_TABLE.teacherLastName}</th>
            <th>{TEACHER_TABLE.teacherEmail}</th>
            <th>{TEACHER_TABLE.teacherPhone}</th>
          </tr>
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
