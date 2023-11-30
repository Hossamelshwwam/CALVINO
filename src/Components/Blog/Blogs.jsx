import React from "react";
import image1 from "../../images/image 1.png";
import image2 from "../../images/image 2.png";
import image3 from "../../images/image 3.png";
import profile1 from "../../images/Ellipse 7.png";
import profile2 from "../../images/Ellipse 7 (1).png";
import profile3 from "../../images/Ellipse 7 (2).png";

const Blogs = () => {
  return (
    <div className="grid xl:grid-cols-3 gap-20 md:grid-cols-2 container sm:py-40 py-20">
      <div className="md:text-left text-center" data-aos="fade-right">
        <div className="w-fit mx-auto">
          <img src={image3} className="mb-10" />
        </div>
        <p className="text-[24px] leading-[3rem] font-semibold mb-5">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
        <p className="text-gray-400 leading-9 mb-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the .
        </p>
        <div className="flex gap-3 items-center">
          <img src={profile3} className="rounded-[50%] h-14" />
          <div>
            <p className="font-semibold mb-1">Name here</p>
            <p className="text-sm text-gray-400">20.12.2020</p>
          </div>
        </div>
      </div>
      <div className="md:text-left text-center" data-aos="fade-down">
        <div className="w-fit mx-auto">
          <img src={image2} className="mb-10 " />
        </div>
        <p className="text-[24px] leading-[3rem] font-semibold mb-5">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
        <p className="text-gray-400 leading-9 mb-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the .
        </p>
        <div className="flex gap-3 items-center">
          <img src={profile2} className="rounded-[50%] h-14" />
          <div>
            <p className="font-semibold mb-1">Name here</p>
            <p className="text-sm text-gray-400">20.12.2020</p>
          </div>
        </div>
      </div>
      <div className="md:text-left text-center" data-aos="fade-left">
        <div className="w-fit mx-auto">
          <img src={image1} className="mb-10" />
        </div>
        <p className="text-[24px] leading-[3rem] font-semibold mb-5">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
        <p className="text-gray-400 leading-9  mb-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the .
        </p>
        <div className="flex gap-3 items-center">
          <img src={profile1} className="rounded-[50%] h-14" />
          <div>
            <p className="font-semibold mb-1">Name here</p>
            <p className="text-sm text-gray-400">20.12.2020</p>
          </div>
        </div>
      </div>
      <div className="md:text-left text-center" data-aos="fade-right">
        <div className="w-fit mx-auto">
          <img src={image3} className="mb-10" />
        </div>
        <p className="text-[24px] leading-[3rem] font-semibold mb-5">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
        <p className="text-gray-400 leading-9 mb-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the .
        </p>
        <div className="flex gap-3 items-center">
          <img src={profile3} className="rounded-[50%] h-14" />
          <div>
            <p className="font-semibold mb-1">Name here</p>
            <p className="text-sm text-gray-400">20.12.2020</p>
          </div>
        </div>
      </div>
      <div className="md:text-left text-center" data-aos="fade-down">
        <div className="w-fit mx-auto">
          <img src={image2} className="mb-10" />
        </div>
        <p className="text-[24px] leading-[3rem] font-semibold mb-5">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
        <p className="text-gray-400 leading-9 mb-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the .
        </p>
        <div className="flex gap-3 items-center">
          <img src={profile2} className="rounded-[50%] h-14" />
          <div>
            <p className="font-semibold mb-1">Name here</p>
            <p className="text-sm text-gray-400">20.12.2020</p>
          </div>
        </div>
      </div>
      <div className="md:text-left text-center" data-aos="fade-left">
        <div className="w-fit mx-auto">
          <img src={image1} className="mb-10" />
        </div>
        <p className="text-[24px] leading-[3rem] font-semibold mb-5">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
        <p className="text-gray-400 leading-9  mb-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the .
        </p>
        <div className="flex gap-3 items-center">
          <img src={profile1} className="rounded-[50%] h-14" />
          <div>
            <p className="font-semibold mb-1">Name here</p>
            <p className="text-sm text-gray-400">20.12.2020</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
