import Navbar from "@/components/navbar/navbar";
import DashboardLayout from "../../../layout/dashboardLayout";
import { UI_TEXT } from "../../../../utils/uitext";
import StudentView from "./studentView/studentView";
import Link from "next/link";
import { LINK_ROUTE } from "../../../../utils/linkRoutes";
import { STYLE_UTILS } from "../../../../utils/styleUtils";

const Students = () => {
  return (
    <div className="flex flex-col pl-28 gap-6">
      <h1 className="text-5xl font-bold">Students</h1>
      <Navbar className={STYLE_UTILS.navbarStyle}>
        <Link href={LINK_ROUTE.addStudents}>
          <button className={STYLE_UTILS.ghostButton}>
            {UI_TEXT.addStudentsButton}
          </button>
        </Link>
      </Navbar>
      <StudentView />
    </div>
  );
};

const WrappedStudents = () => {
  return (
    <DashboardLayout>
      <Students />
    </DashboardLayout>
  );
};
export default WrappedStudents;
