"use client";

import DashboardLayout from "@/layout/dashboardLayout";
import { UI_TEXT } from "../../../../../utils/uitext";
import { useRouter } from "next/navigation";
import { handleAddClassSubmit } from "./addClassHandler";

const AddClass = () => {
  const router = useRouter();
  const handleCancelButtonClick = () => {
    router.push("/dashboard/classes");
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
        <label htmlFor="classTeacher" className="mt-2">
          Teacher
        </label>
        <input
          id="classTeacher"
          name="classTeacher"
          type="text"
          placeholder="Teacher..."
          className="input input-bordered w-full mt-2"
        />
        <label htmlFor="classAccompanist" className="mt-2">
          Accompanist
        </label>
        <input
          id="classAccompanist"
          name="classAccompanist"
          type="text"
          placeholder="Accompanist..."
          className="input input-bordered w-full mt-2"
        />
        <div className="flex gap-3 mt-2 items-center">
          <label htmlFor="classStartTime" className="mt-2">
            Start Time
          </label>
          <input
            id="classStartTime"
            name="classStartTime"
            type="time"
            className="input input-bordered mt-2"
            required
          />
          <label htmlFor="classEndTime" className="mt-2">
            End Time
          </label>
          <input
            id="classEndTime"
            name="classEndTime"
            type="time"
            className="input input-bordered mt-2"
            required
          />
        </div>
        <div className="flex w-full md:w-full justify-around mt-4">
          <button
            className="btn btn-secondary mt-4"
            type="reset"
            onClick={() => handleCancelButtonClick()}
          >
            {UI_TEXT.cancelButton}
          </button>
          <button className="btn btn-accent mt-4">{UI_TEXT.addButton}</button>
        </div>
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
