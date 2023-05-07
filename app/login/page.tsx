"use client";
import Image from "next/image";
import man from "public/giphy.gif";

export default function Home() {

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => { 
    console.log(e.currentTarget.email.value);
  }

  return (
    <div className="h-full from-primary to-secondary bg-gradient-to-br flex flex-row justify-center items-center">
      <div className="h-fit flex items-center">
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 gap-10 items-center">
            <div className="flex flex-col items-center h-hull w-fit max-w-xs rounded-lg p-5 py-5 shadow-lg glass">
              <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
                Login to your account
              </h2>
              <p className="text-center mt-1">
                Or{" "}
                <a
                  href="/register"
                  className="text-primary font-medium hover:cursor-pointer hover:underline"
                >
                  register
                </a>{" "}
                if you don't already have an account
              </p>
              <form
                action="?/login"
                method="POST"
                className="flex flex-col items-center space-y-2 w-full pt-4"
                onSubmit={handleSubmit}
              >
                <div className="form-control w-full max-w-md">
                  <label htmlFor="email" className="label font-medium pb-1">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input input-bordered w-full max-w-md"
                  />
                </div>
                <div className="form-control w-full max-w-md">
                  <label htmlFor="password" className="label font-medium pb-1">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="input input-bordered w-full max-w-md"
                  />
                </div>
                <div className="w-full max-w-md pt-2">
                  <button type="submit" className="btn btn-primary w-full">
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div className="h-full w-full max-h-96 max-w-96">
              <Image
                className="h-full w-full aspect-square"
                src={man}
                alt="Giphy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}