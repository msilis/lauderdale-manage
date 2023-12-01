import DashboardLayout from "@/layout/dashboardLayout";
import Navbar from "@/components/navbar/navbar";
import { UI_TEXT } from "../../../../utils/uitext";

const AdminSettings = () => {
  return (
    <div className="flex flex-col ml-28 gap-6">
      <h1 className="text-5xl font-bold">Settings</h1>
      <Navbar
        buttons={[
          {
            buttonText: UI_TEXT.setTermDates,
            url: "/dashboard/settings/setTermDates",
          },
        ]}
      />
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
