"use client";

import { usePathname } from "next/navigation";
import { componentBasedOnRoute } from "./componentBasedOnRoute";
import DashboardLayout from "../../layout/dashboardLayout";
import { ToastContainer, toast } from "react-toastify";

const Dashboard = () => {
  const pathname = usePathname();

  const Component = componentBasedOnRoute(pathname);

  return (
    <DashboardLayout>
      <Component />
      <ToastContainer />
    </DashboardLayout>
  );
};

export default Dashboard;
