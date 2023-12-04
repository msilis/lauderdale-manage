"use client";

import { getFamilyDetails } from "../familyView/familyUtils";
import { useParams } from "next/navigation";
import { FamilyData } from "../familyView/familyTable";
import { useEffect, useState } from "react";
import DashboardLayout from "@/layout/dashboardLayout";
import Navbar from "@/components/navbar/navbar";
import { UI_TEXT } from "../../../../../utils/uitext";
import DetailsDisplay from "./details";
import { BackButton } from "@/components/backButton/back";
import { useRouter } from "next/navigation";

const FamilyDetail = () => {
  const [familyDetail, setFamilyDetail] = useState<FamilyData | undefined>();
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    const fetchFamilyData = async () => {
      const familyData = await getFamilyDetails(params.familyId as string);
      setFamilyDetail(familyData);
    };
    fetchFamilyData();
  }, []);

  return (
    <div className="flex flex-col ml-28 gap-6">
      <h1 className="text-5xl font-bold">Family Details</h1>
      <Navbar
        buttons={[
          {
            content: <BackButton />,
            onClick: () => router.back(),
          },
          {
            content: UI_TEXT.addFamily,
            url: "/dashboard/families/addfamilies",
          },
          {
            content: UI_TEXT.editFamily,
            url: `/dashboard/families/${params.familyId}/editfamily`,
            className: "btn btn-accent text-l",
          },
        ]}
      />
      <DetailsDisplay familyDetail={familyDetail} />
    </div>
  );
};

const WrappedFamilyDetail = () => {
  return (
    <DashboardLayout>
      <FamilyDetail />
    </DashboardLayout>
  );
};

export default WrappedFamilyDetail;
