"use client";

import { TABLE_UI, getAllFamilyInfo } from "./familyUtils";
import { useEffect, useState } from "react";

interface FamilyData {
  parent1FirstName: string;
  parent1LastName: string;
  parent1Email: string;
  parent1Phone: string;
  parent1Address: string;
  parent2FirstName: string;
  parent2LastName: string;
  parent2Email: string;
  parent2Phone: string;
  parent2Address: string;
}

const FamilyTable = () => {
  const [familyData, setFamilyData] = useState<FamilyData[]>([]);

  useEffect(() => {
    const fetchFamilyData = async () => {
      const data = await getAllFamilyInfo();
      setFamilyData(data);
    };

    fetchFamilyData();
  }, []);

  console.log(familyData);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>{TABLE_UI.titleFamilyName}</th>
            <th>{TABLE_UI.contactEmail}</th>
            <th>{TABLE_UI.contactPhone}</th>
          </tr>
        </thead>
        <tbody>
          {familyData.map((family, index) => (
            <tr key={index}>
              <td>{family.parent1LastName}</td>
              <td>{family.parent1Email}</td>
              <td>{family.parent1Phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FamilyTable;
