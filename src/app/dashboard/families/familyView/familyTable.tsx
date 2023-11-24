"use client";

import Link from "next/link";
import { TABLE_UI, getAllFamilyInfo } from "./familyUtils";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export interface FamilyData {
  parent1FirstName: string;
  parent1LastName: string;
  parent1Email: string;
  parent1Phone: string;
  parent1Address: string;
  parent2FirstName?: string;
  parent2LastName?: string;
  parent2Email?: string;
  parent2Phone?: string;
  parent2Address?: string;
  id: string;
}

const FamilyTable = () => {
  const [familyData, setFamilyData] = useState<FamilyData[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchFamilyData = async () => {
      const data = await getAllFamilyInfo();
      setFamilyData(data);
    };

    fetchFamilyData();
  }, []);

  const handleFamilyClick = (familyId: string) => {
    router.push(`/dashboard/families/${familyId}`);
  };

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
          {familyData && familyData.length > 0 && familyData[0].id ? (
            familyData.map((family) => (
              <tr
                key={family.id}
                onClick={() => handleFamilyClick(family.id)}
                className="cursor-pointer"
              >
                <td>{family.parent1LastName}</td>
                <td>{family.parent1Email}</td>
                <td>{family.parent1Phone}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td></td>
              <td></td>
              <td>
                <span className="loading loading-dots loading-lg"></span>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FamilyTable;
