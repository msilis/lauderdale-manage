"use client";

import { errorToast, successToast } from "@/components/toast/toast";
import { TOAST_TEXT } from "@/components/toast/toastText";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const addTeacherHandler = async (
  event: React.FormEvent<HTMLFormElement>,
  router: string[] | AppRouterInstance
) => {
  event.preventDefault();

  const formData = new FormData(event.target as HTMLFormElement);
  const teacherData = Object.fromEntries(formData.entries());

  const response = await fetch("../../../api/teachers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(teacherData),
  });

  if (!response.ok) {
    errorToast(TOAST_TEXT.errorAddingTeacher);
    throw new Error("Could not add teacher to database");
  }

  successToast(TOAST_TEXT.teacherAdded);

  setTimeout(() => {
    router.push("/dashboard/teachers");
  }, 1500);
};
