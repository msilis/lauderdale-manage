"use client";

import React, { useState, useEffect } from "react";
import { StudentData } from "./studentView";
import { UI_TEXT } from "../../../../../utils/uitext";
import { TeacherData } from "../../teachers/teacherView/teacherView";
import { getAllTeachers } from "../../teachers/teacherView/teacherUtils";
import { editStudentOptions } from "./editUtils";

interface EditStudentProps {
  student: StudentData;
  onClose: () => void;
  onSave: (editedStudentData: StudentData) => void;
}

const EditStudent = React.forwardRef<HTMLDialogElement, EditStudentProps>(
  ({ student, onClose, onSave }, ref) => {
    const [editedStudentData, setEditedStudentData] =
      useState<StudentData>(student);
    const [teacherData, setTeacherData] = useState<TeacherData[]>([]);
    const [teacherName, setTeacherName] = useState<{
      teacherLastName: string;
      id: string;
    } | null>({ teacherLastName: "", id: "" });

    useEffect(() => {
      const getTeachers = async () => {
        const data = await getAllTeachers();
        setTeacherData(data);
      };
      getTeachers();
    }, []);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setEditedStudentData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    //TODO (ms) parse teacher info and set teacher name for select

    const options = editStudentOptions(teacherData);

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
              defaultValue={student.studentFirstName}
              onChange={handleInputChange}
              name="studentFirstName"
              className="input input-bordered w-full max-w-xs"
            ></input>
            <label htmlFor="studentLastName" className="mt-2">
              Last Name
            </label>
            <input
              type="text"
              defaultValue={student.studentLastName}
              onChange={handleInputChange}
              name="studentLastName"
              className="input input-bordered w-full max-w-xs"
            />
            <label htmlFor="studentBirthdate">Birthdate</label>
            <input
              type="date"
              name="studentBirthdate"
              id="studentBirthdate"
              defaultValue={student.studentBirthdate}
              onChange={handleInputChange}
              className="input input-bordered w-full  mt-2"
            />
            <label htmlFor="studentTeacher">Teacher</label>
            <select className="select select-bordered w-full max-w-xs mt-2">
              {options.map((teacher) => (
                <option
                  value={teacher.teacherId}
                >{`${teacher.teacherLastName}, ${teacher.teacherFirstName}`}</option>
              ))}
            </select>
          </div>
          <div>
            <button
              className="btn btn-accent mt-4"
              onClick={() => onSave(editedStudentData)}
            >
              {UI_TEXT.saveButton}
            </button>
          </div>
        </div>
      </dialog>
    );
  }
);
export default EditStudent;
