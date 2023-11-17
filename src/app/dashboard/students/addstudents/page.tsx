import DashboardLayout from "@/layout/dashboardLayout";

const AddStudent = () => {
  return (
    <div className="mt-6">
      <h2 className="font-bold">Enter Student Details</h2>
      <form className="mt-4">
        <label htmlFor="studentFirstName" className="flex flex-col">
          First Name
        </label>
        <input
          id="studentFirstName"
          type="text"
          placeholder="First name..."
          className="input input-bordered w-full max-w-xs mt-2"
        />
        <label htmlFor="studentLastName" className="flex flex-col mt-2">
          Last Name
        </label>
        <input
          id="studentLastName"
          type="text"
          placeholder="Last name..."
          className="input input-bordered w-full max-w-xs mt-2"
        />
        <label htmlFor="studentFamily" className="flex flex-col mt-2">
          Last Name
        </label>
        <select className="select select-bordered w-full max-w-xs mt-2">
          <option disabled selected>
            Family...
          </option>
        </select>
        <label htmlFor="studentBirthdate" className="flex flex-col mt-2">
          Last Name
        </label>
        <input
          id="studentBirthdate"
          type="date"
          placeholder="Last name..."
          className="input input-bordered w-full max-w-xs mt-2"
        />
      </form>
    </div>
  );
};

const WrappedAddStudent = () => {
  return (
    <DashboardLayout>
      <AddStudent />
    </DashboardLayout>
  );
};

export default WrappedAddStudent;
