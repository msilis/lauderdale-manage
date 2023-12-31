import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const handleLogin = async (
  email: string,
  password: string,
  router: string[] | AppRouterInstance
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
    return;
  }

  console.log("Login successful!");
  sessionStorage.setItem("email", email);

  router.push("/dashboard/overview");
};
