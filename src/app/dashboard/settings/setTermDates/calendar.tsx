"use client";

import { Calendar } from "react-multi-date-picker";
import type { Value } from "react-multi-date-picker";
import { UI_TEXT } from "../../../../../utils/uitext";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRef } from "react";
import ConfirmDateChange from "./confirmModal";
import { errorToast } from "@/components/toast/toast";
import { TOAST_TEXT } from "@/components/toast/toastText";

interface TermCalendarProps {
  dates: Value;
  setDates: (dates: Value) => void;
  router: string[] | AppRouterInstance;
  term: number | undefined;
  setTerm: (term: number | undefined) => void;
  onSave: () => void;
  numberOfMonths?: number;
}

const TermCalendar: React.FC<TermCalendarProps> = ({
  dates,
  setDates,
  term,
  setTerm,
  onSave,
  numberOfMonths,
}) => {
  const handleDateChange = (event: Value) => {
    setDates(event);
  };

  const confirmRef = useRef<HTMLDialogElement | null>(null);
  const termRef = useRef<HTMLSelectElement | null>(null);

  const confirmClick = () => {
    if (termRef.current?.value) {
      onSave();
      confirmRef.current?.close();
    } else {
      errorToast(TOAST_TEXT.errorSetTerm);
    }
  };

  const checkInputs = () => {
    if (termRef.current?.value) {
      confirmRef.current?.showModal();
    } else {
      errorToast(TOAST_TEXT.errorSetTerm);
    }
  };

  return (
    <div>
      <div className="flex flex-col">
        <label
          htmlFor="selectTermInput"
          id="selectTermInput"
          className="text-lg font-bold mt-2"
        >
          Which term?
        </label>
        <select
          name="selectTermInput"
          className="select select-bordered w-full max-w-xs mt-4"
          onChange={(event) => setTerm(Number(event.target.value))}
          value={term || ""}
          ref={termRef}
        >
          <option value={""}>Please choose a term</option>
          <option value="1">Term 1</option>
          <option value="2">Term 2</option>
          <option value="3">Term 3</option>
        </select>
      </div>
      <div className="mt-4">
        <Calendar
          multiple={true}
          value={dates}
          numberOfMonths={numberOfMonths}
          onChange={(event) => handleDateChange(event)}
          highlightToday={false}
        />
      </div>
      <ConfirmDateChange ref={confirmRef} confirmClick={confirmClick} />
      <div className="flex gap-4 mt-4">
        <button className="btn btn-accent" onClick={() => checkInputs()}>
          {UI_TEXT.saveDates}
        </button>
        <button
          className="btn btn-default"
          onClick={() => {
            setDates([]);
            setTerm(undefined);
          }}
        >
          {UI_TEXT.resetDates}
        </button>
      </div>
    </div>
  );
};

export default TermCalendar;
