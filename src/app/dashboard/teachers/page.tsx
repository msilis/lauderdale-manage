import DashboardLayout from "../../../layout/dashboardLayout";

const Teachers = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold">Teachers</h1>
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
