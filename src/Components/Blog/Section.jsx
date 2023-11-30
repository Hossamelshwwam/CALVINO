import React from "react";
import image from "../../images/Rectangle 19.png";
import profile from "../../images/775c94f3812e0d7f305fa2d643c62c62.png";

const Section = () => {
  return (
    <section className="py-14 container">
      <div className="sm:px-16">
        <div className="flex items-center gap-x-12 sm:px-4 md:px-0 flex-col lg:flex-row">
          <div className="flex-1" data-aos="fade-right">
            <img src={image} className="md:max-w-lg" alt="" />
          </div>
          <div
            className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl lg:text-left text-center"
            data-aos="fade-left"
          >
            <p className="text-gray-800 text-[24px] font-semibold leading-[3rem] mb-7">
              Lorem Ipsum is simply dummy text of the printing.
            </p>
            <p className="leading-9  text-gray-600 mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the .
            </p>
            <div className="flex justify-between items-center mt-5">
              <div className="flex gap-3 items-center">
                <img src={profile} className="rounded-full h-14" />
                <div>
                  <p className="font-semibold mb-1">Name here</p>
                  <p className="text-sm text-gray-400">20.12.2020</p>
                </div>
              </div>
              <a className="text-[--main-color] hover:text-gray-400 duration-300">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
