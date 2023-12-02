"use client";

import { useState } from "react";
import { Calendar } from "react-multi-date-picker";
import type { Value } from "react-multi-date-picker";
import { UI_TEXT } from "../../../../../utils/uitext";

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
        highlightToday={false}
      />
      <div className="flex gap-4 mt-4">
        <button className="btn btn-accent">{UI_TEXT.saveDates}</button>
        <button className="btn btn-default">{UI_TEXT.resetDates}</button>
      </div>
    </div>
  );
};

export default TermCalendar;
