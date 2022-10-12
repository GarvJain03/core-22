import Layout from "../../components/Layout/Layout";
import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";

export default function Login() {
  const [email, setEmail] = React.useState("");

  const sendLoginVerification = (e) => {
    e.preventDefault();

    // Notice, we are also redirecting users to the protected route instead of the homepage after signing in.
    signIn("email", { callbackUrl: "/", email });
  };

  return (
    <Layout title="Login">
      <div className="container px-5 lg:py-24 py-12 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <img src="/images/login.svg" className="lg:w-4/6 w-full" alt="hero" />
        </div>
        <div className="lg:w-2/5 md:w-1/2 bg-white shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-primary-text text-3xl font-bold title-font mb-5">
            Login
          </h2>
          <form
            method="post"
            onSubmit={sendLoginVerification}
            className="flex flex-col space-y-4"
          >
            <label
              htmlFor="email"
              className="text-primary-text font-bold text-md"
            >
              Email
            </label>
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type={`email`}
              className="p-4 text-lg w-full rounded-l-md bg-gray-bg outline-none text-primary-text"
              placeholder="johndoe@example.com"
              autoComplete="off"
            />
            <button
              type="submit"
              className="p-4 text-white rounded-lg bg-blue-bg text-lg transition duration-200 ease-in-out hover:bg-opacity-90"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
