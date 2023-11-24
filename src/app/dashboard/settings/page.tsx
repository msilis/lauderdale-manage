import DashboardLayout from "@/layout/dashboardLayout";
import Navbar from "@/components/navbar/navbar";

const AdminSettings = () => {
  return (
    <div className="flex flex-col ml-28 gap-6">
      <h1 className="text-5xl font-bold">Settings</h1>
      <Navbar buttons={[]} />
    </div>
  );
};

const WrappedAdminSettings = () => {
  return (
    <DashboardLayout>
      <AdminSettings />
    </DashboardLayout>
  );
};

export default WrappedAdminSettings;
