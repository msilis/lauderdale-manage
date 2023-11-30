"use client";

import TeacherTable from "./teacherTable";
import { useState, useEffect, useRef } from "react";
import WarningAlert from "@/components/alert/alert";
import {
  deleteTeacher,
  getAllTeachers,
  handleTeacherDialogClose,
  handleTeacherDialogSave,
} from "./teacherUtils";
import { ALERT_TEXT } from "../../../../../utils/uitext";
import EditTeacher from "./editTeacherDialog";

export interface TeacherData {
  teacherFirstName: string;
  teacherLastName: string;
  teacherEmail: string;
  teacherPhone: string;
  id: string;
}

const TeacherView = () => {
  const [teacherData, setTeacherData] = useState<TeacherData[]>([]);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [teacherId, setTeacherId] = useState<string>("");
  const [editTeacherData, setEditTeacherData] = useState<TeacherData | null>(
    null
  );

  const editTeacherRef = useRef<HTMLDialogElement | null>(null);

  const handleEditClick = () => {};

  useEffect(() => {
    const fetchAllTeachers = async () => {
      const data = await getAllTeachers();
      setTeacherData(data);
    };
    fetchAllTeachers();
  }, []);

  const updateTeacherData = async () => {
    const updatedTeacherData = await getAllTeachers();
    setTeacherData(updatedTeacherData);
  };

  const handleDeleteTeacher = async () => {
    await deleteTeacher(teacherId);
    const updatedTeachers = await getAllTeachers();
    setTeacherData(updatedTeachers);
    setShowAlert(false);
  };

  const handleEditTeacherClick = (teacher: TeacherData) => {
    setEditTeacherData(teacher);
  };

  useEffect(() => {
    if (editTeacherData !== null) {
      editTeacherRef.current?.showModal();
    }
  }, [editTeacherData]);

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-2xl">Current Teachers</h2>
      <div className="mt-6">
        {showAlert && (
          <WarningAlert
            alertText={ALERT_TEXT.deleteTeacher}
            setShowAlert={setShowAlert}
            handleYesClick={handleDeleteTeacher}
            setId={setTeacherId}
          />
        )}
        {editTeacherData && (
          <EditTeacher
            teacher={editTeacherData}
            onClose={() => handleTeacherDialogClose(setEditTeacherData)}
            onSave={(editedTeacherData) =>
              handleTeacherDialogSave(
                setEditTeacherData,
                editedTeacherData,
                updateTeacherData
              )
            }
            ref={editTeacherRef}
          />
        )}

        <TeacherTable
          teacherData={teacherData}
          setShowAlert={setShowAlert}
          setTeacherId={setTeacherId}
          handleEditClick={handleEditTeacherClick}
        />
      </div>
    </div>
  );
};

export default TeacherView;
