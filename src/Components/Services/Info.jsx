import React from "react";
import Image from "../../images/3D_Illustration-Product_Development-Skin-01_1-removebg-preview.png";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div className="md:pt-96 md:pb-40 py-20 container gap-10 flex">
      <div className="flex-1" data-aos="fade-right">
        <p className="text-3xl leading-[3.5rem] font-semibold mb-10">
          <span className="text-[--main-color]">Lorem Ipsum</span> is simply
          dummy text of the printing.
        </p>
        <p className="text-sm text-gray-400 mb-10 leading-7">
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens of completed
          projects. We build and develop mobile applications for several top
          platforms, including Android & IOS.
        </p>
        <p className="text-sm text-gray-400 leading-7 mb-10">
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens
        </p>
        <Link
          to="/contact"
          type="button"
          className="py-3 px-8 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-[--main-color] bg-white text-[--main-color] hover:bg-[--main-color] hover:text-white duration-300 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Contact Us
        </Link>
      </div>
      <div className="flex-1 md:block hidden" data-aos="zoom-out">
        <img src={Image} alt="" />
      </div>
    </div>
  );
};

export default Info;
