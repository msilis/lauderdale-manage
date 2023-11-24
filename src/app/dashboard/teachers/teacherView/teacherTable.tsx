"use client";

import { TEACHER_TABLE } from "./teacherUtils";
import { TeacherData } from "./teacherView";

interface TeacherTableProps {
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
  setTeacherId: React.Dispatch<React.SetStateAction<string>>;
  teacherData: TeacherData[];
  handleEditClick: (teacher: TeacherData) => void;
}

const TeacherTable: React.FC<TeacherTableProps> = ({
  teacherData,
  setShowAlert,
  setTeacherId,
  handleEditClick,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>{TEACHER_TABLE.teacherFirstName}</th>
            <th>{TEACHER_TABLE.teacherLastName}</th>
            <th>{TEACHER_TABLE.teacherEmail}</th>
            <th>{TEACHER_TABLE.teacherPhone}</th>
          </tr>
        </thead>
        <tbody>
          {teacherData && teacherData.length > 0 && teacherData[0].id ? (
            teacherData.map((teacher, index) => (
              <tr key={index}>
                <td>{teacher.teacherFirstName}</td>
                <td>{teacher.teacherLastName}</td>
                <td>{teacher.teacherEmail}</td>
                <td>{teacher.teacherPhone}</td>
                <td className="cursor-pointer w-[50px]">
                  <img
                    src="/icons8-edit-simple-small(1)/icons8-edit-16.png"
                    onClick={() => {
                      handleEditClick(teacher);
                    }}
                    className="hover:scale-125"
                  />
                </td>
                <td className="cursor-pointer w-[50px] ">
                  <img
                    src="/icons8-delete-simple-small/icons8-delete-16.png"
                    onClick={() => {
                      setTeacherId(teacher.id);
                      setShowAlert(true);
                    }}
                    className="hover:scale-125"
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td></td>
              <td></td>
              <td>
                <span className="loading loading-dots loading-lg"></span>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherTable;
