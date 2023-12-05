"use client";

import { useState, useEffect } from "react";
import { fetchTermDates } from "./termDateViewUtils";

const TermDateView = () => {
  const [fetchedDates, setFetchedDates] = useState();

  useEffect(() => {
    const getTermDates = async () => {
      const dates = await fetchTermDates();
      setFetchedDates(dates);
    };
    getTermDates();
  }, []);

  console.log(fetchedDates);

  return (
    <div className="grid grid-rows-3 gap-2">
      <h3>Current Term Dates</h3>
    </div>
  );
};

export default TermDateView;
