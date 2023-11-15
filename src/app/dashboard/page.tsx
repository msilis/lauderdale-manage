"use client";

import { DashboardHeader } from "@/components/dashboardHeader/dashboardHeader";
import { isAuthenticated } from "../../../utils/Auth";
import { redirect } from "next/navigation";

const Dashboard = () => {
  const isAuth = isAuthenticated;

  if (!isAuth) {
    redirect("/");
  }

  let loginEmail;

  if (typeof window !== "undefined") {
    loginEmail = sessionStorage.getItem("email");
  }

  return (
    <div className="text-right px-3 outline outline-4">
      <DashboardHeader />
      <span className="text-xs ">Logged in as {loginEmail ?? "User"}</span>
    </div>
  );
};

export default Dashboard;
