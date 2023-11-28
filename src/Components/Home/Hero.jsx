import heroImage from "../../images/Bill Sitting using laptop 1.png";
import Image1 from "../../images/Big Plant 1.png";
import Image2 from "../../images/Cuboid 1.png";
import Image3 from "../../images/Succlent angle 1.png";
import vector1 from "../../images/Vector 1.png";
import vector2 from "../../images/Vector 2.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-[--cover-color] relative">
      <section className="items-center screen flex container gap-6">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left z-10 relative">
          <h1 className="font-semibold text-3xl xl:text-[36px] xl:leading-[3.5rem] sm:leading-[3rem] mb-6 md:text-left text-center">
            Experienced
            <span className="text-[--main-color]"> mobile and web </span>
            applications and website builders measuring.
          </h1>
          <p className="text-[#5c5c5c] max-w-xl leading-9 sm:mx-auto lg:ml-0 font-normal md:text-left text-center">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS.
          </p>
          <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 flex-wrap flex lg:justify-start gap-4">
            <Link
              to="/contact"
              className="px-10 py-3 text-white duration-300 bg-[--main-color] rounded-lg hover:bg-[--hover-color] active:shadow-lg sm:mt-0 mt-3"
            >
              Contact us
            </Link>
            <button className="px-10 py-3 text-[--main-color] duration-300 border border-[--main-color] bg-white rounded-lg hover:border-[--hover-color] hover:text-[--hover-color] ">
              View more
            </button>
          </div>
        </div>
        <div className=" text-center flex-1 mt-7 lg:mt-0 lg:ml-3 relative z-10 lg:block hidden">
          <img
            alt="Bill sitting using"
            src={heroImage}
            className="w-full mx-auto sm:w-9/12 md: lg:w-10/12 -translate-y-24"
          />
          <img
            src={Image1}
            alt=""
            className="absolute bottom-[130px] -right-20"
          />
          <img src={Image2} alt="" className="absolute top-10 right-0" />
          <img src={Image3} alt="" className="absolute top-32 left-32" />
        </div>
      </section>
      <div className="shape top-0 left-0 md:block hidden"></div>
      <div className="shape top-0 right-5  md:block hidden"></div>
      <img
        src={vector1}
        alt=""
        className="absolute top-[150px] -right-[430px] sm:block hidden"
      />
      <img
        src={vector2}
        alt=""
        className="absolute top-[40%] right-[95%] sm:block hidden"
      />
    </div>
  );
};

export default Hero;
