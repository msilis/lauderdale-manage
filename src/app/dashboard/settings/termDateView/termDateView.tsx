"use client";

import { useState, useEffect } from "react";
import { fetchTermDates } from "./termDateViewUtils";

const TermDateView = () => {
  const [fetchedDates, setFetchedDates] = useState<Date[] | null>(null);

  useEffect(() => {
    const getTermDates = async () => {
      const dates = await fetchTermDates();
      setFetchedDates(dates || null);
    };
    getTermDates();
  }, []);

  const groupDatesByMonth = (dates: Date[]) => {
    const datesByMonth: { [key: string]: Date[] } = {};
    dates.forEach((date) => {
      const month = date.toLocaleString("default", { month: "long" });
      if (!datesByMonth[month]) {
        datesByMonth[month] = [date];
      } else {
        datesByMonth[month].push(date);
      }
    });
    return datesByMonth;
  };

  const datesByMonth = fetchedDates && groupDatesByMonth(fetchedDates);
  return (
    <div className="grid grid-cols-3 gap-2">
      <h3>Current Term Dates</h3>

      {datesByMonth &&
        Object.keys(datesByMonth).map((month) => (
          <div key={month}>
            <h4 className="font-bold">{month}</h4>
            <ul>
              {datesByMonth[month].map((date, index) => (
                <li key={index}>{date.toDateString()}</li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default TermDateView;
