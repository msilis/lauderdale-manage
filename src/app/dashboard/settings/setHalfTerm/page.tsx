"use client";

import DashboardLayout from "@/layout/dashboardLayout";
import Navbar from "@/components/navbar/navbar";
import TermCalendar from "../setTermDates/calendar";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { BackButton } from "@/components/backButton/back";
import { STYLE_UTILS } from "../../../../../utils/styleUtils";
import { Value } from "react-multi-date-picker";
import { handleHalfTermSave } from "./halfTermUtilsts";

const SetHalfTerm = () => {
  const router = useRouter();
  const [halfTerm, setHalfTerm] = useState<Value>([]);
  const [term, setTerm] = useState<number | undefined>();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="flex flex-col pl-28 gap-6">
      <h1 className="text-5xl font-bold">Set Half Term</h1>
      <Navbar className={STYLE_UTILS.navbarStyle}>
        <BackButton
          className={STYLE_UTILS.squareButton}
          onClick={handleBackClick}
        />
      </Navbar>
      <TermCalendar
        dates={halfTerm}
        setDates={setHalfTerm}
        router={router}
        term={term}
        setTerm={setTerm}
        numberOfMonths={1}
        onSave={() => handleHalfTermSave(halfTerm, term as number, router)}
      />
    </div>
  );
};

const WrappedSetHalfTerm = () => {
  return (
    <DashboardLayout>
      <SetHalfTerm />
    </DashboardLayout>
  );
};

export default WrappedSetHalfTerm;
