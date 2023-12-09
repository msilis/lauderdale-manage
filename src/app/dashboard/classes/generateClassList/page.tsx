import { BackButton } from "@/components/backButton/back";
import Navbar from "@/components/navbar/navbar";
import DashboardLayout from "@/layout/dashboardLayout";
import { useRouter } from "next/navigation";
import { STYLE_UTILS } from "../../../../../utils/styleUtils";

const GenerateClassListView = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };
  return (
    <div className="flex flex-col pl-28 gap-6">
      <h1 className="tex-5xl font-bold">Class List</h1>
      <Navbar>
        <BackButton
          onClick={handleBackClick}
          className={STYLE_UTILS.squareButton}
        />
      </Navbar>
    </div>
  );
};
