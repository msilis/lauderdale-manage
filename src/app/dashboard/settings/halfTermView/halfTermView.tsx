"use client";

import { useEffect, useState } from "react";
import { fetchHalfTermDates } from "./halfTermViewUtils";

const HalfTermView = () => {
  const [halfTermDates, setHalfTermDates] = useState<Date[] | null>(null);

  return <div></div>;
};

export default HalfTermView;
