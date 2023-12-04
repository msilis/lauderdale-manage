import Navbar from "@/components/navbar/navbar";
import DashboardLayout from "../../../layout/dashboardLayout";
import { UI_TEXT } from "../../../../utils/uitext";
import TeacherView from "./teacherView/teacherView";
import Link from "next/link";
import { STYLE_UTILS } from "../../../../utils/styleUtils";

const Teachers = () => {
  return (
    <div className="flex flex-col ml-28 gap-6">
      <h1 className="text-5xl font-bold">Teachers</h1>
      <Navbar className={STYLE_UTILS.navbarStyle}>
        <Link href="/dashboard/teachers/addTeacher">
          <button className={STYLE_UTILS.ghostButton}>
            {UI_TEXT.addTeacherButton}
          </button>
        </Link>
      </Navbar>
      <TeacherView />
    </div>
  );
};

const WrappedTeachers = () => {
  return (
    <DashboardLayout>
      <Teachers />
    </DashboardLayout>
  );
};
export default WrappedTeachers;
