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
  return (
    <div>
      <table className="table">
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
