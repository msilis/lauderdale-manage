"use client";

import { useEffect, useState, useRef } from "react";
import { getAllStudents } from "../../students/studentView/studentUtils";
import AddStudentToClass from "./addStudentModal";
import { ClassData } from "../classView/classTable";

const ClassStudentDisplay = ({ classDetail }: { classDetail: ClassData }) => {
  const [students, setStudents] = useState();
  const [addStudent, setAddStudent] = useState<boolean>(false);
  const addStudentRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const fetchAllStudents = async () => {
      const studentData = await getAllStudents();
      setStudents(studentData);
    };
    fetchAllStudents();
  }, []);

  useEffect(() => {
    if (addStudent !== false) {
      addStudentRef.current?.showModal();
    }
  }, [addStudent]);

  console.log(students);
  return (
    <div className="flex flex-col ml-5 gap-6">
      <h3 className="font-bold">Students</h3>
      <button className="btn btn-ghost" onClick={() => setAddStudent(true)}>
        Open modal
      </button>
      {addStudent && (
        <AddStudentToClass
          className={classDetail?.className}
          ref={addStudentRef}
          onClose={() => setAddStudent(false)}
          onSave={() => {}}
        />
      )}
    </div>
  );
};

export default ClassStudentDisplay;
