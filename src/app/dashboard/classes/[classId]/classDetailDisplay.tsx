import { ClassData } from "../classView/classTable";
import { CLASS_TABLE } from "../classView/classUtils";

const ClassDetailsDisplay = ({
  classDetail,
}: {
  classDetail: ClassData | undefined;
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <th>{CLASS_TABLE.className}</th>
          <th>{CLASS_TABLE.classLocation}</th>
          <th>{CLASS_TABLE.classTeacher}</th>
          <th>{CLASS_TABLE.classAccompanist}</th>
          <th>{CLASS_TABLE.classStartTime}</th>
          <th>{CLASS_TABLE.classEndTime}</th>
        </thead>
        <tbody>
          {classDetail ? (
            <tr>
              <td>{classDetail.className}</td>
              <td>{classDetail.classLocation}</td>
              <td>{classDetail.classTeacher}</td>
              <td>{classDetail.classAccompanist}</td>
              <td>{classDetail.classStartTime}</td>
              <td>{classDetail.classEndTime}</td>
            </tr>
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

export default ClassDetailsDisplay;
