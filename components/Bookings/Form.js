import React from "react";
import { GoLocation } from "react-icons/go";
import { AiTwotoneCalendar } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";

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

const Form = () => {
  return (
    <div>
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
        <div className="flex flex-col w-1/4 border-r-2 ml-8 my-2">
          <div className="flex items-center flex-row mb-2">
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
    </div>
  );
};

export default Form;
