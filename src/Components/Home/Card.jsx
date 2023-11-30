import ring from "../../images/Bell Angle 1.png";

const Card = () => {
  return (
    <div
      className="flex flex-wrap lg:flex-nowrap container gap-20 justify-center py-20"
      data-aos="zoom-out"
    >
      <div className="card bg-gray-300 p-10 py-16 rounded-xl text-center md:max-w-full max-w-[500px]">
        <p className="text-2xl  mb-10">Lorem Ipsum is simply dummy text.</p>
        <p className="text-sm text-gray-500 mb-10">
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens of completed
          projects. We build and develop mobile applications for several top
          platforms, including Android & IOS.{" "}
        </p>
        <button
          type="button"
          className=" duration-300 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[--main-color] text-white hover:bg-[--hover-color] disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          View More
        </button>
      </div>
      <div className="card bg-[--main-color] px-10 py-16 rounded-xl text-center relative max-w-[500px] md:max-w-full">
        <p className="text-2xl  mb-10 text-white">
          Lorem Ipsum is simply dummy text.
        </p>
        <p className="text-sm text-white mb-10">
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens of completed
          projects. We build and develop mobile applications for several top
          platforms, including Android & IOS.{" "}
        </p>
        <button
          type="button"
          className=" duration-300 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-white text-[--main-color] hover:bg-slate-200 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          View More
        </button>
        <div className="absolute -top-20 right-0">
          <img src={ring} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
