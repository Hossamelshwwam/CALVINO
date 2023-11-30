import star from "../images/Star 1.png";
import Chart from "../images/Pai Chart 1.png";

const Email = () => {
  return (
    <section className="py-16 mx-auto bg-[--cover-color] relative">
      <div className="relative overflow-hidden mx-4 px-4 py-14 rounded-2xl  md:px-8 md:mx-8">
        <div className="relative z-10 max-w-3xl mx-auto sm:text-center">
          <img src={Chart} alt="" className="absolute -top-16 right-0" />
          <div className="space-y-3">
            <h3
              className="text-3xl text-black font-bold mb-20"
              data-aos="fade-down"
            >
              Lorem Ipsum is simply dummy text of the printing.
            </h3>
          </div>
          <div className="mt-6">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex md:flex-nowrap flex-wrap items-center justify-center gap-10 rounded-lg p-1"
              data-aos="zoom-in"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="text-gray-500 max-w-[800px] w-full outline-none border-none rounded-lg py-5 px-5 duration-300"
              />
              <button className="py-5 px-12 rounded-lg font-medium text-white bg-black hover:bg-black/75 active:bg-black/75 duration-150 outline-none shadow-md focus:shadow-none">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <img src={star} alt="" className="absolute -top-12 left-40" />
    </section>
  );
};

export default Email;
