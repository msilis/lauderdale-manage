import DashboardLayout from "@/layout/dashboardLayout";
import Navbar from "@/components/navbar/navbar";
import { UI_TEXT } from "../../../../utils/uitext";
import Link from "next/link";
import { STYLE_UTILS } from "../../../../utils/styleUtils";

const AdminSettings = () => {
  return (
    <div className="flex flex-col ml-28 gap-6">
      <h1 className="text-5xl font-bold">Settings</h1>
      <Navbar className={STYLE_UTILS.navbarStyle}>
        <Link href="/dashboard/settings/setTermDates">
          <button className={STYLE_UTILS.ghostButton}>
            {UI_TEXT.setTermDates}
          </button>
        </Link>
      </Navbar>
    </div>
  );
};

const WrappedAdminSettings = () => {
  return (
    <DashboardLayout>
      <AdminSettings />
    </DashboardLayout>
  );
};

export default WrappedAdminSettings;
