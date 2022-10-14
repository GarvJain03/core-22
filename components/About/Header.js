import React from "react";

const Header = () => {
  return (
    <div className="lg:mx-24 mx-auto flex border-b-2 space-x-24 border-black pb-8 mb-8">
      <div className="w-full mt-4 mr-8">
        <h1 className="mt-8 text-4xl font-bold">About Tony Airways</h1>
        <p className="mt-8 text-lg text-justify">
          In addition to our redesigned brand aesthetic, we present you with our
          web-based application, which will facilitate one's journey and make it
          a 'fun' and luxurious experience for them. You can now check-in via
          our mobile app and enjoy in-flight shopping and other services at your
          leisure. We believe that in a world stacked with numbers, we are
          taking the aid of technology to deliver an unparalleled and
          unforgettable service to our commuters.
        </p>
      </div>
      <img className="w-1/3" src="/images/plane.png" />
    </div>
  );
};

export default Header;
