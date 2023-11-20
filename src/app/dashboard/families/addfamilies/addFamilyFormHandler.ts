import { errorToast, successToast } from "../../../../components/toast/toast";
import { TOAST_TEXT } from "../../../../components/toast/toastText";
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
    errorToast(TOAST_TEXT.errorAddingFamily);
    throw new Error("Could not add family to database");
  }

  successToast(TOAST_TEXT.familyAdded);

  setTimeout(() => {
    router.push("/dashboard/families");
  }, 1500);
};
