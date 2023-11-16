"use client";

import { isAuthenticated } from "../../../utils/Auth";
import { redirect, useRouter, usePathname } from "next/navigation";
import { Sidebar } from "@/components/sidebar/sidebar";
import { componentBasedOnRoute } from "./componentBasedOnRoute";

const Dashboard = () => {
  const isAuth = isAuthenticated;
  const router = useRouter();
  const pathname = usePathname();

  if (!isAuth) {
    redirect("/");
  }

  let loginEmail;

  if (typeof window !== "undefined") {
    loginEmail = sessionStorage.getItem("email");
  }

  const Component = componentBasedOnRoute(pathname);

  return (
    <div className="grid grid-cols-3">
      <div>
        <Sidebar />
      </div>
      <div>
        <Component />
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;
