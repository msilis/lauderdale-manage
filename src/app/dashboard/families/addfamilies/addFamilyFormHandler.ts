import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const handleAddFamilyFormSubmit = async (
  event: React.FormEvent<HTMLFormElement>,
  router: string[] | AppRouterInstance
) => {
  event.preventDefault();

  const formData = new FormData(event.target as HTMLFormElement);
  const familyData = Object.fromEntries(formData.entries());

  const response = await fetch("../../../api/addFamily", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(familyData),
  });
  if (!response.ok) {
    throw new Error("Could not add family to database");
  }

  console.log("Added family to database");

  router.push("/dashboard/families");
};
