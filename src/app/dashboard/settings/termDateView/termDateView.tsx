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
    console.log(dates, "dates");
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

  const datesByMonth = fetchedDates && groupDatesByMonth(fetchedDates.flat());

  const mappedDates = (datesByMonth: { [x: string]: any[] | Date[] }) => {
    return Object.keys(datesByMonth).map((month) => {
      return (
        <div key={month} className="mt-4">
          <h4 className="font-bold">{month}</h4>
          <ul>
            {datesByMonth[month].map((date, index) => (
              <li key={index}>{date.toDateString()}</li>
            ))}
          </ul>
        </div>
      );
    });
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      <h1 className="font-bold text-3xl">Current Term Dates</h1>
      <div className="grid grid-cols-[10rem_10rem_10rem] gap-4">
        {datesByMonth ? (
          mappedDates(datesByMonth)
        ) : (
          <div className="flex justify-center">
            <span className="loading loading-dots loading-lg" />
          </div>
        )}
      </div>
    </div>
  );
};

export default TermDateView;
