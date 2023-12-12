import { errorToast, successToast } from "../../../../components/toast/toast";
import { TOAST_TEXT } from "../../../../components/toast/toastText";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import type { Value } from "react-multi-date-picker";

export const handleHalfTermSave = async (
  date: Value,
  term: number,
  router: AppRouterInstance
) => {
  const halfTermDateToSave = {
    halfTermDate: date,
    halfTermNumber: term,
  };

  const response = await fetch("../../../api/settings/halfterm", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(halfTermDateToSave),
  });
  if (!response.ok) {
    errorToast(TOAST_TEXT.errorSavingHalfTerm);
    throw new Error(TOAST_TEXT.errorSavingHalfTerm);
  }
  successToast(TOAST_TEXT.halfTermSaved);
  setTimeout(() => {
    router.push("/dashboard/settings");
  }, 1000);
};
