"use client";

import StudentTable from "./studentTable";
import { useState, useEffect, useRef } from "react";
import WarningAlert from "../../../../components/alert/alert";
import {
  getAllStudents,
  handleDialogClose,
  handleDialogSave,
  deleteStudent,
} from "./studentUtils";
import EditStudent from "./editDialog";

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
  const [editStudentData, setEditStudentData] = useState<StudentData | null>(
    null
  );
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  console.log("From studentView: ", editStudentData);

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

  const handleEditClick = (student: StudentData) => {
    setEditStudentData(student);
  };

  useEffect(() => {
    if (editStudentData !== null) {
      dialogRef.current?.showModal();
    }
  }, [editStudentData]);

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
      {editStudentData && (
        <EditStudent
          student={editStudentData}
          onClose={() => handleDialogClose(setEditStudentData)}
          onSave={(editedStudentData) =>
            handleDialogSave(setEditStudentData, editedStudentData)
          }
          ref={dialogRef}
        />
      )}
      <div className="mt-6">
        <StudentTable
          setShowAlert={setShowAlert}
          setStudentId={setStudentId}
          studentData={studentData}
          handleEditClick={handleEditClick}
        />
      </div>
    </div>
  );
};

export default StudentView;
