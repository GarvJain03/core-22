/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Hero = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <>Loading...</>;
  }
  return (
    <div className=" mx-auto flex flex-col items-center px-5 pt-12 pb-8 md:flex-row lg:px-24">
      <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
        <div className="mb-8 flex flex-row space-x-3"></div>
        <h2 className="text-4xl font-bold text-primary-text sm:text-5xl mb-4">
          Tony Airways
        </h2>
        <p className="lg:text-justify text-xl leading-8 text-gray-400 mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
          voluptatem repudiandae atque accusamus molestiae et?
        </p>
        <div className="flex space-x-2">
          {!session && (
            <Link href="/auth/login">
              <a className="text-primary-text text-lg rounded-full border-primary-text border-2 px-4 py-2 transition duration-200 ease-in-out hover:bg-primary-text hover:text-white">
                Login
              </a>
            </Link>
          )}
          {session && (
            <>
              <Link href="/bookings">
                <a className="text-primary-text text-lg rounded-full border-primary-text border-2 px-4 py-2 transition duration-200 ease-in-out hover:bg-primary-text hover:text-white">
                  Book a Flight
                </a>
              </Link>
              <button onClick={signOut}>Sign out</button>
            </>
          )}
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-full w-5/6">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src="/images/plane.png"
        />
      </div>
    </div>
  );
};

export default Hero;
