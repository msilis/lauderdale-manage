"use client";

import { createContext, useState } from "react";

export const ClassDataContext = createContext();

export function ClassContext({ children }) {
  const [classData, setClassData] = useState();
  const [termDates, setTermDates] = useState();
  const [halfTermDates, setHalfTermDates] = useState();

  return (
    <ClassDataContext.Provider
      value={{
        classData,
        setClassData,
        termDates,
        setTermDates,
        halfTermDates,
        setHalfTermDates,
      }}
    >
      {children}
    </ClassDataContext.Provider>
  );
}
