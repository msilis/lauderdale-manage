import { Sidebar } from "@/components/sidebar/sidebar";
import { isAuthenticated } from "../../../utils/Auth";
import { redirect } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
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
      <div className="mt-6">{children}</div>
      <div></div>
    </div>
  );
};

export default DashboardLayout;
