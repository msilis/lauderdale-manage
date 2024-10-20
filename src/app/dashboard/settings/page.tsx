import DashboardLayout from "@/layout/dashboardLayout";
import Navbar from "@/components/navbar/navbar";
import { UI_TEXT } from "../../../../utils/uitext";
import Link from "next/link";
import { STYLE_UTILS } from "../../../../utils/styleUtils";
import TermDateView from "./termDateView/termDateView";
import { LINK_ROUTE } from "../../../../utils/linkRoutes";
import HalfTermView from "./halfTermView/halfTermView";

const AdminSettings = () => {
  return (
    <div className="flex flex-col pl-28 gap-6">
      <h1 className="text-5xl font-bold">Settings</h1>
      <Navbar className={STYLE_UTILS.navbarStyle}>
        <Link href={LINK_ROUTE.setTermDates}>
          <button className={STYLE_UTILS.ghostButton}>
            {UI_TEXT.setTermDates}
          </button>
        </Link>
        <Link href={LINK_ROUTE.setHalfTerm}>
          <button className={STYLE_UTILS.ghostButton}>
            {UI_TEXT.setHalfTerm}
          </button>
        </Link>
      </Navbar>
      <TermDateView />
      <HalfTermView />
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
