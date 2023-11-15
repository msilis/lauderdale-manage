import { handleLogin } from "./loginUtils";
import { useRef } from "react";

export const LoginForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
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
      <div>
        <button type="submit" className="btn btn-neutral mt-3">
          Log in
        </button>
      </div>
    </form>
  );
};
