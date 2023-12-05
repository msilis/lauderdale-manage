"use client";

import { useState, useEffect } from "react";
import { fetchTermDates } from "./termDateViewUtils";

type FetchedDates = {
  id: string;
  field: number[];
  termDates: Date[];
};

const TermDateView = () => {
  const [fetchedDates, setFetchedDates] = useState<FetchedDates | null>(null);

  useEffect(() => {
    const getTermDates = async () => {
      const dates = await fetchTermDates();
      setFetchedDates(dates);
    };
    getTermDates();
  }, []);

  console.log({ fetchedDates });

  return (
    <div className="grid grid-cols-3 gap-2 outline outline-2">
      <h3>Current Term Dates</h3>
      <ul className="outline outline-2">
        {fetchedDates &&
          fetchedDates.termDates.map((date, index) => (
            <li key={index}>{date.toDateString()}</li>
          ))}
      </ul>
    </div>
  );
};

export default TermDateView;
