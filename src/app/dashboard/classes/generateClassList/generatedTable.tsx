import { ClassData } from "../classView/classTable";
import { TABLE_TEXT } from "./generatedDetailUI";

type GeneratedTableProps = {
  classDetail: ClassData;
  termDates: any;
  halfTermDates: any;
  currentTerm: number | null;
  setCurrentTerm: React.Dispatch<React.SetStateAction<number | null>>;
};

export const GeneratedTable: React.FC<GeneratedTableProps> = ({
  classDetail,
  termDates,
  halfTermDates,
  currentTerm,
  setCurrentTerm,
}) => {
  console.log(termDates);
  console.log(halfTermDates);
  console.log(classDetail, "classDetail");
  console.log(currentTerm, "currentTerm");

  return (
    <div>
      <div className="flex flex-col">
        <label htmlFor="termSelect">Which term?</label>
        <select
          id="termSelect"
          className="select select-bordered mt-4 w-full max-w-xs"
          onChange={(event) => setCurrentTerm(Number(event.target?.value))}
        >
          <option value={0}>Term 1</option>
          <option value={1}>Term 2</option>
          <option value={2}>Term 3</option>
        </select>
      </div>
      <table className="table outline outline-[1px] outline-slate-800 rounded-none mt-4">
        <caption className="font-bold p-2">
          {`${classDetail.className}`} Group - Term {`${currentTerm! + 1}`} -{" "}
          {`${classDetail.classTeacher}`} &{" "}
          {`${classDetail && classDetail.classAccompanist}`} -{" "}
          {`${classDetail.classStartTime}`} to {`${classDetail.classEndTime}`} -{" "}
          {`${classDetail.classLocation}`}
        </caption>
        <thead>
          <tr className="outline outline-[1px] bg-slate-100 font-bold">
            <th>{TABLE_TEXT.studentFirstName}</th>
            <th>{TABLE_TEXT.studentBirthday}</th>
            <th>{TABLE_TEXT.studentTeacher}</th>
            <th>{TABLE_TEXT.parent1FirstName}</th>
            <th>{TABLE_TEXT.parent2FirstName}</th>
            {termDates &&
              termDates[currentTerm!].map((date: Date) => (
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
                  termDates[currentTerm!].map(() => (
                    <td className="outline outline-[1px] outline-slate-500"></td>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
