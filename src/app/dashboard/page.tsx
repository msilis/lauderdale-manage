"use client";

import { isAuthenticated } from "../../../utils/Auth";
import { redirect, useRouter, usePathname } from "next/navigation";
import { componentBasedOnRoute } from "./componentBasedOnRoute";
import DashboardLayout from "./dashboardLayout";

const Dashboard = () => {
  const isAuth = isAuthenticated;
  const router = useRouter();
  const pathname = usePathname();

  const Component = componentBasedOnRoute(pathname);

  return (
    <DashboardLayout>
      <Component />
    </DashboardLayout>
  );
};

export default Dashboard;
