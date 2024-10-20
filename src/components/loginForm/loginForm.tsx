import { handleLogin } from "./loginUtils";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [loginFail, setLoginFail] = useState(false);

    const router = useRouter();

    const handleFormSubmit = (event: React.FormEvent) => {
     
    event.preventDefault();
    const email = emailRef.current?.value;
      const password = passwordRef.current?.value;
     

    if (email && password) {
      handleLogin(email, password, router, setLoginFail);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          className="input input-bordered w-full max-w-xs"
          ref={emailRef}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          className="input input-bordered w-full max-w-xs"
          ref={passwordRef}
        />
          </div>
          {loginFail && <p className="text-red-600">Wrong email or password</p>}
      <div>
        <button type="submit" className="btn btn-neutral mt-3">
          Log in
        </button>
      </div>
    </form>
  );
};
