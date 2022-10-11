import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-blue-bg py-12">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row mb-4">
          <BsFacebook className="text-gray-bg text-xl mr-4" />
          <BsInstagram className="text-gray-bg text-xl mr-4" />
          <BsTwitter className="text-gray-bg text-xl mr-4" />
          <BsLinkedin className="text-gray-bg text-xl mr-4" />
        </div>
        <div className="uppercase text-xl font-medium text-gray-bg mb-4">
          TONY AIRWAYS
        </div>
        <div className="text-sm text-gray-bg">
          Copyright © {new Date().getFullYear()} Tony Airways, Inc.
        </div>
      </div>
    </div>
  );
};

export default Footer;
