import Navbar from "@/components/navbar/navbar";
import DashboardLayout from "../../../layout/dashboardLayout";
import { UI_TEXT } from "../../../../utils/uitext";
import TeacherView from "./teacherView/teacherView";

const Teachers = () => {
  return (
    <div className="flex flex-col ml-28 gap-6">
      <h1 className="text-5xl font-bold">Teachers</h1>
      <Navbar
        buttonText={UI_TEXT.addTeacherButton}
        url="/dashboard/teachers/addTeacher"
      />
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
