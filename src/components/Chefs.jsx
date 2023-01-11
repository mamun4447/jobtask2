import React from "react";
import bg2 from "./assets/bg2.png";
import chef1 from "./assets/sheif1.png";
import chef2 from "./assets/sheif2.png";
import chef3 from "./assets/sheif3.png";

const Chefs = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="my-3 font-bold font-serif">T O P C H E F S</h1>
      <p className="border border-b border-black w-10 mx-auto mb-5"></p>
      <div className="relative">
        <img
          src={bg2}
          className=" relative w-full object-cover h-[40vh]"
          alt=""
        />
        <div className="absolute  rounded-t-md inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-50 opacity-300 h-full text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* <==Chef1==> */}
          <div className="text-white flex flex-col justify-center items-center rounded-md hover:bg-white hover:text-black cursor-pointer">
            <img className="w-16 h-16 rounded-full" src={chef1} alt="" />
            <h4 className="font-bold">Eileen Johnson</h4>
            <p>Executive Chef, USA</p>
          </div>

          {/* <==Chef2==> */}
          <div className="text-white flex flex-col justify-center items-center  rounded-md hover:bg-white hover:text-black cursor-pointer">
            <img className="w-16 h-16 rounded-full" src={chef2} alt="" />
            <h4 className="font-bold">Robert Downey Jr</h4>
            <p className="text-center px-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          {/* <==Chef3==> */}
          <div className="text-white flex flex-col justify-center items-center rounded-md hover:bg-white hover:text-black cursor-pointer">
            <img className="w-16 h-16 rounded-full" src={chef3} alt="" />
            <h4 className="font-bold">Amanda Dority</h4>
            <p>Sous Chef, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
