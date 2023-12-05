import { errorToast } from "@/components/toast/toast";
import { TOAST_TEXT } from "@/components/toast/toastText";

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
    return termDateData;
  } catch (error) {
    throw new Error("Error fetching dates.");
  }
};
