"use client";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col  mt-6">
      <img
        src="/lauderdalemanage.png"
        alt="manage logo"
        height={200}
        width={200}
      />
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <button type="submit" className="btn btn-neutral mt-3">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}
