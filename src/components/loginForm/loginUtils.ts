import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import {Dispatch, SetStateAction} from 'react'

export const handleLogin = async (
    email: string,
    password: string,
    router: string[] | AppRouterInstance,
    setLoginFail: Dispatch<SetStateAction<boolean>>
) => {
  const response = await fetch("../../api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) {
      console.error("Login failed");
      setLoginFail(true);
    return;
  }

  console.log("Login successful!");
  sessionStorage.setItem("email", email);

  router.push("/dashboard/overview");
};
