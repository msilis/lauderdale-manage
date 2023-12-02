"use client";

import { useState } from "react";
import { Calendar } from "react-multi-date-picker";
import type { Value } from "react-multi-date-picker";

interface TermCalendarProps {
  dates: Value;
  setDates: (dates: Value) => void;
}

const TermCalendar: React.FC<TermCalendarProps> = ({ dates, setDates }) => {
  const handleDateChange = (event: Value) => {
    console.log(event);
    setDates(event);
  };

  return (
    <div>
      <Calendar
        multiple={true}
        numberOfMonths={4}
        onChange={(event) => handleDateChange(event)}
      />
    </div>
  );
};

export default TermCalendar;
