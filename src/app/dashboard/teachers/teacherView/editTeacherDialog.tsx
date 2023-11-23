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
      <dialog id="editTeacherModal" className="modal" ref={ref}>
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
          <div className="flex flex-col mt-4">
            <label htmlFor="teacherFirstName" className="mt-2">
              First Name
            </label>
            <input
              type="text"
              defaultValue={teacher.teacherFirstName}
              onChange={handleInputChange}
              name="teacherFirstName"
              className="input input-bordered w-full max-w-xs"
            />
            <label htmlFor="teacherLastName" className="mt-2">
              Last Name
            </label>
            <input
              type="text"
              defaultValue={teacher.teacherLastName}
              onChange={handleInputChange}
              name="teacherLastName"
              className="input input-bordered w-full max-w-xs mt-2"
            />
            <label htmlFor="teacherEmail" className="mt-2">
              Email
            </label>
            <input
              type="email"
              defaultValue={teacher.teacherEmail}
              onChange={handleInputChange}
              name="teacherEmail"
              className="input input-bordered w-full max-w-xs mt-2"
            />
            <label htmlFor="teacherPhone" className="mt-2">
              Phone
            </label>
            <input
              type="tel"
              defaultValue={teacher.teacherPhone}
              onChange={handleInputChange}
              name="teacherPhone"
              className="input input-bordered w-full max-w-xs mt-2"
            />
          </div>
          <div>
            <button
              className="btn btn-accent mt-4"
              onClick={() => onSave(editedTeacherData)}
            >
              {UI_TEXT.saveButton}
            </button>
          </div>
        </div>
      </dialog>
    );
  }
);

export default EditTeacher;
