import Layout from "../components/Layout/Layout";
import React from "react";
import { GoLocation } from "react-icons/go";
import { AiTwotoneCalendar } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function Bookings({ data }) {
  // const router = useRouter();
  // const { status } = useSession({
  //   required: true,
  //   // onUnauthenticated() {
  //   //   router.push("/auth/login");
  //   // },
  // });

  // if (status === "loading") {
  //   return <>Loading...</>;
  // }

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
  const [seat, setSeat] = useState("");
  console.log(seat);
  const setSelectedSeat = (evt, selectedSeat) => {
    evt.preventDefault();
    setSeat(selectedSeat);
  };
  const generatePDF = async (event) => {
    event.preventDefault();
    const doc = new jsPDF();
    doc.autoTable({
      body: [
        ["From", event.target.from.value],
        ["To", event.target.to.value],
        ["Date", event.target.date.value],
        ["Travellers", event.target.travellers.value],
        ["Seat", seat],
      ],
    });
    doc.save("TicketBooking.pdf");
  };
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
      <form onSubmit={generatePDF}>
        <div className="flex flex-row w-5/6 lg:w-4/5 mb-8 mx-auto rounded-md shadow-md bg-white">
          <div className="flex items-center flex-wrap w-1/4 border-r-2 ml-8 my-2">
            <div className="flex items-center mb-2">
              <GoLocation className="mr-2 red" />
              <h3 className="font-bold">From</h3>
            </div>
            <input
              id="from"
              name="from"
              className="w-5/6 block cursor-pointer py-1 pl-2 outline-none"
              placeholder="Where from?"
              required
            />
          </div>
          <div className="flex flex-col w-1/4 border-r-2 ml-8 my-2">
            <div className="flex items-center flex-row mb-2">
              <GoLocation className="mr-2 red" />
              <h3 className="font-bold">To</h3>
            </div>
            <input
              name="to"
              className="w-5/6 block cursor-pointer py-1 pl-2 outline-none"
              placeholder="Where are you going?"
              required
            />
          </div>
          <div className="flex items-center flex-wrap w-1/4 border-r-2 ml-8 my-2">
            <div className="flex items-center mb-2">
              <AiTwotoneCalendar className="mr-2 red" />
              <h3 className="font-bold">Dates</h3>
            </div>
            <input
              name="date"
              type="date"
              className="w-5/6 block cursor-pointer py-1 pl-2 outline-none"
              placeholder="Add dates?"
              required
            />
          </div>
          <div className="flex items-center flex-wrap w-1/4 ml-8 my-2">
            <div className="flex items-center mb-2">
              <BsPeople className="mr-2 red" />
              <h3 className="font-bold">Travellers</h3>
            </div>
            <input
              name="travellers"
              type="number"
              className="w-5/6 block cursor-pointer py-1 pl-2 outline-none"
              placeholder="No. of travellers"
              required
            />
          </div>
        </div>
        <div className="mx-auto flex justify-center w-4/5 border-y-2 p-8 mb-4">
          <div>
            {aSeats.map((seat, i) => {
              return (
                <button
                  onClick={(evt) => setSelectedSeat(evt, seat)}
                  key={i}
                  className="transition duration-200 ease-in-out focus:bg-nav-txt-color focus:text-white hover:bg-nav-txt-color hover:text-white mr-2 mb-2 w-12 title-font text-primary-text border-primary-text border rounded-sm p-1"
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
                  onClick={(evt) => setSelectedSeat(evt, seat)}
                  key={i}
                  className="transition duration-200 ease-in-out focus:bg-nav-txt-color focus:text-white hover:bg-nav-txt-color hover:text-white mr-2 mb-2 w-12 title-font text-primary-text border-primary-text border rounded-sm p-1"
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
                  onClick={(evt) => setSelectedSeat(evt, seat)}
                  key={i}
                  className="transition duration-200 ease-in-out focus:bg-nav-txt-color focus:text-white hover:bg-nav-txt-color hover:text-white mr-2 mb-2 w-12 title-font text-primary-text border-primary-text border rounded-sm p-1"
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
                  onClick={(evt) => setSelectedSeat(evt, seat)}
                  key={i}
                  className="transition duration-200 ease-in-out focus:bg-nav-txt-color focus:text-white hover:bg-nav-txt-color hover:text-white mr-2 mb-2 w-12 title-font text-primary-text border-primary-text border rounded-sm p-1"
                >
                  {seat}
                </button>
              );
            })}
          </div>
        </div>
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
      </form>
    </Layout>
  );
}
