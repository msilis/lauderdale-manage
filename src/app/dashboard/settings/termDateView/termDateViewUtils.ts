import { errorToast } from "@/components/toast/toast";
import { TOAST_TEXT } from "@/components/toast/toastText";

const convertDate = (date: number[]) => {
  return date.sort((a, b) => a - b).map((value) => new Date(value));
};

export const fetchTermDates = async () => {
  try {
    const response = await fetch("../../../api/settings/termdates", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      errorToast(TOAST_TEXT.genericFetchError);
    }
    const termDateData = await response.json();
    const convertedDates = termDateData.map((term: { termDates: number[] }) => {
      return convertDate(term.termDates);
    });

    return convertedDates;
  } catch (error) {
    throw new Error("Error fetching dates.");
  }
};
