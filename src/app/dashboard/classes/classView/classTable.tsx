"use client";

import { CLASS_TABLE } from "./classUtils";

export interface ClassData {
  className: string;
  classLocation: string;
  classTeacher: string;
  classAccompanist: string;
  classStartTime: string;
  classEndTime: string;
  id: string;
}

interface ClassTableProps {
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
  setClassId: React.Dispatch<React.SetStateAction<string>>;
  classData: ClassData[];
  handleEditClick: (classItem: ClassData) => void;
}

const ClassTable: React.FC<ClassTableProps> = ({
  setShowAlert,
  setClassId,
  classData,
  handleEditClick,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>{CLASS_TABLE.className}</th>
            <th>{CLASS_TABLE.classLocation}</th>
            <th>{CLASS_TABLE.classTeacher}</th>
            <th>{CLASS_TABLE.classAccompanist}</th>
            <th>{CLASS_TABLE.classStartTime}</th>
            <th>{CLASS_TABLE.classEndTime}</th>
          </tr>
        </thead>
        <tbody>
          {classData.map((classItem, index) => (
            <tr key={index}>
              <td>{classItem.className}</td>
              <td>{classItem.classLocation}</td>
              <td>{classItem.classTeacher}</td>
              <td>{classItem.classAccompanist}</td>
              <td>{classItem.classStartTime}</td>
              <td>{classItem.classEndTime}</td>
              <td className="cursor-pointer w-[50px]">
                <img
                  src="/icons8-edit-simple-small(1)/icons8-edit-16.png"
                  className="hover:scale-125"
                  onClick={() => {
                    console.log(classItem);
                    handleEditClick(classItem);
                  }}
                />
              </td>
              <td className="cursor-pointer w-[50px] ">
                <img
                  src="/icons8-delete-simple-small/icons8-delete-16.png"
                  onClick={() => {
                    setClassId(classItem.id);
                    setShowAlert(true);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassTable;
