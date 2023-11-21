import ClassTable from "./classTable";

const ClassView = () => {
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-2xl">Current Classes</h2>
      <div className="mt-6">
        <ClassTable />
      </div>
    </div>
  );
};

export default ClassView;
