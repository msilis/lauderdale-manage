import { fetchTermDates } from "../../settings/termDateView/termDateViewUtils";
import { ClassData } from "../classView/classTable";
import { TABLE_TEXT } from "./generatedDetailUI";

type GeneratedTableProps = {};

export const GeneratedTable = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>{TABLE_TEXT.studentFirstName}</th>
            <th>{TABLE_TEXT.studentLastName}</th>
            <th>{TABLE_TEXT.studentBirthday}</th>
            <th>{TABLE_TEXT.studentTeacher}</th>
            <th>{TABLE_TEXT.parent1FirstName}</th>
            <th>{TABLE_TEXT.parent2FirstName}</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};