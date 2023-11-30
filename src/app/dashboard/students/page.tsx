import Navbar from "@/components/navbar/navbar";
import DashboardLayout from "../../../layout/dashboardLayout";
import { UI_TEXT } from "../../../../utils/uitext";
import StudentView from "./studentView/studentView";

const Students = () => {
  return (
    <div className="flex flex-col ml-28 gap-6">
      <h1 className="text-5xl font-bold">Students</h1>
      <Navbar
        buttons={[
          {
            buttonText: UI_TEXT.addStudentsButton,
            url: "/dashboard/students/addstudents",
          },
        ]}
      />
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
