import React from "react";
import speaker from "../../images/Speaker Angle 1.png";
import icon1 from "../../images/seo-tag 1.png";
import icon2 from "../../images/coding (1) 1.png";
import icon3 from "../../images/website-content 1.png";
import icon4 from "../../images/immersive 1.png";

const Hero = ({ width }) => {
  return (
    <div
      className={`${
        width >= 776 ? "screen" : null
      } bg-[--cover-color] relative`}
    >
      <div className="container py-20 text-center">
        <div
          className="w-36 h-36 flex justify-center items-center mx-auto rounded-[50%] bg-white mb-10"
          data-aos="flip-down"
        >
          <img src={speaker} alt="" />
        </div>
        <div className="mb-16" data-aos="zoom-out">
          <h1 className="capitalize text-4xl font-semibold mb-7">
            our <span className="text-[--main-color]">services</span>
          </h1>
          <p className="text-lg text-gray-400 sm:w-[440px] mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys
          </p>
        </div>
        <div className="shadow bg-white sm:p-10 p-5" data-aos="zoom-in">
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 xl:gap-4 relative md:after:block after:hidden after:absolute after:w-[80%] after:h-[0.5px] after:bg-gray-200 after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 md:before:block before:hidden before:absolute before:h-[80%] before:w-[0.5px] before:bg-gray-200 before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2">
            <div className="flex gap-4 md:gap-6 sm:p-10 p-2">
              <div className="flex shrink-0 items-center justify-center rounded-lg bg-[#EFEAFF] text-white shadow-lg h-20 w-20 md:rounded-xl">
                <img src={icon3} alt="" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="mb-2 text-lg font-semibold md:text-lg">
                  Web Application
                </h3>
                <p className="mb-2 text-gray-500">Lorem Ipsum is simply</p>
              </div>
            </div>

            <div className="flex gap-4 md:gap-6 items-center sm:p-10 p-2">
              <div className="flex shrink-0 items-center justify-center rounded-lg bg-[#ECFFDA] text-white shadow-lg h-20 w-20 md:rounded-xl">
                <img src={icon1} alt="" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="mb-2 text-lg font-semibold md:text-lg">SEO</h3>
                <p className="mb-2 text-gray-500">Lorem Ipsum is simply</p>
              </div>
            </div>

            <div className="flex gap-4 md:gap-6 sm:p-10 p-2">
              <div className="flex shrink-0 items-center justify-center rounded-lg bg-[#d9e6ff] text-white shadow-lg h-20 w-20 md:rounded-xl">
                <img src={icon4} alt="" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="mb-2 text-lg font-semibold md:text-lg">
                  AR/VR Solutions
                </h3>
                <p className="mb-2 text-gray-500">Lorem Ipsum is simply</p>
              </div>
            </div>

            <div className="flex gap-4 md:gap-6 sm:p-10 p-2">
              <div className="flex shrink-0 items-center justify-center rounded-lg bg-[#FFE5DA] text-white shadow-lg h-20 w-20 md:rounded-xl">
                <img src={icon2} alt="" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="mb-2 text-lg font-semibold md:text-base">
                  Mobile Applications
                </h3>
                <p className="mb-2 text-gray-500">Lorem Ipsum is simply</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
