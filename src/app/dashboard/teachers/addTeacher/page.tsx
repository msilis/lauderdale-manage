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
      >
        <label htmlFor="teacherFirstName" className="flex flex-col">
          First Name
        </label>
        <input
          id="teacherFirstName"
          name="teacherFirstName"
          type="text"
          placeholder="First name..."
          required
          className="input input-bordered w-full mt-2"
        />
        <label htmlFor="teacherLastName" className="mt-2">
          Last Name
        </label>
        <input
          id="teacherLastName"
          name="teacherLastName"
          type="text"
          placeholder="Last name..."
          required
          className="input input-bordered w-full mt-2"
        />
        <label htmlFor="teacherEmail" className="mt-2">
          Email
        </label>
        <input
          id="teacherEmail"
          name="teacherEmail"
          type="email"
          placeholder="example@email.com"
          required
          className="input input-bordered w-full mt-2"
        />
        <label htmlFor="teacherPhone" className="mt-2">
          Phone
        </label>
        <input
          id="teacherPhone"
          name="teacherPhone"
          type="tel"
          placeholder="020 1234 5678"
          required
          className="input input-bordered w-full mt-2"
        />
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

const WrappedAddTeacher = () => {
  return (
    <DashboardLayout>
      <AddTeacher />
    </DashboardLayout>
  );
};

export default WrappedAddTeacher;
