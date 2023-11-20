import DashboardLayout from "@/layout/dashboardLayout";
import { UI_TEXT } from "../../../../../utils/uitext";
import { Suspense } from "react";
import Loading from "@/app/loading";

const AddStudent = () => {
  return (
    <div className="mt-6 ml-[30%] max-w-lg outline outline-slate-100 p-4 drop-shadow-lg rounded-md">
      <h2 className="font-bold">Enter Student Details</h2>
      <form className="mt-4 flex flex-col" method="submit">
        <label htmlFor="studentFirstName" className="flex flex-col">
          First Name
        </label>
        <input
          id="studentFirstName"
          type="text"
          placeholder="First name..."
          className="input input-bordered w-full max-w-xs mt-2"
          required
        />
        <label htmlFor="studentLastName" className="flex flex-col mt-2">
          Last Name
        </label>
        <input
          id="studentLastName"
          type="text"
          placeholder="Last name..."
          className="input input-bordered w-full max-w-xs mt-2"
          required
        />
        <label htmlFor="studentFamily" className="flex flex-col mt-2">
          Last Name
        </label>
        <select
          className="select select-bordered w-full max-w-xs mt-2"
          required
        >
          <option disabled value="DEFAULT">
            Family...
          </option>
        </select>
        <label htmlFor="studentBirthdate" className="flex flex-col mt-2">
          Birth Date
        </label>
        <input
          id="studentBirthdate"
          type="date"
          className="input input-bordered w-full max-w-xs mt-2"
          required
        />
        <button className="btn btn-accent mt-4">{UI_TEXT.addButton}</button>
      </form>
    </div>
  );
};

const WrappedAddStudent = () => {
  return (
    <DashboardLayout>
      <Suspense fallback={<Loading />}>
        <AddStudent />
      </Suspense>
    </DashboardLayout>
  );
};

export default WrappedAddStudent;
