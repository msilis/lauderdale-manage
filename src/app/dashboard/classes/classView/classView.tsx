"use client";

import ClassTable, { ClassData } from "./classTable";
import { useState, useEffect, useRef } from "react";
import WarningAlert from "@/components/alert/alert";
import { ALERT_TEXT } from "../../../../../utils/uitext";
import {
  deleteClass,
  getAllClasses,
  handleClassDialogClose,
} from "./classUtils";
import EditClass from "./classEditDialog";

const ClassView = () => {
  const [showClassDeleteAlert, setShowClassDeleteAlert] =
    useState<boolean>(false);
  const [classId, setClassId] = useState<string>("");
  const [classData, setClassData] = useState<ClassData[]>([]);
  const [editClassData, setEditClassData] = useState<ClassData | null>(null);

  const editDialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const fetchAllClasses = async () => {
      const data = await getAllClasses();
      setClassData(data);
    };
    fetchAllClasses();
  }, []);

  useEffect(() => {
    if (editClassData !== null) {
      editDialogRef.current?.showModal();
    }
  }, [editClassData]);

  const handleYesClassDeleteClick = async () => {
    await deleteClass(classId);
    const updatedClassList = await getAllClasses();
    setClassData(updatedClassList);
    setShowClassDeleteAlert(false);
  };

  const handleEditClick = (classItem: ClassData) => {
    setEditClassData(classItem);
  };

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-2xl">Current Classes</h2>
      {showClassDeleteAlert && (
        <WarningAlert
          alertText={ALERT_TEXT.deleteClass}
          setShowAlert={setShowClassDeleteAlert}
          handleYesClick={handleYesClassDeleteClick}
          setId={setClassId}
        />
      )}
      {editClassData && (
        <EditClass
          classItem={editClassData}
          onClose={() => handleClassDialogClose(setEditClassData)}
          onSave={() => {}}
          ref={editDialogRef}
        />
      )}
      <div className="mt-6">
        <ClassTable
          setShowAlert={setShowClassDeleteAlert}
          setClassId={setClassId}
          classData={classData}
          handleEditClick={handleEditClick}
        />
      </div>
    </div>
  );
};

export default ClassView;
