"use client";

import DashboardLayout from "@/layout/dashboardLayout";
import { UI_TEXT } from "../../../../../utils/uitext";
import { useRouter } from "next/navigation";
import { addTeacherHandler } from "./addTeacherHandler";

const AddTeacher = () => {
  const router = useRouter();
  const handleCancelButtonClick = () => {
    router.push("/dashboard/teachers");
  };

  return (
    <div className="mt-6 ml-[30%] max-w-lg outline outline-slate-100 p-4 drop-shadow-lg rounded-md">
      <h2 className="font-bold">Enter Teacher Details</h2>
      <form
        className="mt-4 flex flex-col mx-auto"
        method="submit"
        onSubmit={(event) => addTeacherHandler(event, router)}
      ></form>
    </div>
  );
};
