import FamilyTable from "./familyTable";

const FamilyView = () => {
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-2xl">Current Families</h2>
      <div className="mt-6">
        <FamilyTable />
      </div>
    </div>
  );
};

export default FamilyView;
