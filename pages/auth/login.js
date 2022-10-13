import Layout from "../../components/Layout/Layout";
import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

export default function Login() {
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
          <div className="flex flex-col space-y-4">
            <button
              onClick={() =>
                signIn("google", { callbackUrl: process.env.NEXT_PUBLIC_URL })
              }
              className="p-4 text-white rounded-lg bg-blue-bg text-lg transition duration-200 ease-in-out hover:bg-opacity-90"
            >
              <FaGoogle className="inline-block mr-4" />
              <span>Sign in with Google</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
