"use client";

import { useEffect, useState } from "react";
import { fetchHalfTermDates } from "./halfTermViewUtils";

type HalfTermDate = {
  dates: Date[];
  isHalfTerm: boolean;
};

const HalfTermView = () => {
  const [halfTermDates, setHalfTermDates] = useState<HalfTermDate[] | null>(
    null
  );

  useEffect(() => {
    const getHalfTerms = async () => {
      const halfTermDates = await fetchHalfTermDates();
      setHalfTermDates(halfTermDates || null);
    };
    getHalfTerms();
  }, []);

  const halfTermDateArray = halfTermDates && halfTermDates?.flat();

  return (
    <div className="grid grid-cols-3 mt-4">
      {halfTermDates ? (
        <>
          <h1 className="font-bold text-3xl">Current Half-Terms</h1>
          <div className="mt-2">
            <ul>
              {halfTermDateArray?.map((date: HalfTermDate, index) => {
                if (date.dates.length > 0) {
                  const dateString = new Date(date.dates[0]).toDateString();
                  return <li key={dateString}>{dateString}</li>;
                }
                return null;
              })}
            </ul>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default HalfTermView;
