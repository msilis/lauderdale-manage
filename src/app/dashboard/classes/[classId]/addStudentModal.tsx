"use client";

import { useEffect, useState } from "react";
import React from "react";
import { StudentData } from "../../students/studentView/studentView";
import { UI_TEXT } from "../../../../../utils/uitext";
import { getAllStudents } from "../../students/studentView/studentUtils";
import Select from "react-select";
import { ActionMeta } from "react-select";
import { saveStudentsToClass, selectOptions } from "./modalUtils";

interface AddStudentProps {
  className: string;
  classId: string;
  onClose: () => void;
  onSave: (student: StudentData) => void;
}

export interface StudentNames {
  studentFirstName: string;
  studentLastName: string;
  id: string;
}

export type StudentOption = {
  value: string;
  label: string;
  id: string;
};

const AddStudentToClass = React.forwardRef<HTMLDialogElement, AddStudentProps>(
  ({ className, onClose, onSave, classId }, ref) => {
    const [studentNames, setStudentNames] = useState<
      StudentNames[] | undefined
    >();
    const [selectedStudents, setSelectedStudents] = useState<StudentOption[]>(
      []
    );

    useEffect(() => {
      const fetchStudentNames = async () => {
        const studentData = await getAllStudents();
        const extractedData = studentData.map((student: StudentData) => ({
          studentFirstName: student.studentFirstName,
          studentLastName: student.studentLastName,
          id: student.id,
        }));
        setStudentNames(extractedData);
      };

      fetchStudentNames();
    }, []);

    const options = selectOptions(studentNames);
    const handleSelectChange = (
      selectedStudents: readonly StudentOption[],
      actionMeta: ActionMeta<StudentOption>
    ) => {
      if (selectedStudents) {
        setSelectedStudents(Array.from(selectedStudents));
      } else {
        setSelectedStudents([]);
      }
    };

    const handleSave = () => {
      saveStudentsToClass(selectedStudents, classId);
      onClose();
    };

    return (
      <dialog className="modal" ref={ref}>
        <div className="modal-box">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => {
                setSelectedStudents([]);
                onClose();
              }}
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Add students to {className}</h3>
          <div>
            <Select
              isMulti
              value={selectedStudents}
              options={options}
              onChange={handleSelectChange}
            />
          </div>
          <div className="flex gap-4 mb-2">
            <button
              className="btn btn-secondary mt-4 "
              onClick={() => {
                setSelectedStudents([]);
                onClose();
              }}
            >
              {UI_TEXT.cancelButton}
            </button>
            <button className="btn btn-accent mt-4" onClick={handleSave}>
              {UI_TEXT.saveButton}
            </button>
          </div>
        </div>
      </dialog>
    );
  }
);

export default AddStudentToClass;
