import { ClassData } from "../classView/classTable";
import { TABLE_TEXT } from "./generatedDetailUI";

type GeneratedTableProps = {
  classDetail: ClassData;
  termDates: any;
  halfTermDates: any;
};

export const GeneratedTable: React.FC<GeneratedTableProps> = ({
  classDetail,
  termDates,
  halfTermDates,
}) => {
  console.log(termDates);
  console.log(halfTermDates);
  return (
    <div>
      <table className="table outline outline-[1px] outline-slate-800 rounded-none">
        <thead>
          <tr className="outline outline-[1px] bg-slate-100 font-bold">
            <th>{TABLE_TEXT.studentFirstName}</th>
            <th>{TABLE_TEXT.studentBirthday}</th>
            <th>{TABLE_TEXT.studentTeacher}</th>
            <th>{TABLE_TEXT.parent1FirstName}</th>
            <th>{TABLE_TEXT.parent2FirstName}</th>
            {termDates &&
              termDates[1].map((date: Date) => (
                <th>{`${date.getDate()}/${date.getMonth() + 1}`}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {classDetail &&
            classDetail.classStudents?.map((student) => (
              <tr key={student.studentId}>
                <td className="outline outline-[0.5px] outline-slate-500">
                  {student.studentName}
                </td>
                <td className="outline outline-[1px] outline-slate-500">
                  Birthday
                </td>
                <td className="outline outline-[1px] outline-slate-500">
                  Teacher
                </td>
                <td className="outline outline-[1px] outline-slate-500">
                  Parent 1
                </td>
                <td className="outline outline-[1px] outline-slate-500">
                  Parent2
                </td>
                {termDates &&
                  termDates[1].map(() => (
                    <td className="outline outline-[1px] outline-slate-500"></td>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
