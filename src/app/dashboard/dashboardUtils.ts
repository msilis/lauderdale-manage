"use client";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const handleLogout = (router: AppRouterInstance | string[]) => {
  sessionStorage.removeItem("email");
  router.push("/");
};
