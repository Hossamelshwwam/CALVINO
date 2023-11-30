import happy from "../../images/happy 1.png";
import photos from "../../images/website-mockup-png-10 1.png";
import phone from "../../images/17. Recent Activities 1.png";
import vr from "../../images/focus-parallax-hero_1920x1000_ar-vr_0917_layer1-guy_1-removebg-preview.png";

const Main = () => {
  return (
    <div className="py-32 container">
      <div className="text-center mb-20" data-aos="fade-down">
        <p className="text-3xl font-bold mb-10">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
        <p className="text-gray-500 lg:w-6/12 mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys
        </p>
      </div>
      <div className="flex gap-20 ">
        <div className="flex-1 mt-10">
          <div className="flex gap-10 mb-10" data-aos="zoom-in">
            <div className="w-16 h-16 bg-[#08D3BB] rounded-[50%] flex justify-center items-center">
              <img src={happy} alt="" />
            </div>
            <div className="flex-1">
              <p className="mb-2 text-lg">Lorem Ipsum is simply dummy text</p>
              <p className="text-sm text-gray-500">
                Lorem Ipsum is simply dummy text
              </p>
            </div>
          </div>
          <div data-aos="fade-right">
            <h1 className="text-2xl font-bold leading-[3rem] mb-12">
              <span className="text-[--main-color]">Lorem Ipsum</span> is simply
              dummy text of the printing.
            </h1>
            <p className="text-sm text-gray-500 leading-7">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              applications and website builders measuring dozens of completed
              projects. We build and develop mobile applications for several top
              platforms, including Android & IOS.
            </p>
          </div>
        </div>
        <div className="flex-1 lg:block hidden" data-aos="zoom-out">
          <img src={phone} alt="" />
        </div>
      </div>
      {/*  */}
      <div className="flex gap-20 mt-24">
        <div className="flex-1 lg:block hidden" data-aos="zoom-out">
          <img src={photos} alt="" />
        </div>
        <div className="flex-1 mt-10">
          <div className="flex gap-10 mb-10" data-aos="zoom-in">
            <div className="w-16 h-16 bg-[#1090CB] rounded-[50%] flex justify-center items-center">
              <img src={happy} alt="" />
            </div>
            <div className="flex-1">
              <p className="mb-2 text-lg">Lorem Ipsum is simply dummy text</p>
              <p className="text-sm text-gray-500">
                Lorem Ipsum is simply dummy text
              </p>
            </div>
          </div>
          <div data-aos="fade-left">
            <h1 className="text-2xl font-bold leading-[3rem] mb-12">
              <span className="text-[--main-color]">Lorem Ipsum</span> is simply
              dummy text of the printing.
            </h1>
            <p className="text-sm text-gray-500 leading-7">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              applications and website builders measuring dozens of completed
              projects. We build and develop mobile applications for several top
              platforms, including Android & IOS.
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex gap-20 mt-24">
        <div className="flex-1 mt-10">
          <div className="flex gap-10 mb-10" data-aos="zoom-in">
            <div className="w-16 h-16 bg-[#9208D3] rounded-full flex justify-center items-center">
              <img src={happy} alt="" />
            </div>
            <div className="flex-1">
              <p className="mb-2 text-lg">Lorem Ipsum is simply dummy text</p>
              <p className="text-sm text-gray-500">
                Lorem Ipsum is simply dummy text
              </p>
            </div>
          </div>
          <div data-aos="fade-right">
            <h1 className="text-2xl font-bold leading-[3rem] mb-12">
              <span className="text-[--main-color]">Lorem Ipsum</span> is simply
              dummy text of the printing.
            </h1>
            <p className="text-sm text-gray-500 leading-7">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              applications and website builders measuring dozens of completed
              projects. We build and develop mobile applications for several top
              platforms, including Android & IOS.
            </p>
          </div>
        </div>
        <div className="flex-1 lg:block hidden" data-aos="zoom-out">
          <img src={vr} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
