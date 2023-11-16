import DashboardLayout from "../dashboardLayout";

const Classes = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold">Classes</h1>
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
