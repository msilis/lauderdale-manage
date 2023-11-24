"use client";

import { useRouter } from "next/navigation";
import { handleLogout } from "@/app/dashboard/dashboardUtils";

export const Sidebar = () => {
  const router = useRouter();

  const navigateTo = (url: string) => {
    router.push(url);
  };

  return (
    <div className="flex flex-col ml-2 mt-4">
      <h4 className="font-bold">
        Lauderdale
        <br />
        /Manage
      </h4>
      <ul className="flex flex-col gap-4 mt-5">
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
          <button
            className="btn btn-outline w-32"
            onClick={() => navigateTo("/dashboard/settingsgit ")}
          >
            Settings
          </button>
        </li>
        <li>
          <button
            className="btn btn-outline btn-secondary w-32"
            onClick={() => handleLogout(router)}
          >
            Log out
          </button>
        </li>
      </ul>
    </div>
  );
};
