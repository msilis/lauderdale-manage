import DashboardLayout from "../dashboardLayout";

const Families = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold">Families</h1>
    </div>
  );
};

const WrappedFamilies = () => {
  return (
    <DashboardLayout>
      <Families />
    </DashboardLayout>
  );
};
export default WrappedFamilies;
