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
