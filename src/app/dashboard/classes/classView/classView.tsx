"use client";

import ClassTable, { ClassData } from "./classTable";
import { useState, useEffect, useRef } from "react";
import WarningAlert from "@/components/alert/alert";
import { ALERT_TEXT } from "../../../../../utils/uitext";
import { deleteClass, getAllClasses } from "./classUtils";

const ClassView = () => {
  const [showClassDeleteAlert, setShowClassDeleteAlert] =
    useState<boolean>(false);
  const [classId, setClassId] = useState<string>("");
  const [classData, setClassData] = useState<ClassData[]>([]);

  useEffect(() => {
    const fetchAllClasses = async () => {
      const data = await getAllClasses();
      setClassData(data);
    };
    fetchAllClasses();
  }, []);

  const handleYesClassDeleteClick = async () => {
    await deleteClass(classId);
    const updatedClassList = await getAllClasses();
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
      <div className="mt-6">
        <ClassTable
          setShowAlert={setShowClassDeleteAlert}
          setClassId={setClassId}
          classData={classData}
        />
      </div>
    </div>
  );
};

export default ClassView;
