import brand1 from "../../images/beneoshop.png";
import brand2 from "../../images/caspio.png";
import brand3 from "../../images/HyperGrid.png";
import brand4 from "../../images/leotrippi.png";

const Brands = () => {
  return (
    <section className="text-gray-600 body-font py-20 container">
      <p className="text-2xl text-center font-semibold text-black">
        You will be in good Company
      </p>
      <div className="container px-5 pt-10 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 sm:w-1/4 w-1/2">
            <img src={brand1} alt="" />
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <img src={brand2} alt="" />
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <img src={brand3} alt="" />
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <img src={brand4} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
