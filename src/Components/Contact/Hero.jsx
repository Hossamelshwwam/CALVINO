import map from "../../images/unnamed (1) 1.png";
import face from "../../images/Beverly 1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className={`screen container py-10`}>
      <div className="lg:flex justify-between items-center mb-20">
        <div className="flex-1 text-center lg:text-left">
          <div
            className="w-14 h-14 bg-red-100 rounded-full flex justify-center items-center mb-7 p-2 lg:mx-0 mx-auto"
            data-aos="flip-down"
          >
            <img src={face} alt="" />
          </div>
          <h1 className="text-[45px] font-semibold mb-7" data-aos="fade-right">
            Let&apos;s Collaborate
          </h1>
          <p
            className="text-gray-400 text-[20px] leading-10 lg:w-[437px]"
            data-aos="zoom-out"
          >
            Lorem Ipsum is simply dummy text of the printing .
          </p>
        </div>
        <div className="flex-1 relative" data-aos="fade-left">
          <div className="relative lg:block hidden">
            <img src={map} alt="" />
            <span className="point w-10 opacity-70 h-10 bg-red-300 absolute rounded-full left-[55%] -translate-x-1/2 bottom-7"></span>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 gap-y-14 justify-center">
        <div
          className="lg:border-r lg:block flex flex-col items-center border-gray-300"
          data-aos="flip-down"
        >
          <p className="font-medium mb-5">Follow us</p>
          <div className="flex gap-5">
            <div
              className="w-10 h-10 shadow-lg rounded-full flex items-center justify-center"
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div
              className="w-10 h-10 shadow-lg rounded-full flex items-center justify-center"
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div
              className="w-10 h-10 shadow-lg rounded-full flex items-center justify-center"
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div
              className="w-10 h-10 shadow-lg rounded-full flex items-center justify-center"
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
          </div>
        </div>
        <div
          className="flex items-center justify-center lg:border-r border-gray-300"
          data-aos="flip-down"
        >
          <p className="text-xl">
            <FontAwesomeIcon icon={faPhoneVolume} className="mr-5" />
            +94 4444 5555 6
          </p>
        </div>
        <div className="flex items-center" data-aos="flip-down">
          <p className="sm:text-xl text-center">
            <FontAwesomeIcon icon={faLocationDot} className="mr-5" />
            but also the leap into electronic typesetting
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
