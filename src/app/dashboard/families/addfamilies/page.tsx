"use client";

import DashboardLayout from "@/layout/dashboardLayout";
import { UI_TEXT } from "../../../../../utils/uitext";
import { useRouter } from "next/navigation";
import { handleAddFamilyFormSubmit } from "./addFamilyFormHandler";

const AddFamily = () => {
  const router = useRouter();
  const handleCancelButtonClick = () => {
    router.push("/dashboard/families");
  };
  return (
    <div className="mt-6 ml-[30%] max-w-2xl outline outline-slate-100 p-4 drop-shadow-lg rounded-md">
      <h2 className="font-bold">Enter Family Details</h2>
      <form
        className="mt-4"
        method="submit"
        onSubmit={(event) => handleAddFamilyFormSubmit(event, router)}
      >
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex flex-col md:w-1/2">
            <label htmlFor="parent1FirstName" className="flex flex-col">
              Parent 1 First Name
            </label>
            <input
              name="parent1FirstName"
              id="parent1FirstName"
              type="text"
              placeholder="First name..."
              className="input input-bordered w-full max-w-xs mt-2"
              required
            />
            <label htmlFor="Parent1LastName" className="flex flex-col mt-2">
              Parent 1 Last Name
            </label>
            <input
              name="parent1LastName"
              id="parent1LastName"
              type="text"
              placeholder="Last name..."
              className="input input-bordered w-full max-w-xs mt-2"
              required
            />
            <label htmlFor="parent1Email" className="flex flex-col mt-2">
              Email
            </label>
            <input
              name="parent1Email"
              type="email"
              id="parent1Email"
              placeholder="example@email.com"
              className="input input-bordered w-full max-w-xs mt-2"
              required
            />
            <label htmlFor="parent1Phone" className="flex flex-col mt-2">
              Phone
            </label>
            <input
              type="tel"
              name="parent1Phone"
              id="parent1Phone"
              placeholder="020 1234 5678"
              className="input input-bordered w-full max-w-xs mt-2"
              required
            />
            <label htmlFor="parent1Address" className="flex flex-col mt-2">
              Address
            </label>
            <textarea
              className="textarea textarea-bordered mt-2"
              placeholder="Address..."
              name="parent1Address"
              required
            />
          </div>
          <div className="flex flex-col md:w-1/2">
            <label htmlFor="parent2FirstName" className="flex flex-col">
              Parent 2 First Name
            </label>
            <input
              name="parent2FirstName"
              id="parent2FirstName"
              type="text"
              placeholder="First name..."
              className="input input-bordered w-full max-w-xs mt-2"
            />
            <label htmlFor="parent2LastName" className="flex flex-col mt-2">
              Parent 2 Last Name
            </label>
            <input
              name="parent2LastName"
              type="text"
              id="parent2LastName"
              placeholder="Last name..."
              className="input input-bordered w-full max-w-xs mt-2"
            />
            <label htmlFor="parent2Email" className="flex flex-col mt-2">
              Email
            </label>
            <input
              name="parent2Email"
              id="parent2Email"
              type="email"
              placeholder="email@example.com"
              className="input input-bordered w-full max-w-xs mt-2"
            />
            <label htmlFor="parent2Phone" className="flex flex-col mt-2">
              Phone
            </label>
            <input
              name="parent2Phone"
              type="tel"
              id="parent2Phone"
              placeholder="020 1234 5678"
              className="input input-bordered w-full max-w-xs mt-2"
            />
            <label htmlFor="parent1Address" className="flex flex-col mt-2">
              Address
            </label>
            <textarea
              name="parent2Address"
              className="textarea textarea-bordered mt-2"
              placeholder="Address..."
            />
          </div>
        </div>
        <div className=" flex w-full md:w-full justify-around mt-4">
          <button
            className="btn btn-secondary mt-4"
            type="reset"
            onClick={() => handleCancelButtonClick()}
          >
            {UI_TEXT.cancelButton}
          </button>
          <button className="btn btn-accent mt-4">{UI_TEXT.addFamily}</button>
        </div>
      </form>
    </div>
  );
};

const WrappedAddFamily = () => {
  return (
    <DashboardLayout>
      <AddFamily />
    </DashboardLayout>
  );
};

export default WrappedAddFamily;
