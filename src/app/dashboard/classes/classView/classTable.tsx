"use client";

import { CLASS_TABLE } from "./classUtils";
import { useRouter } from "next/navigation";

export interface ClassData {
  className: string;
  classLocation: string;
  classTeacher: string;
  classAccompanist: string;
  classStartTime: string;
  classEndTime: string;
  classStudents?: {
    studentId: string;
    studentName: string;
    studentBirthdate: string;
  }[];
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
  const router = useRouter();
  const handleClassClick = (classId: string) => {
    router.push(`/dashboard/classes/${classId}`);
  };

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
          {classData && classData.length > 0 && classData[0].id ? (
            classData.map((classItem) => (
              <tr
                key={classItem.id}
                onClick={() => handleClassClick(classItem.id)}
                className="cursor-pointer"
              >
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
                    onClick={(event) => {
                      event.stopPropagation();
                      handleEditClick(classItem);
                    }}
                  />
                </td>
                <td className="cursor-pointer w-[50px] ">
                  <img
                    src="/icons8-delete-simple-small/icons8-delete-16.png"
                    onClick={(event) => {
                      event.stopPropagation();
                      setClassId(classItem.id);
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
              <td></td>
              <td>
                {classData.length === 0 ? (
                  <span>No classes</span>
                ) : (
                  <span className="loading loading-dots loading-lg"></span>
                )}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ClassTable;
