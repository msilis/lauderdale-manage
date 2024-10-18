import { errorToast, successToast } from "@/components/toast/toast";
import { TOAST_TEXT } from "@/components/toast/toastText";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import type { Value } from "react-multi-date-picker";

export const handleCalendarSave = async (
  dates: Value,
  term: number,
  router: string[] | AppRouterInstance
) => {
  const datesToSave = {
    termNumber: term,
    termDates: dates,
  };

  const response = await fetch("../../../api/settings/termdates", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datesToSave),
  });
  if (!response.ok) {
    errorToast(TOAST_TEXT.errorSavingDates);
    throw new Error("Could not save term dates");
  }
  successToast(TOAST_TEXT.termDatesSaved);
  setTimeout(() => {
    router.push("/dashboard/settings");
  }, 1500);
};
