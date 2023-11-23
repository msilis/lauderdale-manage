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
