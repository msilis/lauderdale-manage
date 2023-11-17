import { UI_TEXT } from "../../../../utils/uitext";
import DashboardLayout from "../../../layout/dashboardLayout";
import Navbar from "@/components/navbar/navbar";

const Families = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold">Families</h1>
      <Navbar buttonText={UI_TEXT.addFamily} />
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
