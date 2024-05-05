import { STUDENT_TABLE } from "./studentUtils";
import { StudentData } from "./studentView";

interface StudentTableProps {
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
  setStudentId: React.Dispatch<React.SetStateAction<string>>;
  studentData: StudentData[];
  handleEditClick: (student: StudentData) => void;
}

const StudentTable: React.FC<StudentTableProps> = ({
  setShowAlert,
  setStudentId,
  studentData,
  handleEditClick,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>{STUDENT_TABLE.studentFirstName}</th>
            <th>{STUDENT_TABLE.studentLastName}</th>
            <th>{STUDENT_TABLE.studentFamily}</th>
                      <th>{STUDENT_TABLE.studentBirthdate}</th>
                      <th>{STUDENT_TABLE.studentTeacher }</th>
                      
          </tr>
        </thead>
        <tbody>
          {studentData && studentData.length > 0 && studentData[0].id ? (
                      studentData.map((student) =>  (
              <tr key={student.id}>
                <td>{student.studentFirstName}</td>
                <td>{student.studentLastName}</td>
                <td>{student.studentFamily}</td>
                    <td>{student.studentBirthdate}</td>
                    <td>{student.studentTeacher || student.studentTeacherLastName}</td>
                <td className="cursor-pointer w-[50px]">
                  <img
                    src="/icons8-edit-simple-small(1)/icons8-edit-16.png"
                    onClick={() => {
                      handleEditClick(student);
                    }}
                    className="hover:scale-125"
                  />
                </td>
                <td className="cursor-pointer w-[50px] ">
                  <img
                    src="/icons8-delete-simple-small/icons8-delete-16.png"
                    onClick={() => {
                      setStudentId(student.id);
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
                {studentData.length === 0 ? (
                  <span>No Students</span>
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

export default StudentTable;
