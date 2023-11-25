"use client";

import { useEffect, useState } from "react";
import React from "react";
import { StudentData } from "../../students/studentView/studentView";
import { UI_TEXT } from "../../../../../utils/uitext";
import { getAllStudents } from "../../students/studentView/studentUtils";

interface AddStudentProps {
  className: string;
  onClose: () => void;
  onSave: (student: StudentData) => void;
}

interface StudentNames {
  studentFirstName: string;
  studentLastName: string;
  id: string;
}

const AddStudentToClass = React.forwardRef<HTMLDialogElement, AddStudentProps>(
  ({ className, onClose, onSave }, ref) => {
    const [students, setStudents] = useState<StudentData | undefined>();
    const [studentNames, setStudentNames] = useState<
      StudentNames[] | undefined
    >();

    useEffect(() => {
      const fetchStudentNames = async () => {
        const studentData = await getAllStudents();
        const extractedData = studentData.map((student: StudentData) => ({
          studentFirstName: student.studentFirstName,
          studentLastName: student.studentLastName,
          studentId: student.id,
        }));
        setStudentNames(extractedData);
      };

      fetchStudentNames();
    }, []);

    return (
      <dialog className="modal" ref={ref}>
        <div className="modal-box">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => onClose()}
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Add students to {className}</h3>
          <div></div>
          <div className="flex gap-4">
            <button
              className="btn btn-secondary mt-4 "
              onClick={() => onClose()}
            >
              {UI_TEXT.cancelButton}
            </button>
            <button className="btn btn-accent mt-4" onClick={() => {}}>
              {UI_TEXT.saveButton}
            </button>
          </div>
        </div>
      </dialog>
    );
  }
);

export default AddStudentToClass;
