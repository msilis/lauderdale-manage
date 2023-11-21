"use client";

import StudentTable from "./studentTable";
import { useState, useEffect } from "react";
import WarningAlert from "../../../../components/alert/alert";
import { deleteStudent } from "./studentUtils";
import { getAllStudents } from "./studentUtils";

export interface StudentData {
  studentFirstName: string;
  studentLastName: string;
  studentFamily: string;
  studentBirthdate: string;
  id: string;
}

const StudentView = () => {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [studentId, setStudentId] = useState<string>("");
  const [studentData, setStudentData] = useState<StudentData[]>([]);

  console.log([studentData]);

  useEffect(() => {
    console.log("fetchAllStudents effect ran");
    const fetchAllStudents = async () => {
      const data = await getAllStudents();
      setStudentData(data);
    };
    fetchAllStudents();
  }, []);

  const handleYesClick = async () => {
    await deleteStudent(studentId);
    const updatedStudents = await getAllStudents();
    setStudentData(updatedStudents);
    setShowAlert(false);
  };

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-2xl">Current Students</h2>
      {showAlert && (
        <WarningAlert
          alertText="Are you sure?"
          setShowAlert={setShowAlert}
          handleYesClick={handleYesClick}
          setStudentId={setStudentId}
        />
      )}
      <div className="mt-6">
        <StudentTable
          setShowAlert={setShowAlert}
          setStudentId={setStudentId}
          studentData={studentData}
        />
      </div>
    </div>
  );
};

export default StudentView;
