import TeacherTable from "./teacherTable";

const TeacherView = () => {
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-2xl">Current Teachers</h2>
      <div className="mt-6">
        <TeacherTable />
      </div>
    </div>
  );
};

export default TeacherView;
