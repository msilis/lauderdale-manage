"use client";

import Navbar from "@/components/navbar/navbar";
import { UI_TEXT } from "../../../../../utils/uitext";
import DashboardLayout from "@/layout/dashboardLayout";

const ClassDetail = () => {
  return (
    <div className="flex flex-col ml-28 gap-6">
      <h1 className="text-5xl font-bold">Class Details</h1>
      <Navbar
        buttons={[
          {
            buttonText: UI_TEXT.addFamily,
            url: "/dashboard/classes/addclass",
          },
        ]}
      />
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
