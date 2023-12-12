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

  console.log(halfTermDates, "halfTerm dates");
  return <div></div>;
};

export default HalfTermView;
