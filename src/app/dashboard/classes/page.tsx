import Navbar from "@/components/navbar/navbar";
import DashboardLayout from "../../../layout/dashboardLayout";
import { UI_TEXT } from "../../../../utils/uitext";
import ClassView from "./classView/classView";
import Link from "next/link";
import { STYLE_UTILS } from "../../../../utils/styleUtils";

const Classes = () => {
  return (
    <div className="flex flex-col ml-28 gap-6">
      <h1 className="text-5xl font-bold">Classes</h1>
      <Navbar className={STYLE_UTILS.navbarStyle}>
        <Link href="/dashboard/classes/addClass">
          <button className={STYLE_UTILS.ghostButton}>
            {UI_TEXT.addClassButton}
          </button>
        </Link>
      </Navbar>
      <ClassView />
    </div>
  );
};

const WrappedClasses = () => {
  return (
    <DashboardLayout>
      <Classes />
    </DashboardLayout>
  );
};
export default WrappedClasses;
