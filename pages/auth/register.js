import Layout from "../../components/Layout/Layout";
import Link from "next/link";

export default function register() {
  return (
    <Layout title="Register">
      {" "}
      <div className="container px-5 lg:py-24 py-12 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <img src="/images/login.svg" className="lg:w-4/6 w-full" alt="hero" />
        </div>
        <div className="lg:w-2/5 md:w-1/2 bg-white shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-primary-text text-3xl font-bold title-font mb-5">
            Register
          </h2>
          <form method="get" className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="email"
                className="text-primary-text font-bold text-md"
              >
                Name
              </label>
              <input
                name="name"
                type={`text`}
                className="p-4 text-lg w-full rounded-l-md bg-gray-bg outline-none text-primary-text"
                placeholder="johndoe@example.com"
                autoComplete="off"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-primary-text font-bold text-md"
              >
                Email
              </label>{" "}
              <input
                name="email"
                type={`email`}
                className="p-4 text-lg w-full rounded-l-md bg-gray-bg outline-none text-primary-text"
                placeholder="********"
                autoComplete="off"
              />
            </div>
            <div>
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
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="text-primary-text font-bold text-md"
              >
                Confirm Password
              </label>{" "}
              <input
                name="confirmPassword"
                type={`password`}
                className="p-4 text-lg w-full rounded-l-md bg-gray-bg outline-none text-primary-text"
                placeholder="********"
                autoComplete="off"
              />
            </div>
          </form>
          <button
            type="submit"
            className="p-4 mt-8 text-white rounded-lg bg-blue-bg text-lg transition duration-200 ease-in-out hover:bg-opacity-90"
          >
            Login
          </button>
          <p className="text-base text-gray-500 mt-5">
            Already have an account?{" "}
            <Link href="/auth/login">
              <a className="underline">Login</a>
            </Link>
            .
          </p>
        </div>
      </div>
    </Layout>
  );
}
