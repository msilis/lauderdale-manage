"use client";

import TeacherTable from "./teacherTable";
import { useState, useEffect, useRef } from "react";
import WarningAlert from "@/components/alert/alert";
import { getAllTeachers } from "./teacherUtils";

export interface TeacherData {
  teacherFirstName: string;
  teacherLastName: string;
  teacherEmail: string;
  teacherPhone: string;
}

const TeacherView = () => {
  const [teacherData, setTeacherData] = useState<TeacherData[]>([]);

  useEffect(() => {
    const fetchAllTeachers = async () => {
      const data = await getAllTeachers();
      setTeacherData(data);
    };
    fetchAllTeachers();
  }, []);
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-2xl">Current Teachers</h2>
      <div className="mt-6">
        <TeacherTable teacherData={teacherData} />
      </div>
    </div>
  );
};

export default TeacherView;
