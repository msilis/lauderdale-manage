"use client";

import DashboardLayout from "@/layout/dashboardLayout";
import { UI_TEXT } from "../../../../../utils/uitext";
import { useRouter } from "next/navigation";
import { handleAddClassSubmit } from "./addClassHandler";

const AddClass = () => {
  const router = useRouter();
  const handleCancelButtonClick = () => {
    router.push("dashboard/classes");
  };
  return (
    <div className="mt-6 ml-[30%] max-w-lg outline outline-slate-100 p-4 drop-shadow-lg rounded-md">
      <h2 className="font-bold">Enter Class Details</h2>
      <form
        className="mt-4 flex flex-col mx-auto"
        method="submit"
        onSubmit={(event) => handleAddClassSubmit(event, router)}
      >
        <label htmlFor="className" className="flex">
          Class Name
        </label>
        <input
          id="className"
          name="className"
          type="text"
          placeholder="Class Name..."
          className="input input-bordered w-full mt-2"
          required
        />
        <label htmlFor="classLocation" className="mt-2">
          Class Location
        </label>
        <input
          id="classLocation"
          name="classLocation"
          type="text"
          placeholder="Class Location"
          className="input input-bordered w-full mt-2"
          required
        />
        <label htmlFor="teacherEmail" className="mt-2">
          Email
        </label>
        <input
          id="teacherEmail"
          name="teacherEmail"
          type="email"
          placeholder="example@email.com"
          className="input input-bordered w-full mt-2"
          required
        />
        <label htmlFor="teacherPhone" className="mt-2">
          Phone
        </label>
        <input
          id="teacherPhone"
          name="teacherPhone"
          type="tel"
          placeholder="020 1234 5678"
          className="input input-bordered w-full mt-2"
          required
        />
      </form>
    </div>
  );
};

const WrappedAddClass = () => {
  return (
    <DashboardLayout>
      <AddClass />
    </DashboardLayout>
  );
};

export default WrappedAddClass;
