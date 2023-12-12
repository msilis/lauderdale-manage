"use client";

import { ClassData } from "../classView/classTable";
import { TABLE_TEXT } from "./generatedDetailUI";
import { useContext } from "react";

type GeneratedTableProps = {
  classDetail: ClassData;
};

export const GeneratedTable: React.FC<GeneratedTableProps> = ({
  classDetail,
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
