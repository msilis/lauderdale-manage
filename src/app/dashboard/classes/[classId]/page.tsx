"use client";

import Navbar from "@/components/navbar/navbar";
import { UI_TEXT } from "../../../../../utils/uitext";
import DashboardLayout from "@/layout/dashboardLayout";
import ClassDetailsDisplay from "./classDetailDisplay";
import { useState, useEffect } from "react";
import { ClassData } from "../classView/classTable";
import { useParams } from "next/navigation";

const ClassDetail = () => {
  const [classDetail, setFamilyDetail] = useState<ClassData | undefined>();
  const params = useParams();

  useEffect(() => {}, []);
  return (
    <div className="flex flex-col ml-28 gap-6">
      <h1 className="text-5xl font-bold">Class Details</h1>
      <Navbar
        buttons={[
          {
            buttonText: UI_TEXT.addClassButton,
            url: "/dashboard/classes/addclass",
          },
        ]}
      />
      <ClassDetailsDisplay />
    </div>
  );
};

const WrappedClassDetail = () => {
  return (
    <DashboardLayout>
      <ClassDetail />
    </DashboardLayout>
  );
};

export default WrappedClassDetail;
