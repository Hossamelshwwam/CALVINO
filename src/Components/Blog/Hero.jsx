import React from "react";

const Hero = ({ width }) => {
  return (
    <div
      className={`${
        width <= 992 ? "min-h-screen" : "screen"
      } py-10 text-center`}
    >
      <p className="text-5xl font-bold mb-10" data-aos="flip-left">
        Latest news
      </p>
      <p
        className="text-5xl font-bold text-[--main-color] mb-14"
        data-aos="flip-down"
      >
        Updates
      </p>
      <p
        className="max-w-[432px] mx-auto text-xl text-gray-400 mb-14"
        data-aos="zoom-in"
      >
        Lorem Ipsum is simply dummy text of the printing .
      </p>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="max-w-md px-4 mx-auto mb-20"
        data-aos="zoom-right"
      >
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="w-full py-3 pl-12 pr-4 text-gray-700 border-none rounded-md outline-none bg-gray-200 focus:bg-white duration-300 focus:border-[--main-color]"
          />
        </div>
      </form>
      <div className="flex flex-wrap justify-center sm:gap-5 gap-y-5 gap-x-2 container">
        <p
          className="rounded-full sm:px-8 px-5 py-4 bg-[#E7EFF3] text-[--main-color] cursor-default"
          data-aos="zoom-in"
        >
          Lorem ipsum
        </p>
        <p
          className="rounded-full sm:px-8 px-5 py-4 bg-[#E7EFF3] text-[--main-color] cursor-default"
          data-aos="zoom-in"
        >
          Lorem ipsum
        </p>
        <p
          className="rounded-full sm:px-8 px-5 py-4 bg-[#E7EFF3] text-[--main-color] cursor-default"
          data-aos="zoom-in"
        >
          Lorem ipsum
        </p>
        <p
          className="rounded-full sm:px-8 px-5 py-4 bg-[#E7EFF3] text-[--main-color] cursor-default"
          data-aos="zoom-in"
        >
          Lorem ipsum
        </p>
        <p
          className="rounded-full sm:px-8 px-5 py-4 bg-[--main-color] text-[#E7EFF3] cursor-default"
          data-aos="zoom-in"
        >
          Lorem ipsum
        </p>
      </div>
    </div>
  );
};

export default Hero;
