import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.onresize = function () {
      setWidth(window.innerWidth);
      console.log(width);
      width >= 992 ? setHidden(false) : null;
    };
  }, [width]);

  return (
    <div className="relative">
      <div className="border-b py-5 bg-white relative z-30">
        <div className="flex justify-between items-center container">
          <div>
            <a className="text-4xl font-bold">Brand</a>
          </div>
          <div className="lg:hidden block">
            <button
              className="font-bold p-2 border rounded-lg"
              onClick={() => {
                setHidden(!hidden);
              }}
            >
              Open
            </button>
          </div>
          <div className="gap-14 flex-row items-center justify-end mt-0 lg:relative absolute lg:flex hidden">
            <Link
              to="/"
              className={`${
                location.pathname === "/" ? "active" : null
              } duration-300 font-semibold text-xl text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${
                location.pathname === "/about" ? "active" : null
              } duration-300 font-semibold text-xl text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`${
                location.pathname == "/services" ? "active" : null
              } duration-300 font-semibold text-xl text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
            >
              Services
            </Link>
            <Link
              to="/blog"
              className={`${
                location.pathname == "/blog" ? "active" : null
              } duration-300 font-semibold text-xl text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
            >
              Blog
            </Link>

            <Link
              type="button"
              to="/contact"
              className=" duration-300 py-3 px-4 inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border border-transparent bg-[--main-color] text-white hover:bg-[--hover-color] disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:text-gray-800"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col gap-5 p-5 z-20 bg-white absolute w-full duration-300 ${
          hidden ? "top-20" : "-top-80"
        }`}
      >
        <Link
          to="/"
          className={`${
            location.pathname === "/" ? "active" : null
          } duration-300 font-semibold text-xl text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`${
            location.pathname === "/about" ? "active" : null
          } duration-300 font-semibold text-xl text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
        >
          About
        </Link>
        <Link
          to="/services"
          className={`${
            location.pathname == "/services" ? "active" : null
          } duration-300 font-semibold text-xl text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
        >
          Services
        </Link>
        <Link
          to="/blog"
          className={`${
            location.pathname == "/blog" ? "active" : null
          } duration-300 font-semibold text-xl text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
        >
          Blog
        </Link>

        <Link
          type="button"
          to="/contact"
          className=" duration-300 py-3 px-4 inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border border-transparent bg-[--main-color] text-white hover:bg-[--hover-color] disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:text-gray-800"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
