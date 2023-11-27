import React, { useEffect, useState } from "react";
import image1 from "../../images/Rectangle 12.png";
import image2 from "../../images/Rectangle 13.png";
import image3 from "../../images/Rectangle 14.png";
import image4 from "../../images/Rectangle 15.png";
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
    <div className="pt-40">
      <div className="mb-20">
        <Swiper
          slidesPerView={screen}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className="rounded-2xl max-w-[300px] mb-16 overflow-hidden"
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              }}
            >
              <img src={image1} alt="" />
              <div className="sm:p-5 p-3">
                <p className="sm:mb-5 my-2 text-gray-400">CEO</p>
                <p className="font-bold sm:text-base text-[10px] sm:my-0 my-2">
                  John kabras
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="rounded-2xl max-w-[300px] overflow-hidden"
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              }}
            >
              <img src={image2} alt="" />
              <div className="sm:p-5 p-3">
                <p className="sm:mb-5 my-2 text-gray-400">COO</p>
                <p className="font-bold sm:text-base text-[10px] sm:my-0 my-2">
                  Philips shene moris
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="rounded-2xl max-w-[300px] overflow-hidden"
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              }}
            >
              <img src={image3} alt="" />
              <div className="sm:p-5 p-3">
                <p className="sm:mb-5 my-2 text-gray-400">Tech lead</p>
                <p className="font-bold sm:text-base text-[10px] sm:my-0 my-2">
                  Equarn shamir mohomad
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="rounded-2xl max-w-[300px] overflow-hidden"
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              }}
            >
              <img src={image4} alt="" />
              <div className="sm:p-5 p-3">
                <p className="sm:mb-5 my-2 text-gray-400">Head of UX</p>
                <p className="font-bold sm:text-base text-[10px] sm:my-0 my-2">
                  Janka indrajith
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
