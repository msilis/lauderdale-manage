"use client";

import { DashboardHeader } from "@/components/dashboardHeader/dashboardHeader";
import { isAuthenticated } from "../../../utils/Auth";
import { redirect } from "next/navigation";
import { handleLogout } from "./dashboardUtils";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  const isAuth = isAuthenticated;

  if (!isAuth) {
    redirect("/");
  }

  let loginEmail;

  if (typeof window !== "undefined") {
    loginEmail = sessionStorage.getItem("email");
  }

  return (
    <div className="flex justify-end align-middle text-right px-3 pb-4 outline outline-4">
      <button className="btn btn-sm ml-2" onClick={() => handleLogout(router)}>
        Log out
      </button>
      <DashboardHeader />
    </div>
  );
};

export default Dashboard;
