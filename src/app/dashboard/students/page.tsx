import Navbar from "@/components/navbar/navbar";
import DashboardLayout from "../../../layout/dashboardLayout";
import { UI_TEXT } from "../../../../utils/uitext";

const Students = () => {
  return (
    <div className="flex flex-col ml-32">
      <h1 className="text-5xl font-bold">Students</h1>
      <Navbar
        buttonText={UI_TEXT.addStudentsButton}
        url="/dashboard/students/addstudents"
      />
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
