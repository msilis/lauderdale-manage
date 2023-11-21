import Navbar from "@/components/navbar/navbar";
import DashboardLayout from "../../../layout/dashboardLayout";
import { UI_TEXT } from "../../../../utils/uitext";
import ClassView from "./classView/classView";

const Classes = () => {
  return (
    <div className="flex flex-col ml-28 gap-6">
      <h1 className="text-5xl font-bold">Classes</h1>
      <Navbar
        buttonText={UI_TEXT.addClassButton}
        url="/dashboard/classes/addClass"
      />
      <ClassView />
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
