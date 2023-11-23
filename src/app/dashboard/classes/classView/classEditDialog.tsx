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
        </div>
      </dialog>
    );
  }
);

export default EditClass;
