import { UI_TEXT } from "../../../../utils/uitext";
import DashboardLayout from "../../../layout/dashboardLayout";
import Navbar from "@/components/navbar/navbar";
import FamilyView from "./familyView/familyView";
import Link from "next/link";
import { STYLE_UTILS } from "../../../../utils/styleUtils";
import { LINK_ROUTE } from "../../../../utils/linkRoutes";

const Families = () => {
  return (
    <div className="flex flex-col ml-28 gap-6">
      <h1 className="text-5xl font-bold">Families</h1>
      <Navbar className={STYLE_UTILS.navbarStyle}>
        <Link href={LINK_ROUTE.addFamilies}>
          <button className={STYLE_UTILS.ghostButton}>
            {UI_TEXT.addFamily}
          </button>
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
