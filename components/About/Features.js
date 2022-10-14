import React from "react";

const Features = () => {
  return (
    <div className="mx-auto items-center px-5 pt-12 pb-8 md:flex-row lg:px-24">
      <h1 className="mt-8 text-4xl font-bold text-primary-text">
        Why Tony Airways?
      </h1>
      <div className="mx-auto flex flex-col flex-wrap items-center px-5 py-12 md:flex-row lg:px-24">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full shadow-md rounded-lg overflow-hidden">
              <div className="p-6 flex flex-col text-center justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4em"
                  height="4em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  class="IconItem_icon__2BpcG"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <line
                    x1="72"
                    y1="216"
                    x2="216"
                    y2="216"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="8"
                  ></line>
                  <path
                    d="M26.75225,80H44l20,24H96L83.50994,66.52982A8,8,0,0,1,91.09941,56H108l44,48h56a32,32,0,0,1,32,32v24H63.809a32,32,0,0,1-30.65044-22.80487L19.08963,90.29878A8,8,0,0,1,26.75225,80Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="8"
                  ></path>
                </svg>
                <h1 className="title-font text-xl font-medium text-primary-text mb-3">
                  Our Services
                </h1>
                <p className="leading-relaxed mb-3">
                  Get our very exclusive Tikka add-ons and avail in-flight
                  services via our mobile app to make your journey hassle-free.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full shadow-md rounded-lg overflow-hidden">
              <div className="p-6 flex flex-col text-center justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4em"
                  height="4em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  class="IconItem_icon__2BpcG"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <circle
                    cx="127.99414"
                    cy="140"
                    r="20"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="8"
                  ></circle>
                  <line
                    x1="127.99414"
                    y1="160"
                    x2="127.99414"
                    y2="184"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="8"
                  ></line>
                  <rect
                    x="39.99414"
                    y="88"
                    width="176"
                    height="128"
                    rx="8"
                    stroke-width="8"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                  ></rect>
                  <path
                    d="M91.99414,88V52a36,36,0,1,1,72,0"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="8"
                  ></path>
                </svg>
                <h1 className="title-font text-xl font-medium text-primary-text mb-3">
                  Web check-in
                </h1>
                <p className="leading-relaxed mb-3">
                  Check-in is available for all flights through mobile app and
                  closes 1 hour prior to departure.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full shadow-md rounded-lg overflow-hidden">
              <div className="p-6 flex flex-col text-center justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4em"
                  height="4em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  class="IconItem_icon__2BpcG"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <line
                    x1="128"
                    y1="128"
                    x2="224"
                    y2="32"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="8"
                  ></line>
                  <path
                    d="M195.88225,60.11775a95.90539,95.90539,0,1,0,18.76606,26.49271"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="8"
                  ></path>
                  <path
                    d="M161.94113,94.05887a47.99886,47.99886,0,1,0,13.98107,31.20092"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="8"
                  ></path>
                </svg>
                <h1 className="title-font text-xl font-medium text-primary-text mb-3">
                  Personalization
                </h1>
                <p className="leading-relaxed mb-3">
                  Enjoy a carefully planned travel experience with Flexible
                  Travel and Free Change rights if your plans change!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
