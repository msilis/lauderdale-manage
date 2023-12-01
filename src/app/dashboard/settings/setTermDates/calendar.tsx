"use client";

import { useState } from "react";
import { Calendar } from "react-multi-date-picker";

const TermCalendar = () => {
  const handleDateChange = () => {};
  return (
    <div>
      <Calendar multiple={true} numberOfMonths={4} />
    </div>
  );
};

export default TermCalendar;
