"use client";

import DashboardLayout from "@/layout/dashboardLayout";
import Navbar from "@/components/navbar/navbar";
import TermCalendar from "./calendar";
import { useState } from "react";
import type { Value } from "react-multi-date-picker";
import React from "react";
import { useRouter } from "next/navigation";

const SetTermDates = () => {
  const [dates, setDates] = useState<Value>([]);
  const router = useRouter();

  return (
    <div className="flex flex-col ml-28 gap-6">
      <h1 className="text-5xl font-bold">Set Term Dates</h1>
      <Navbar buttons={[]} />
      <TermCalendar dates={dates} setDates={setDates} router={router} />
    </div>
  );
};

const WrappedSetTermDates = () => {
  return (
    <DashboardLayout>
      <SetTermDates />
    </DashboardLayout>
  );
};

export default WrappedSetTermDates;
