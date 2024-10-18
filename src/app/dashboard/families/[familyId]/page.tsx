"use client";

import { getFamilyDetails } from "../familyView/familyUtils";
import { useParams } from "next/navigation";
import { FamilyData } from "../familyView/familyTable";
import { useEffect, useState } from "react";
import DashboardLayout from "@/layout/dashboardLayout";
import Navbar from "@/components/navbar/navbar";
import { UI_TEXT } from "../../../../../utils/uitext";
import Link from "next/link";
import DetailsDisplay from "./details";
import { BackButton } from "@/components/backButton/back";
import { useRouter } from "next/navigation";
import { STYLE_UTILS } from "../../../../../utils/styleUtils";
import { LINK_ROUTE } from "../../../../../utils/linkRoutes";

export const FamilyDetail = () => {
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

  const handleBackClick = () => {
    return router.back();
  };

  console.log(familyDetail, "familyDetail");

  return (
    <div className="flex flex-col pl-28 gap-6">
      <h1 className="text-5xl font-bold">Family Details</h1>
      <Navbar className={STYLE_UTILS.navbarStyle}>
        <BackButton
          onClick={handleBackClick}
          className={STYLE_UTILS.squareButton}
        />
        <Link href={LINK_ROUTE.addFamilies}>
          <button className={STYLE_UTILS.ghostButton}>
            {UI_TEXT.addFamily}
          </button>
        </Link>
        <Link href={`/dashboard/families/${params.familyId}/editfamily`}>
          <button className={STYLE_UTILS.accentButton}>
            {UI_TEXT.editFamily}
          </button>
        </Link>
      </Navbar>
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
