import { errorToast, successToast } from "@/components/toast/toast";
import { TOAST_TEXT } from "@/components/toast/toastText";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import type { Value } from "react-multi-date-picker";

export const handleCalendarSave = async (
  dates: Value[],
  router: string[] | AppRouterInstance
) => {
  const datesToSave = dates;
  const response = await fetch("../../../api/settings/setTermDates", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datesToSave),
  });
  if (!response.ok) {
    console.log("There was an error saving term dates");
    errorToast(TOAST_TEXT.errorSavingDates);
  }
  successToast(TOAST_TEXT.termDatesSaved);
  setTimeout(() => {
    router.push("/dashboard/settings");
  }, 1500);
};
