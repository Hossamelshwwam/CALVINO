import React, { useEffect, useState } from "react";
import image1 from "../../images/Rectangle 20.png";
import image2 from "../../images/Rectangle 21.png";
import image3 from "../../images/Rectangle 22.png";
import image4 from "../../images/Rectangle 22 (1).png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import "swiper/css";

const Carousel = ({ width }) => {
  const [screen, setScreen] = useState(4);

  useEffect(() => {
    width <= 556
      ? setScreen(1.3)
      : width <= 650
      ? setScreen(1.8)
      : width <= 850
      ? setScreen(2.5)
      : width <= 1200
      ? setScreen(3)
      : setScreen(4);
  }, [width]);

  return (
    <div className="py-32">
      <h1 className="text-3xl font-semibold mb-20 container">
        Our latest Projects
      </h1>
      <Swiper
        slidesPerView={screen}
        spaceBetween={20}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="mb-20">
          <div className="max-w-[333px] p-3">
            <img src={image1} className="mb-14" />
            <p className="font-semibold text-xl mb-10">
              Lorem Ipsum is simply dummy text of the printing.
            </p>
            <p className="text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-[333px] p-3">
            <img src={image2} className="mb-14" />
            <p className="font-semibold text-xl mb-10">
              Lorem Ipsum is simply dummy text of the printing.
            </p>
            <p className="text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-[333px] p-3">
            <img src={image3} className="mb-14" />
            <p className="font-semibold text-xl mb-10">
              Lorem Ipsum is simply dummy text of the printing.
            </p>
            <p className="text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-[333px] p-3">
            <img src={image4} className="mb-14" />
            <p className="font-semibold text-xl mb-10">
              Lorem Ipsum is simply dummy text of the printing.
            </p>
            <p className="text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
