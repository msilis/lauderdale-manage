import DashboardLayout from "../dashboardLayout";

const Overview = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold">Overview</h1>
    </div>
  );
};

const WrappedOverview = () => {
  return (
    <DashboardLayout>
      <Overview />
    </DashboardLayout>
  );
};

export default WrappedOverview;
