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
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
      </dialog>
    );
  }
);

export default EditClass;
