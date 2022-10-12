import React from "react";
import Layout from "../components/Layout/Layout";

const boarding = () => {
  return (
    <Layout title="Bookings">
      <div className="container mx-auto px-5 py-6">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 text-4xl font-bold text-primary-text sm:text-5xl">
            Book a flight
          </h1>
          <p className="mx-auto text-xl leading-relaxed text-secondary-text lg:w-2/3 lg:px-24">
            Boarding pass
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default boarding;
