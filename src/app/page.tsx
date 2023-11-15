"use client";

import { LoginForm } from "@/components/loginForm/loginForm";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col  mt-6">
      <img
        src="/lauderdalemanage.png"
        alt="manage logo"
        height={200}
        width={200}
      />
      <LoginForm />
    </div>
  );
}
