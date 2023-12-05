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

  return (
    <div className="grid grid-cols-3 gap-2">
      <h3>Current Term Dates</h3>
      <ul>
        {fetchedDates &&
          fetchedDates.map((date, index) => (
            <li key={index}>{date.toDateString()}</li>
          ))}
      </ul>
    </div>
  );
};

export default TermDateView;
