export const Sidebar = () => {
  return (
    <div className="flex flex-col ml-2 mt-4">
      <img
        src="/lauderdalemanage.png"
        height={120}
        width={120}
        alt="manage logo"
      />
      <ul className="flex flex-col gap-4">
        <li>
          <button className="btn btn-outline w-32">Overview</button>
        </li>
        <li>
          <button className="btn btn-outline w-32">Students</button>
        </li>
        <li>
          <button className="btn btn-outline w-32">Families</button>
        </li>
        <li>
          <button className="btn btn-outline w-32">Teachers</button>
        </li>
        <li>
          <button className="btn btn-outline w-32">Classes</button>
        </li>
      </ul>
    </div>
  );
};
