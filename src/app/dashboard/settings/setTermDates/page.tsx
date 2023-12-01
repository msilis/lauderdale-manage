import DashboardLayout from "@/layout/dashboardLayout";
import Navbar from "@/components/navbar/navbar";

const SetTermDates = () => {
  return (
    <div className="flex flex-col ml-28 gap-6">
      <h1 className="text-5xl font-bold">Set Term Dates</h1>
      <Navbar buttons={[]} />
    </div>
  );
};

const WrappedSetTermDates = () => {
  return (
    <DashboardLayout>
      <SetTermDates />
    </DashboardLayout>
  );
};

export default WrappedSetTermDates;
