import { ClassData } from "../classView/classTable";
import { TABLE_TEXT } from "./generatedDetailUI";

type GeneratedTableProps = {
  classDetail: ClassData;
  termDates: Date[][];
  halfTermDates: { dates: Date[]; isHalfTerm: boolean }[];
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
  // TODO (ms) Maybe this can be pulled into a utility file as well?
  const allDates =
    currentTerm !== null &&
    halfTermDates &&
    termDates &&
    [
      ...termDates[currentTerm].map((dates: string | number | Date) => ({
        dates,
        isHalfTerm: false,
      })),
      halfTermDates[currentTerm],
    ].sort(
      (a, b) =>
        new Date(a.dates as string).getTime() -
        new Date(b.dates as string).getTime()
    );

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
        // TODO (ms) see if there is a way to streamline this, this MIGHT be
        good for abstracting
        <caption className="font-bold p-2">
          {`${classDetail && classDetail.className}`} Group - Term{" "}
          {`${currentTerm! + 1}`} -{" "}
          {`${classDetail && classDetail.classTeacher}`}
          {classDetail && classDetail.classAccompanist && " & "}{" "}
          {`${classDetail && classDetail.classAccompanist}`} -{" "}
          {`${classDetail && classDetail.classStartTime}`} to{" "}
          {`${classDetail && classDetail.classEndTime}`} -{" "}
          {`${classDetail && classDetail.classLocation}`}
        </caption>
        <thead>
          <tr className="outline outline-[1px] bg-slate-100 font-bold">
            <th>{TABLE_TEXT.studentFirstName}</th>
            <th>{TABLE_TEXT.studentBirthday}</th>
            <th>{TABLE_TEXT.studentTeacher}</th>
            <th>{TABLE_TEXT.parent1FirstName}</th>
            <th>{TABLE_TEXT.parent2FirstName}</th>
            // TODO (ms) pull this out into separate function
            {termDates &&
              currentTerm !== null &&
              allDates &&
              allDates.map((date) => {
                const dateObj = new Date(date.dates as string);
                return (
                  <th key={dateObj.getTime()}>
                    {date.isHalfTerm
                      ? "Half-Term"
                      : `${dateObj.getDate()}/${dateObj.getMonth() + 1}`}
                  </th>
                );
              })}
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
                  allDates &&
                  currentTerm !== null &&
                  allDates.map(() => (
                    <td className="outline outline-[1px] outline-slate-500"></td>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
