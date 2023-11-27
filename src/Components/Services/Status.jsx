import React from "react";
import bell from "../../images/Bell Angle 1.png";
import Succlent from "../../images/Succlent angle 1.png";

const Status = () => {
  return (
    <section className="text-white body-font bg-[--main-color]">
      <div className="container px-5 py-32 mx-auto relative">
        <div className="flex flex-wrap text-center gap-y-10">
          <div className="sm:w-1/4 w-1/2">
            <h2 className="title-font font-semibold md:text-6xl text-4xl">6</h2>
            <p className="leading-relaxed">Happy Clients</p>
          </div>
          <div className="sm:w-1/4 w-1/2">
            <h2 className="title-font font-semibold md:text-6xl text-4xl">
              11
            </h2>
            <p className="leading-relaxed">Completed Projects</p>
          </div>
          <div className="sm:w-1/4 w-1/2">
            <h2 className="title-font font-semibold md:text-6xl text-4xl">
              7M
            </h2>
            <p className="leading-relaxed">Transactions</p>
          </div>
          <div className="sm:w-1/4 w-1/2">
            <h2 className="title-font font-semibold md:text-6xl text-4xl">
              6000+
            </h2>
            <p className="leading-relaxed">Customers</p>
          </div>
        </div>
        <img src={bell} alt="" className="absolute -top-20 right-0" />
        <img
          src={Succlent}
          alt=""
          className="absolute -bottom-10 left-32 h-20"
        />
      </div>
    </section>
  );
};

export default Status;
