import Layout from "../../components/Layout/Layout";
import Link from "next/link";

export default function login() {
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
          <form method="get" className="flex flex-col space-y-4">
            <label
              htmlFor="email"
              className="text-primary-text font-bold text-md"
            >
              Email
            </label>
            <input
              name="email"
              type={`email`}
              className="p-4 text-lg w-full rounded-l-md bg-gray-bg outline-none text-primary-text"
              placeholder="johndoe@example.com"
              autoComplete="off"
            />
            <label
              htmlFor="password"
              className="text-primary-text font-bold text-md"
            >
              Password
            </label>{" "}
            <input
              name="password"
              type={`password`}
              className="p-4 text-lg w-full rounded-l-md bg-gray-bg outline-none text-primary-text"
              placeholder="********"
              autoComplete="off"
            />
            <button
              type="submit"
              className="p-4 text-white rounded-lg bg-blue-bg text-lg transition duration-200 ease-in-out hover:bg-opacity-90"
            >
              Login
            </button>
          </form>
          <p className="text-base text-gray-500 mt-5">
            No account?{" "}
            <Link href="/auth/register">
              <a className="underline">Register</a>
            </Link>
            .
          </p>
        </div>
      </div>
    </Layout>
  );
}
