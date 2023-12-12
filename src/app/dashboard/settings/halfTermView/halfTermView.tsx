"use client";

import { useEffect, useState } from "react";
import { fetchHalfTermDates } from "./halfTermViewUtils";

const HalfTermView = () => {
  const [halfTermDates, setHalfTermDates] = useState<Date[] | null>(null);

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
              {halfTermDateArray?.map((date, index) => {
                const dateString = new Date(date).toDateString();
                return <li key={dateString}>{dateString}</li>;
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
