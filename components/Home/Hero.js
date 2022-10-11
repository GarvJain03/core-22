import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className=" mx-auto flex flex-col items-center px-5 py-8 md:flex-row lg:px-24">
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
          <Link href="/book-a-flight">
            <a className="text-primary-text text-lg rounded-full border-primary-text border-2 px-4 py-2 transition duration-200 ease-in-out hover:bg-primary-text hover:text-white">
              Book a flight
            </a>
          </Link>
          <Link href="/bookings">
            <a className="text-primary-text text-lg rounded-full border-primary-text border-2 px-6 py-2 transition duration-200 ease-in-out hover:bg-primary-text hover:text-white">
              Check In
            </a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          width="85%"
          src="https://res.cloudinary.com/kentcdodds-com/image/upload/w_1300,q_auto,f_auto/kentcdodds.com/illustrations/kody-flying_yellow"
        />
      </div>
    </div>
  );
};

export default Hero;
