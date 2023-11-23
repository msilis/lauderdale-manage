"use client";

import { useEffect, useState } from "react";
import { CLASS_TABLE, getAllClasses } from "./classUtils";

export interface ClassData {
  className: string;
  classLocation: string;
  classTeacher: string;
  classAccompanist: string;
  classStartTime: string;
  classEndTime: string;
  id: string;
}

const ClassTable = () => {
  const [classData, setClassData] = useState<ClassData[]>([]);

  useEffect(() => {
    const fetchAllClasses = async () => {
      const data = await getAllClasses();
      setClassData(data);
    };
    fetchAllClasses();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>{CLASS_TABLE.className}</th>
            <th>{CLASS_TABLE.classLocation}</th>
            <th>{CLASS_TABLE.classTeacher}</th>
            <th>{CLASS_TABLE.classAccompanist}</th>
            <th>{CLASS_TABLE.classStartTime}</th>
            <th>{CLASS_TABLE.classEndTime}</th>
          </tr>
        </thead>
        <tbody>
          {classData.map((classItem, index) => (
            <tr key={index}>
              <td>{classItem.className}</td>
              <td>{classItem.classLocation}</td>
              <td>{classItem.classTeacher}</td>
              <td>{classItem.classAccompanist}</td>
              <td>{classItem.classStartTime}</td>
              <td>{classItem.classEndTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassTable;
