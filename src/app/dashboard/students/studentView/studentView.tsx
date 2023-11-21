"use client";

import StudentTable from "./studentTable";
import { useState } from "react";
import WarningAlert from "@/components/alert/alert";

const StudentView = () => {
  const [showAlert, setShowAlert] = useState<boolean>(true);
  const [studentId, setStudentId] = useState<string>("");

  const handleYesClick = () => {
    console.log(studentId, "...will be deleted");
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
        <StudentTable setShowAlert={setShowAlert} setStudentId={setStudentId} />
      </div>
    </div>
  );
};

export default StudentView;
