"use client";

import { getFamilyDetails } from "../familyView/familyUtils";
import { useParams } from "next/navigation";
import { FamilyData } from "../familyView/familyTable";
import { useEffect, useState } from "react";

const FamilyDetail = () => {
  const [familyDetail, setFamilyDetail] = useState<FamilyData>();
  const params = useParams();

  console.log(params.familyId);
  console.log(familyDetail);

  useEffect(() => {
    const fetchFamilyData = async () => {
      const familyData = await getFamilyDetails(params.familyId as string);
      setFamilyDetail(familyData);
    };
    fetchFamilyData();
  }, []);
  return (
    <div>
      <h1>There should be something here</h1>
      <h2>{familyDetail?.parent1LastName}</h2>
    </div>
  );
};

export default FamilyDetail;
