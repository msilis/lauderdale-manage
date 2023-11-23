import { FamilyData } from "../familyView/familyTable";

const DetailsDisplay = ({
  familyDetail,
}: {
  familyDetail: FamilyData | undefined;
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {familyDetail ? (
            <>
              <tr>
                <th>Parent 1</th>
                <td>{familyDetail.parent1FirstName}</td>
                <td>{familyDetail.parent1LastName}</td>
                <td>{familyDetail.parent1Email}</td>
                <td>{familyDetail.parent1Phone}</td>
                <td>{familyDetail.parent1Address}</td>
              </tr>
              {familyDetail.parent2FirstName && (
                <tr>
                  <th>Parent 2</th>
                  <td>{familyDetail.parent2FirstName}</td>
                  <td>{familyDetail.parent2LastName}</td>
                  <td>{familyDetail.parent2Email}</td>
                  <td>{familyDetail.parent2Phone}</td>
                  <td>{familyDetail.parent2Address}</td>
                </tr>
              )}
            </>
          ) : (
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <span className="loading loading-dots loading-lg"></span>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DetailsDisplay;
