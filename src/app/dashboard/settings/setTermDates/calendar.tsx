import { Calendar } from "react-multi-date-picker";
import type { Value } from "react-multi-date-picker";
import { UI_TEXT } from "../../../../../utils/uitext";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { handleCalendarSave } from "./calendarUtils";

interface TermCalendarProps {
  dates: Value;
  setDates: (dates: Value) => void;
  router: string[] | AppRouterInstance;
}

const TermCalendar: React.FC<TermCalendarProps> = ({
  dates,
  setDates,
  router,
}) => {
  const handleDateChange = (event: Value) => {
    setDates(event);
  };

  return (
    <div>
      <Calendar
        multiple={true}
        value={dates}
        numberOfMonths={4}
        onChange={(event) => handleDateChange(event)}
        highlightToday={false}
      />
      <div className="flex gap-4 mt-4">
        <button
          className="btn btn-accent"
          onClick={() => handleCalendarSave(dates, router)}
        >
          {UI_TEXT.saveDates}
        </button>
        <button className="btn btn-default" onClick={() => setDates([])}>
          {UI_TEXT.resetDates}
        </button>
      </div>
    </div>
  );
};

export default TermCalendar;
