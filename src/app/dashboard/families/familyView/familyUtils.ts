import { errorToast, successToast } from "@/components/toast/toast";
import { FamilyData } from "./familyTable";
import { TOAST_TEXT } from "@/components/toast/toastText";

export const TABLE_UI = {
  titleFamilyName: "Family Name",
  contactEmail: "Email",
  contactPhone: "Phone",
};

export const getAllFamilyInfo = async () => {
  const response = await fetch("../../../api/getFamilies", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export const getFamilyDetails = async (familyId: string | undefined) => {
  const response = await fetch("../../../api/getFamilies/getOneFamily", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(familyId),
  });
  const data = await response.json();
  return data;
};

export const updateFamilyDetails = async (
  updatedFamilyData: FamilyData,
  callback: () => void
) => {
  const response = await fetch("../../../api/addFamily/editFamily", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedFamilyData),
  });
  if (!response.ok) {
    errorToast(TOAST_TEXT.errorUpdatingFamily);
    throw new Error("There was an error updating the family");
  }
  successToast(TOAST_TEXT.familyUpdated);
  callback();
};
