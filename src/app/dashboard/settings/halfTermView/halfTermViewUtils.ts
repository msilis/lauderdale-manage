import { TOAST_TEXT } from "@/components/toast/toastText";
import { errorToast } from "../../../../components/toast/toast";
import { convertDate } from "../termDateView/termDateViewUtils";

const convertHalfTermDate = (date: string[]) => {
  return date.map((value) => new Date(value));
};

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
    const convertedHalfTermData = halfTermData
      .filter(
        (term: { halfTermDate: number[] }) =>
          term && Object.keys(term).length > 0
      )
      .map((term: { halfTermDate: string[] }) => {
        return convertHalfTermDate(term.halfTermDate);
      });

    return convertedHalfTermData;
  } catch (error) {
    console.error("Error fetching half-term dates", error);
    throw new Error("Error fetching half-term dates");
  }
};
