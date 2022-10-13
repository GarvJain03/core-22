import React from "react";

const Services = () => {
  return (
    <div className="mx-auto flex flex-col items-center px-5 py-12 md:flex-row lg:px-24">
      <div className="flex flex-wrap -m-4">
        <div className="p-4 md:w-1/3">
          <div className="h-full shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h1 className="title-font text-xl font-medium text-primary-text mb-3">
                Personalization
              </h1>
              <p className="leading-relaxed mb-3">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="h-full shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h1 className="title-font text-xl font-medium text-primary-text mb-3">
                Shared Flights
              </h1>
              <p className="leading-relaxed mb-3">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="h-full shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h1 className="title-font text-xl font-medium text-primary-text mb-3">
                Digital Care
              </h1>
              <p className="leading-relaxed mb-3">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
