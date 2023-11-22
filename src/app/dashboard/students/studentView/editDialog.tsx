import React from "react";
import { StudentData } from "./studentView";

interface EditStudentProps {
  student: StudentData;
  onClose: () => void;
  onSave: (student: StudentData) => void;
}

const EditStudent = React.forwardRef<HTMLDialogElement, EditStudentProps>(
  ({ student, onClose, onSave }, ref) => {
    return (
      <dialog id="editStudentModal" className="modal" ref={ref}>
        <div className="modal-box">
          <form method="dialog" className="flex flex-col mt-2 gap-2">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => onClose()}
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Update student information</h3>
          <div className="flex flex-col mt-4">
            <label htmlFor="studentFirstName">First Name</label>
            <input
              type="text"
              placeholder={student.studentFirstName}
              className="input input-bordered w-full max-w-xs"
            ></input>
            <label htmlFor="studentLastName" className="mt-2">
              Last Name
            </label>
            <input
              type="text"
              placeholder={student.studentLastName}
              className="input input-bordered w-full max-w-xs"
            />
            <label htmlFor="studentFamily" className="mt-2">
              Family
            </label>
            <select
              id="studentFamily"
              name="studentFamily"
              className="select select-bordered w-full  mt-2"
              defaultValue={student.studentFamily}
            >
              <option value="Default">Family...</option>
              <option value="Default">Family2</option>{" "}
            </select>
            <label htmlFor="studentBirthdate">Birthdate</label>
            <input
              type="date"
              name="studentBirthdate"
              id="studentBirthdate"
              defaultValue={student.studentBirthdate}
              className="input input-bordered w-full  mt-2"
            />
          </div>
        </div>
      </dialog>
    );
  }
);
export default EditStudent;
