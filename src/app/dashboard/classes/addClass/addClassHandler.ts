"use client";

import { errorToast, successToast } from "@/components/toast/toast";
import { TOAST_TEXT } from "@/components/toast/toastText";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const handleAddClassSubmit = async (
  event: React.FormEvent<HTMLFormElement>,
  router: string[] | AppRouterInstance
) => {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);
  const classData = Object.fromEntries(formData.entries());

  console.log({ classData });

  const response = await fetch("../../../api/classes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(classData),
  });
  if (!response.ok) {
    errorToast(TOAST_TEXT.errorAddingClass);
    throw new Error("Could not add class to database");
  }
  successToast(TOAST_TEXT.classAdded);
  setTimeout(() => {
    router.push("/dashboard/classes");
  }, 1500);
};
