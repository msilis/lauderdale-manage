import { UI_TEXT } from "../../../../utils/uitext";
import DashboardLayout from "../../../layout/dashboardLayout";
import Navbar from "@/components/navbar/navbar";
import FamilyView from "./familyView/familyView";
import Link from "next/link";

const Families = () => {
  return (
    <div className="flex flex-col ml-28 gap-6">
      <h1 className="text-5xl font-bold">Families</h1>
      <Navbar className="navbar bg-base-100 drop-shadow-lg">
        <Link href="/dashboard/families/addfamilies">
          <button className="btn btn-accent text-l">{UI_TEXT.addFamily}</button>
        </Link>
      </Navbar>
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
