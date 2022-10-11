import React from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useRouter } from "next/router";

const links = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Bookings",
    url: "/bookings",
  },
  {
    name: "Contact Us",
    url: "/contact",
  },
];

const Navbar = () => {
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setShowNavbar(!showNavbar);
  };

  const router = useRouter();

  return (
    <>
      <header className="sticky top-0 z-50 bg-gray-bg">
        <div className="flex p-5 px-8 lg:items-center lg:px-12">
          <Link href="/">
            <img
              className="w-64"
              alt="Tony Airways logo"
              src="/images/logo.png"
            />
          </Link>
          <button
            onClick={handleToggle}
            className="ml-auto flex items-center space-x-6 text-2xl text-nav-txt-color lg:hidden"
          >
            {showNavbar ? <ImCross /> : <GiHamburgerMenu />}
          </button>
          <div className="hidden space-x-12 lg:mx-auto lg:flex lg:items-center">
            {links.map((link) => (
              <Link key={link.name} href={link.url}>
                <p className="relative group cursor-pointer">
                  <a className="text-lg font-medium text-nav-txt-color">
                    {link.name}
                  </a>
                  <span className="absolute -bottom-1 left-1/2 w-0 h-1 duration-500 bg-nav-txt-color transition-all group-hover:w-1/2"></span>
                  <span className="absolute -bottom-1 right-1/2 w-0 h-1 duration-500 bg-nav-txt-color transition-all group-hover:w-1/2"></span>
                </p>
              </Link>
            ))}
          </div>

          <Link href="/auth/login">
            <a className="hidden border-2 rounded-full border-nav-txt-color px-4 py-3 text-lg font-medium text-nav-txt-color transition duration-200 ease-in-out hover:bg-nav-txt-color hover:text-white lg:block">
              Login
            </a>
          </Link>
        </div>
        {showNavbar && (
          <div className="flex flex-col space-y-1 bg-primary-dark py-5 px-4 transition duration-200 ease-in-out lg:hidden">
            {links.map((link) => (
              <Link href={link.url} key={link.name}>
                <a className="rounded-md p-4 text-xl font-medium text-nav-txt-color hover:bg-secondary-dark">
                  {link.name}
                </a>
              </Link>
            ))}
            <Link href="/check-in">
              <a className="rounded-md p-4 text-xl font-medium text-nav-txt-color hover:bg-secondary-dark">
                Check In
              </a>
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
