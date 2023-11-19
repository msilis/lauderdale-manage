import { UI_TEXT } from "../../../../utils/uitext";
import DashboardLayout from "../../../layout/dashboardLayout";
import Navbar from "@/components/navbar/navbar";
import FamilyView from "./familyView/familyView";

const Families = () => {
  return (
    <div className="flex flex-col ml-28 gap-6">
      <h1 className="text-5xl font-bold">Families</h1>
      <Navbar
        buttonText={UI_TEXT.addFamily}
        url="/dashboard/families/addfamilies"
      />
      <FamilyView />
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
