import DashboardLayout from "../../../layout/dashboardLayout";

const Overview = () => {
  return (
    <div className="flex flex-col ml-32">
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
