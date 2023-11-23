"use client";

import React, { useState } from "react";
import { ClassData } from "./classTable";
import { UI_TEXT } from "../../../../../utils/uitext";

interface EditClassProps {
  classItem: ClassData;
  onClose: () => void;
  onSave: (editedClassData: ClassData) => void;
}

const EditClass = React.forwardRef<HTMLDialogElement, EditClassProps>(
  ({ classItem, onClose, onSave }, ref) => {
    const [editedClassData, setEditedClassData] =
      useState<ClassData>(classItem);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setEditedClassData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    return (
      <dialog id="editClassModal" className="modal" ref={ref}>
        <div className="modal-box">
          <form method="dialog" className="flex flex-col mt-2 gap-2">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => onClose()}
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Update class information</h3>
          <div className="flex flex-col mt-4">
            <label htmlFor="className">Class Name</label>
            <input
              className="input input-bordered w-full max-w-xs mt-2"
              type="text"
              defaultValue={classItem.className}
              onChange={handleInputChange}
              name="className"
            />
            <label htmlFor="classLocation" className="mt-2">
              Class Name
            </label>
            <input
              type="text"
              defaultValue={classItem.classLocation}
              onChange={handleInputChange}
              name="classLocation"
              className="input input-bordered w-full max-w-xs mt-2"
            />
            <label htmlFor="classTeacher" className="mt-2">
              Teacher
            </label>
            <input
              type="text"
              defaultValue={classItem.classTeacher}
              onChange={handleInputChange}
              name="classTeacher"
              className="input input-bordered w-full max-w-xs mt-2"
            />
            <label htmlFor="classAccompanist" className="mt-2">
              Accompanist
            </label>
            <input
              className="input input-bordered w-full max-w-xs mt-2"
              type="text"
              defaultValue={classItem.classAccompanist}
              name="classAccompanist"
              onChange={handleInputChange}
            />
            <div className="flex gap-3 mt-2 items-center">
              <label htmlFor="classStartTime" className="mt-2">
                Start Time
              </label>
              <input
                id="classStartTime"
                name="classStartTime"
                type="time"
                defaultValue={classItem.classStartTime}
                onChange={handleInputChange}
                className="input input-bordered mt-2"
              />
              <label htmlFor="classEndTime" className="mt-2">
                End Time
              </label>
              <input
                id="classEndTime"
                name="classEndTime"
                type="time"
                defaultValue={classItem.classEndTime}
                onChange={handleInputChange}
                className="input input-bordered mt-2"
              />
            </div>
            <div>
              <button
                className="btn btn-accent mt-4"
                onClick={() => onSave(editedClassData)}
              >
                {UI_TEXT.saveButton}
              </button>
            </div>
          </div>
        </div>
      </dialog>
    );
  }
);

export default EditClass;
