"use client";

import { usePathname } from "next/navigation";
import { componentBasedOnRoute } from "./componentBasedOnRoute";
import DashboardLayout from "../../layout/dashboardLayout";

const Dashboard = () => {
  const pathname = usePathname();

  const Component = componentBasedOnRoute(pathname);

  return (
    <DashboardLayout>
      <Component />
    </DashboardLayout>
  );
};

export default Dashboard;
