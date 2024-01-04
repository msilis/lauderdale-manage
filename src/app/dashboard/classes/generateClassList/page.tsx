"use client";

import { BackButton } from "@/components/backButton/back";
import Navbar from "@/components/navbar/navbar";
import DashboardLayout from "@/layout/dashboardLayout";
import { useRouter } from "next/navigation";
import { STYLE_UTILS } from "../../../../../utils/styleUtils";
import { GeneratedTable } from "./generatedTable";
import { useContext, useEffect, useState } from "react";
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
    classAssignedStudents,
    setClassAssignedStudents,
  } = useContext(ClassDataContext);

  const handleBackClick = () => {
    router.back();
  };

  const [currentTerm, setCurrentTerm] = useState<number | null>(0);

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
        currentTerm={currentTerm}
        setCurrentTerm={setCurrentTerm}
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
