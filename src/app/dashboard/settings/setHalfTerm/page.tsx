"use client";

import DashboardLayout from "@/layout/dashboardLayout";
import Navbar from "@/components/navbar/navbar";
import TermCalendar from "../setTermDates/calendar";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { BackButton } from "@/components/backButton/back";
import { STYLE_UTILS } from "../../../../../utils/styleUtils";

const SetHalfTerm = () => {
  const router = useRouter();

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
