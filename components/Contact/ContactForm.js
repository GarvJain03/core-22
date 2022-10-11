import React from "react";

const ContactForm = () => {
  return (
    <form className="mx-auto rounded-lg bg-white shadow-md px-12 py-8 md:w-2/3 lg:w-1/2">
      <h1 className="title-font mb-4 text-2xl font-bold text-blue-bg sm:text-3xl">
        Contact Me
      </h1>
      <div className="-m-2 flex flex-wrap">
        <div className="w-full p-2 lg:w-1/2">
          <div className="relative">
            <label htmlFor="name" className="text-sm leading-7 text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              className="w-full rounded border bg-gray-bg px-3 py-1 text-base leading-8 text-primary-text outline-none transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="w-full p-2 lg:w-1/2">
          <div className="relative">
            <label htmlFor="email" className="text-sm leading-7 text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              className="w-full rounded border bg-gray-bg px-3 py-1 text-base leading-8 text-primary-text outline-none transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="w-full p-2">
          <div className="relative">
            <label
              htmlFor="message"
              className="text-sm leading-7 text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full rounded border bg-gray-bg px-3 py-1 text-base leading-8 text-primary-text outline-none transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="mx-2 my-4 flex w-full items-center justify-center space-x-2 rounded-lg px-8 py-3 text-white transition duration-200 ease-in-out hover:bg-opacity-90 bg-blue-bg active:outline-blue-bg"
        >
          <span className="text-md font-medium lg:text-lg">Submit</span>
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
  );
};

export default ContactForm;
