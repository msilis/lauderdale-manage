"use client";

import { DashboardHeader } from "@/components/dashboardHeader/dashboardHeader";
import { isAuthenticated } from "../../../utils/Auth";
import { redirect } from "next/navigation";
import { handleLogout } from "./dashboardUtils";
import { useRouter } from "next/navigation";
import { Sidebar } from "@/components/sidebar/sidebar";

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
    <div>
      <div className="flex justify-end align-middle text-right px-3 pb-4 outline outline-2">
        <button
          className="btn btn-sm ml-2"
          onClick={() => handleLogout(router)}
        >
          Log out
        </button>
        <DashboardHeader />
      </div>
      <div className="ml-2 mt-4 p-4 bg-slate-300 max-w-fit h-full">
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
