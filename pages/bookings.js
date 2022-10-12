import Layout from "../components/Layout/Layout";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Form from "../components/Bookings/Form";

export default function Bookings() {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth/login");
    },
  });

  if (status === "loading") {
    return <>Loading...</>;
  }

  return (
    <Layout title="Bookings">
      <div className="container mx-auto px-5 py-6">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 text-4xl font-bold text-primary-text sm:text-5xl">
            Book a flight
          </h1>
          <p className="mx-auto text-xl leading-relaxed text-secondary-text lg:w-2/3 lg:px-24">
            Ready to take off?
          </p>
        </div>
      </div>
      <Form />
      <div className="flex justify-center items-center">
        <button
          type="submit"
          className="mx-2 my-4 flex items-center justify-center space-x-2 rounded-lg px-8 py-3 text-white transition duration-200 ease-in-out hover:bg-opacity-90 bg-blue-bg active:outline-blue-bg"
        >
          <span className="text-md font-medium lg:text-lg">Book</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>
    </Layout>
  );
}
