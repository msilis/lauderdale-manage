"use client";

import { BackButton } from "@/components/backButton/back";
import Navbar from "@/components/navbar/navbar";
import DashboardLayout from "@/layout/dashboardLayout";
import { useRouter } from "next/navigation";
import { STYLE_UTILS } from "../../../../../utils/styleUtils";
import { GeneratedTable } from "./generatedTable";
import { ClassData } from "../classView/classTable";
import { useContext, useEffect } from "react";
import { ClassDataContext } from "../../../../../utils/context/context";
import { fetchTermDates } from "../../settings/termDateView/termDateViewUtils";
import { fetchHalfTermDates } from "../../settings/halfTermView/halfTermViewUtils";

const GenerateClassListView = () => {
  const router = useRouter();
  const {
    classDetail,
    termDates,
    setTermDates,
    halfTermDates,
    setHalfTermDates,
  } = useContext(ClassDataContext);

  console.log(classDetail, "classDetail from parent");
  console.log(termDates, "termDates from Parent");

  const handleBackClick = () => {
    router.back();
  };

  useEffect(() => {
    const getTermDates = async () => {
      const termData = await fetchTermDates();
      setTermDates(termData);
    };
    getTermDates();
  }, []);

  useEffect(() => {
    const getHalfTermDates = async () => {
      const halfTermData = await fetchHalfTermDates();
      setHalfTermDates(halfTermData);
    };
    getHalfTermDates();
  }, []);

  return (
    <div className="flex flex-col pl-28 gap-6">
      <h1 className="text-5xl font-bold">Class List</h1>
      <Navbar className={STYLE_UTILS.navbarStyle}>
        <BackButton
          onClick={handleBackClick}
          className={STYLE_UTILS.squareButton}
        />
      </Navbar>
      <GeneratedTable
        classDetail={classDetail}
        termDates={termDates}
        halfTermDates={halfTermDates}
      />
    </div>
  );
};

const WrappedGenerateClassListView = () => {
  return (
    <DashboardLayout>
      <GenerateClassListView />
    </DashboardLayout>
  );
};

export default WrappedGenerateClassListView;
