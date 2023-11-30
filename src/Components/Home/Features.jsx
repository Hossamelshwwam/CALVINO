import icon1 from "../../images/seo-tag 1.png";
import icon2 from "../../images/coding (1) 1.png";
import icon3 from "../../images/website-content 1.png";
import icon4 from "../../images/immersive 1.png";

const Features = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 border-b">
      <div className="container ">
        <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-4 xl:gap-4">
          <div className="flex gap-4 md:gap-6" data-aos="flip-left">
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

          <div
            className="flex gap-4 md:gap-6 items-center"
            data-aos="flip-right"
          >
            <div className="flex shrink-0 items-center justify-center rounded-lg bg-[#ECFFDA] text-white shadow-lg h-20 w-20 md:rounded-xl">
              <img src={icon1} alt="" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="mb-2 text-lg font-semibold md:text-lg">SEO</h3>
              <p className="mb-2 text-gray-500">Lorem Ipsum is simply</p>
            </div>
          </div>

          <div className="flex gap-4 md:gap-6" data-aos="flip-left">
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

          <div className="flex gap-4 md:gap-6" data-aos="flip-right">
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
  );
};

export default Features;
