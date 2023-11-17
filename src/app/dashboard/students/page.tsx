import Navbar from "@/components/navbar/navbar";
import DashboardLayout from "../../../layout/dashboardLayout";

const Students = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold">Students</h1>
      <Navbar />
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
