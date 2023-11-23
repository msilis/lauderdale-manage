"use client";

import React, { useState } from "react";
import { TeacherData } from "./teacherView";
import { UI_TEXT } from "../../../../../utils/uitext";

interface EditTeacherProps {
  teacher: TeacherData;
  onClose: () => void;
  onSave: (editedTeacherData: TeacherData) => void;
}

const EditTeacher = React.forwardRef<HTMLDialogElement, EditTeacherProps>(
  ({ teacher, onClose, onSave }, ref) => {
    const [editedTeacherData, setEditedTeacherData] =
      useState<TeacherData>(teacher);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setEditedTeacherData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
    return (
      <dialog id="editTeacherModal" ref={ref}>
        <div className="modal-box">
          <form method="dialog" className="flex flex-col mt-2 gap-2">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => onClose()}
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Update teacher information</h3>
        </div>
      </dialog>
    );
  }
);

export default EditTeacher;
