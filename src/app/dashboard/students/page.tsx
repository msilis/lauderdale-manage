import DashboardLayout from "../../../layout/dashboardLayout";

const Students = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold">Students</h1>
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
