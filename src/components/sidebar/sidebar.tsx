"use client";

import { useRouter } from "next/navigation";

export const Sidebar = () => {
  const router = useRouter();

  const navigateTo = (url: string) => {
    router.push(url);
  };

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
          <button
            className="btn btn-outline w-32"
            onClick={() => navigateTo("/dashboard/overview")}
          >
            Overview
          </button>
        </li>
        <li>
          <button
            className="btn btn-outline w-32"
            onClick={() => navigateTo("/dashboard/students")}
          >
            Students
          </button>
        </li>
        <li>
          <button
            className="btn btn-outline w-32"
            onClick={() => navigateTo("/dashboard/families")}
          >
            Families
          </button>
        </li>
        <li>
          <button
            className="btn btn-outline w-32"
            onClick={() => navigateTo("/dashboard/teachers")}
          >
            Teachers
          </button>
        </li>
        <li>
          <button
            className="btn btn-outline w-32"
            onClick={() => navigateTo("/dashboard/classes")}
          >
            Classes
          </button>
        </li>
        <li>
          <button className="btn btn-outline btn-secondary w-32">
            Log out
          </button>
        </li>
      </ul>
    </div>
  );
};
