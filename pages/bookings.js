import Layout from "../components/Layout/Layout";
import { GoLocation } from "react-icons/go";
import { AiTwotoneCalendar } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import Link from "next/link";

export default function bookings() {
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
      <div className="flex flex-row w-5/6 lg:w-4/5 mb-8 mx-auto rounded-md shadow-md bg-white">
        <div className="flex items-center flex-wrap w-1/4 border-r-2 ml-8 my-2">
          <div className="flex items-center mb-2">
            <GoLocation className="mr-2 red" />
            <h3 className="font-bold">From</h3>
          </div>
          <input
            className="w-5/6 block cursor-pointer py-1 pl-2 outline-none"
            placeholder="Where from?"
          />
        </div>
        <div className="flex items-center flex-wrap w-1/4 border-r-2 ml-8 my-2">
          <div className="flex items-center mb-2">
            <GoLocation className="mr-2 red" />
            <h3 className="font-bold">To</h3>
          </div>
          <input
            className="w-5/6 block cursor-pointer py-1 pl-2 outline-none"
            placeholder="Where are you going?"
          />
        </div>
        <div className="flex items-center flex-wrap w-1/4 border-r-2 ml-8 my-2">
          <div className="flex items-center mb-2">
            <AiTwotoneCalendar className="mr-2 red" />
            <h3 className="font-bold">Dates</h3>
          </div>
          <input
            type="date"
            className="w-5/6 block cursor-pointer py-1 pl-2 outline-none"
            placeholder="Add dates?"
          />
        </div>
        <div className="flex items-center flex-wrap w-1/4 ml-8 my-2">
          <div className="flex items-center mb-2">
            <BsPeople className="mr-2 red" />
            <h3 className="font-bold">Travellers</h3>
          </div>
          <input
            type="number"
            className="w-5/6 block cursor-pointer py-1 pl-2 outline-none"
            placeholder="No. of travellers"
          />
        </div>
      </div>
      <a
        className="block w-fit mx-auto transition duration-200 ease-in-out hover:bg-nav-txt-color hover:text-white border-nav-txt-color px-4 py-2 border-2 rounded-md text-center mb-8"
        href="/seatselection"
      >
        Next
      </a>
    </Layout>
  );
}
