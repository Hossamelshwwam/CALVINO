import React from "react";
import { Link } from "react-router-dom";
import Features from "../Home/Features";
import icon1 from "../../images/seo-tag 1.png";
import icon2 from "../../images/coding (1) 1.png";
import icon3 from "../../images/website-content 1.png";
import icon4 from "../../images/immersive 1.png";

const Info = ({ width }) => {
  return (
    <div className="grid grid-cols-5 gap-10 ">
      <div
        data-aos="fade-right"
        className={`${
          width <= 1200 ? "container" : "pl-40"
        } relative flex-1 py-5 xl:col-span-2 col-span-full`}
      >
        <p className="text-2xl mb-10 text-black font-semibold relative after:w-10 after:h-1 after:absolute after:-top-5 after:left-0 after:bg-[#4528a3]">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
        <p className="text-base text-gray-700 mb-10 leading-7">
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens of completed
          projects.
        </p>
        <Link
          to="/contact"
          type="button"
          className="py-3 px-8 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-[--main-color] bg-white text-[--main-color] hover:bg-[--main-color] hover:text-white duration-300 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Contact Us
        </Link>
      </div>
      <div
        data-aos="fade-left"
        className={`${
          width <= 1200 ? "container" : null
        } flex-1 p-10 xl:col-span-3 col-span-full`}
        style={{
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
        }}
      >
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 xl:gap-x-8 xl:gap-y-14 p-5">
          <div className="flex gap-4 md:gap-6">
            <div className="flex shrink-0 items-center justify-center rounded-lg bg-[#EFEAFF] text-white h-20 w-20 md:rounded-xl">
              <img src={icon3} alt="" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="mb-2 text-lg font-semibold md:text-lg">
                Web Application
              </h3>
              <p className="mb-2 text-gray-500 text-sm">
                Lorem Ipsum is simply
              </p>
            </div>
          </div>

          <div className="flex gap-4 md:gap-6 items-center">
            <div className="flex shrink-0 items-center justify-center rounded-lg bg-[#ECFFDA] text-white h-20 w-20 md:rounded-xl">
              <img src={icon1} alt="" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="mb-2 text-lg font-semibold md:text-lg">SEO</h3>
              <p className="mb-2 text-gray-500 text-sm">
                Lorem Ipsum is simply
              </p>
            </div>
          </div>

          <div className="flex gap-4 md:gap-6">
            <div className="flex shrink-0 items-center justify-center rounded-lg bg-[#d9e6ff] text-white  h-20 w-20 md:rounded-xl">
              <img src={icon4} alt="" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="mb-2 text-lg font-semibold md:text-lg">
                AR/VR Solutions
              </h3>
              <p className="mb-2 text-gray-500 text-sm">
                Lorem Ipsum is simply
              </p>
            </div>
          </div>

          <div className="flex gap-4 md:gap-6">
            <div className="flex shrink-0 items-center justify-center rounded-lg bg-[#FFE5DA] text-white h-20 w-20 md:rounded-xl">
              <img src={icon2} alt="" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="mb-2 text-lg font-semibold md:text-base">
                Mobile Applications
              </h3>
              <p className="mb-2 text-gray-500 text-sm">
                Lorem Ipsum is simply
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
