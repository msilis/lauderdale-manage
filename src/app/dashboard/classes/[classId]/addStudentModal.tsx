import React from "react";

interface AddStudentProps {
  className: string;
}

const AddStudentToClass = React.forwardRef<HTMLDialogElement, AddStudentProps>(
  ({ className }, ref) => {
    return (
      <dialog className="modal" ref={ref}>
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Add students to `${className}`</h3>
        </div>
      </dialog>
    );
  }
);

export default AddStudentToClass;
