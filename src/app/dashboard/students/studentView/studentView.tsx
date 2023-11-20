import StudentTable from "./studentTable";

const StudentView = () => {
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-2xl">Current Students</h2>
      <div className="mt-6">
        <StudentTable />
      </div>
    </div>
  );
};

export default StudentView;
