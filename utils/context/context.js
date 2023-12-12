"use client";

import { createContext, useState } from "react";

export const ClassDataContext = createContext();

export function ClassContext({ children }) {
  const [classDetail, setClassDetail] = useState();
  const [termDates, setTermDates] = useState();
  const [halfTermDates, setHalfTermDates] = useState();

  return (
    <ClassDataContext.Provider
      value={{
        classDetail,
        setClassDetail,
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
