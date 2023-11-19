import { TABLE_UI } from "./familyUtils";

const FamilyTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>{TABLE_UI.titleFamilyName}</th>
            <th>{TABLE_UI.contactEmail}</th>
            <th>{TABLE_UI.contactPhone}</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default FamilyTable;
