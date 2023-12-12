import { Sidebar } from "@/components/sidebar/sidebar";
import { isAuthenticated } from "../../utils/Auth";
import { redirect } from "next/navigation";
import { ClassContext } from "../../utils/context/context";

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
    <>
      <ClassContext>
        <div className="grid grid-cols-[10%_auto_auto] gap-2">
          <div className="w-1/5">
            <Sidebar />
          </div>
          <div className="col-span-2 mt-6 mr-8">{children}</div>
          <div></div>
        </div>
      </ClassContext>
    </>
  );
};

export default DashboardLayout;
