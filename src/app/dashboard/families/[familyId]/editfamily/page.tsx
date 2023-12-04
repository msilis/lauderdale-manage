"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FamilyData } from "../../familyView/familyTable";
import DashboardLayout from "@/layout/dashboardLayout";
import { UI_TEXT } from "../../../../../../utils/uitext";
import { getFamilyDetails } from "../../familyView/familyUtils";
import Navbar from "@/components/navbar/navbar";
import EditFamilyDetailsDisplay from "./editDetails";

const EditFamilyDetails = () => {
  const params = useParams();
  console.log(params);
  const [detailsToEdit, setDetailsToEdit] = useState<FamilyData | undefined>();

  useEffect(() => {
    const fetchFamilyDetails = async () => {
      const familyDetails = await getFamilyDetails(params.familyId as string);
      setDetailsToEdit(familyDetails);
    };
    fetchFamilyDetails();
  }, []);
  console.log(detailsToEdit);

  return (
    <div className="flex flex-col ml-28 gap-6">
      <h1 className="text-5xl font-bold">Edit family</h1>
      <Navbar
        buttons={[
          {
            content: UI_TEXT.addFamily,
            url: "/dashboard/families/addfamilies",
          },
        ]}
      />
      <EditFamilyDetailsDisplay detailsToEdit={detailsToEdit} />
    </div>
  );
};

const WrappedEditFamilyDetails = () => {
  return (
    <DashboardLayout>
      <EditFamilyDetails />
    </DashboardLayout>
  );
};

export default WrappedEditFamilyDetails;
