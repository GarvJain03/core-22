import React from "react";
import Layout from "../components/Layout/Layout";

const boarding = () => {
  return (
    <Layout title="Bookings">
      <div className="container mx-auto px-5 py-6 flex flex-col items-center justify-center">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 text-4xl font-bold text-primary-text sm:text-5xl">
            Book a flight
          </h1>
          <p className="mx-auto text-xl leading-relaxed text-secondary-text lg:w-2/3 lg:px-24">
            Boarding pass
          </p>
        </div>
      </div>
      <div className="bg-white rounded-md px-4 py-4 w-4/5 shadow-md lg:w-2/5 mx-auto mb-6">
        <div className="flex flex-wrap justify-between text-primary-text items-center">
          <div className="block">
            <h3 className="text-md font-bold">Date & Time</h3>
            <h4 className="text-[#828282] text-sm">Nov 27, 5:00 PM</h4>
          </div>
          <div className="block">
            <h3 className="text-md font-bold">Arrival</h3>
            <h4 className="text-[#828282] text-sm font-[500]">7:40 PM</h4>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-md px-4 py-4 w-4/5 shadow-md lg:w-2/5 mx-auto mb-6">
        <div className="flex justify-between mb-2">
          <h4 className="text-[#828282] text-sm font-[500]">Passenger</h4>
          <img className="h-6" src="images/logo.png" />
        </div>
        <h3 className="text-md font-bold mb-6">-Passenger name-</h3>
        <div className="flex flex-wrap justify-between text-primary-text items-center border-b-2 border-dotted border-[#828282] pb-6">
          <div className="block">
            <h4 className="text-[#828282] text-sm font-[500]">Terminal</h4>
            <h3 className="text-md font-bold">T2</h3>
          </div>
          <div className="block">
            <h4 className="text-[#828282] text-sm font-[500]">Check-in</h4>
            <h3 className="text-md font-bold">H04</h3>
          </div>
          <div className="block">
            <h4 className="text-[#828282] text-sm font-[500]">Gate</h4>
            <h3 className="text-md font-bold">B</h3>
          </div>
          <div className="block">
            <h4 className="text-[#828282] text-sm font-[500]">Seat</h4>
            <h3 className="text-md font-bold">B2</h3>
          </div>
        </div>
        <div className="pt-6">
          <h3 className="font-[500] mb-4">Bar Code</h3>
          <div className="flex justify-between">
            <img className="h-3/5" src="images/barcode.png" />
            <img className="h-3/5" src="images/airplane.png" />
          </div>
        </div>
      </div>
      <a
        className="block w-fit mx-auto transition duration-200 ease-in-out hover:bg-nav-txt-color hover:text-white border-nav-txt-color px-4 py-2 border-2 rounded-full text-center mb-8"
        href="/boarding"
      >
        Download Ticket
      </a>
    </Layout>
  );
};

export default boarding;
