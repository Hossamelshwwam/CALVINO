import React, { useEffect, useState } from "react";
import image1 from "../../images/Rectangle 16.png";
import image2 from "../../images/Rectangle 17 (1).png";
import image3 from "../../images/Rectangle 18 (1).png";
import image4 from "../../images/Rectangle 19 (1).png";
import vector1 from "../../images/Vector 1.png";
import vector2 from "../../images/Vector 2.png";
const Hero = ({ width }) => {
  return (
    <div
      className={` ${
        width <= 1200 ? "container" : null
      } xl:px-5 md:py-32 py-10 relative`}
    >
      <img
        src={vector1}
        alt=""
        className="absolute bottom-0 right-[97%] sm:block hidden"
      />
      <img
        src={vector2}
        alt=""
        className="absolute sm:block hidden rotate-[247deg] -top-[350px] left-[90%]"
      />
      <div className="flex flex-1 xl:flex-row flex-col-reverse gap-10 xl:mb-16">
        <div className="flex items-end gap-10 xl:flex-row flex-col-reverse">
          <img src={image1} alt="" className="max-h-[281px] xl:block hidden" />
          <img src={image2} alt="" className="xl:block hidden" />
        </div>
        <div className="flex-1">
          <p className="capitalize text-[--main-color] mb-7">about us</p>
          <p className="sm:text-[40px] sm:leading-[60px] text-2xl font-semibold sm:w-11/12 mb-7">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
          <p className="text-sm text-gray-400 sm:w-1/2 leading-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys
          </p>
        </div>
      </div>
      <div className="flex xl:flex-nowrap flex-wrap justify-evenly gap-5">
        <img src={image3} alt="" className="xl:block hidden" />
        <img src={image4} alt="" className="xl:block hidden" />
      </div>
    </div>
  );
};

export default Hero;
