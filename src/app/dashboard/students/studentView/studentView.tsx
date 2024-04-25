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
import { ALERT_TEXT } from "../../../../../utils/uitext";

export interface StudentData {
  studentFirstName: string;
  studentLastName: string;
  studentFamily: string;
  studentBirthdate: string;
  id: string;
  studentTeacherId?: string;
  studentTeacher?: string;
  studentTeacherLastName?: string;
  studentTeacherFirstName?: string;
}

const StudentView = () => {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [studentId, setStudentId] = useState<string>("");
  const [studentData, setStudentData] = useState<StudentData[]>([]);
  const [editStudentData, setEditStudentData] = useState<StudentData | null>(
    null
  );
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const fetchAllStudents = async () => {
      const data = await getAllStudents();
      setStudentData(data);
    };
    fetchAllStudents();
  }, []);

  const updateStudentData = async () => {
    const updatedStudentData = await getAllStudents();
    setStudentData(updatedStudentData);
  };

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
          alertText={ALERT_TEXT.deleteStudent}
          setShowAlert={setShowAlert}
          handleYesClick={handleYesClick}
          setId={setStudentId}
        />
      )}
      {editStudentData && (
        <EditStudent
          student={editStudentData}
          onClose={() => handleDialogClose(setEditStudentData)}
          onSave={(editedStudentData) =>
            handleDialogSave(
              setEditStudentData,
              editedStudentData,
              updateStudentData
            )
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
