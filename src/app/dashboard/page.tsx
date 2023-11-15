import { isAuthenticated } from "../../../utils/Auth";
import { redirect } from "next/navigation";

const Dashboard = () => {
  const isAuth = isAuthenticated;

  if (!isAuth) {
    redirect("/");
  }

  return (
    <div className="text-center bg-slate-200">
      <h2>Dashboard</h2>
    </div>
  );
};

export default Dashboard;
