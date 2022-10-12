import React from "react";
import Layout from "../components/Layout/Layout";

const aSeats = [
  "A1",
  "A2",
  "A3",
  "A4",
  "A5",
  "A6",
  "A7",
  "A8",
  "A9",
  "A10",
  "A11",
  "A12",
  "A13",
  "A14",
  "A15",
  "A16",
];
const bSeats = [
  "B1",
  "B2",
  "B3",
  "B4",
  "B5",
  "B6",
  "B7",
  "B8",
  "B9",
  "B10",
  "B11",
  "B12",
  "B13",
  "B14",
  "B15",
  "B16",
];
const cSeats = [
  "C1",
  "C2",
  "C3",
  "C4",
  "C5",
  "C6",
  "C7",
  "C8",
  "C9",
  "C10",
  "C11",
  "C12",
  "C13",
  "C14",
  "C15",
  "C16",
];
const dSeats = [
  "D1",
  "D2",
  "D3",
  "D4",
  "D5",
  "D6",
  "D7",
  "D8",
  "D9",
  "D10",
  "D11",
  "D12",
  "D13",
  "D14",
  "D15",
  "D16",
];

const seatselection = () => {
  return (
    <Layout title="Bookings">
      <div className="container mx-auto px-5 py-6">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 text-4xl font-bold text-primary-text sm:text-5xl">
            Book a flight
          </h1>
          <p className="mx-auto text-xl leading-relaxed text-secondary-text lg:w-2/3 lg:px-24">
            Select your seat.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center w-4/5 border-y-2 p-8 mb-4">
        <div>
          {aSeats.map((seat, i) => {
            return (
              <button
                key={i}
                className="transition duration-200 ease-in-out hover:bg-nav-txt-color hover:text-white mr-2 mb-2 w-12 title-font text-primary-text border-primary-text border rounded-sm p-1"
              >
                {seat}
              </button>
            );
          })}
        </div>
        <div>
          {bSeats.map((seat, i) => {
            return (
              <button
                key={i}
                className="transition duration-200 ease-in-out hover:bg-nav-txt-color hover:text-white mr-2 mb-2 w-12 title-font text-primary-text border-primary-text border rounded-sm p-1"
              >
                {seat}
              </button>
            );
          })}
        </div>
        <div>
          {cSeats.map((seat, i) => {
            return (
              <button
                key={i}
                className="transition duration-200 ease-in-out hover:bg-nav-txt-color hover:text-white mr-2 mb-2 w-12 title-font text-primary-text border-primary-text border rounded-sm p-1"
              >
                {seat}
              </button>
            );
          })}
        </div>
        <div>
          {dSeats.map((seat, i) => {
            return (
              <button
                key={i}
                className="transition duration-200 ease-in-out hover:bg-nav-txt-color hover:text-white mr-2 mb-2 w-12 title-font text-primary-text border-primary-text border rounded-sm p-1"
              >
                {seat}
              </button>
            );
          })}
        </div>
      </div>
      <a
        className="block w-fit mx-auto transition duration-200 ease-in-out hover:bg-nav-txt-color hover:text-white border-nav-txt-color px-4 py-2 border-2 rounded-md text-center mb-8"
        href="/boarding"
      >
        Next
      </a>
    </Layout>
  );
};

export default seatselection;
