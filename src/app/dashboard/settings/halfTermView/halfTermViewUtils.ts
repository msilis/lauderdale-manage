import { TOAST_TEXT } from "@/components/toast/toastText";
import { errorToast } from "../../../../components/toast/toast";

export const fetchHalfTermDates = async () => {
  try {
    const response = await fetch("../../../api/settings/halfterm", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      errorToast(TOAST_TEXT.genericFetchError);
    }
    const halfTermData = await response.json();
    return halfTermData;
  } catch (error) {
    console.error("Error fetching half-term dates");
    throw new Error("Error fetching half-term dates");
  }
};
