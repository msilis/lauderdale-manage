"use client";

import StudentTable from "./studentTable";
import { useState } from "react";
import WarningAlert from "@/components/alert/alert";

const StudentView = () => {
  const [showAlert, setShowAlert] = useState<boolean>(true);
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-2xl">Current Students</h2>
      {showAlert && (
        <WarningAlert alertText="Are you sure?" setShowAlert={setShowAlert} />
      )}
      <div className="mt-6">
        <StudentTable setShowAlert={setShowAlert} />
      </div>
    </div>
  );
};

export default StudentView;
