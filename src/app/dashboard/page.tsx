"use client";

import { isAuthenticated } from "../../../utils/Auth";
import { redirect } from "next/navigation";
import { Sidebar } from "@/components/sidebar/sidebar";

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
    <div className="grid grid-cols-3">
      <div>
        <Sidebar />
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Dashboard;
