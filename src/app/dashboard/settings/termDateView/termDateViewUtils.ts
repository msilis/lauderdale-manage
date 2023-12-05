import { errorToast } from "@/components/toast/toast";
import { TOAST_TEXT } from "@/components/toast/toastText";

type TermDates = {
  id: string;
  field: number[];
  termDates: Date[];
};

const convertDate = (date: TermDates) => {
  let sortedDates;
  if (date && Array.isArray(date)) {
    const mappedDates = date.map((unixdate: number) => new Date(unixdate));
    sortedDates = mappedDates.sort((a, b) => a.getTime() - b.getTime());
  }

  console.log(sortedDates, "sortedDates");
  return sortedDates;
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
    const lastTermDate = termDateData.pop();
    console.log(lastTermDate, "lastTermDate");
    const convertedDates = convertDate(lastTermDate.termDates);

    return convertedDates;
  } catch (error) {
    throw new Error("Error fetching dates.");
  }
};
