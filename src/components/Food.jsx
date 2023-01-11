import React from "react";
import { FaEnvira } from "react-icons/fa";
import footer_BG from "./assets/footer_BG.jpeg";

const Food = () => {
  return (
    <div className="container mx-auto relative overflow-hidden transition duration-200 transform rounded">
      <img className="object-cover" src={footer_BG} alt="" />
      <div className="absolute inset-0 px-6 py-4 mt-5">
        <h1 className="font-serif font-bold border-b">FOOD GUID</h1>
        <p className="border border-b border-black w-10 mx-auto"></p>
        <div className="flex flex-col mt-20">
          <div className="flex justify-between">
            <div className="flex flex-col justify-center items-center w-[30%]">
              <i className="text-white text-lg rounded-full bg-indigo-600 p-4 m-4">
                <FaEnvira />
              </i>
              <p className="font-bold">VEGETABLES</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center w-[30%]">
              <i className="text-white text-lg rounded-full bg-indigo-600 p-4 m-4">
                <FaEnvira />
              </i>
              <p className="font-bold">WHOLE GRAINS</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>

          {/* <==bellow==> */}
          <div className="flex justify-between mt-40">
            <div className="flex flex-col justify-center items-center w-[30%]">
              <i className="text-white text-lg rounded-full bg-indigo-600 p-4 m-4">
                <FaEnvira />
              </i>
              <p className="font-bold">FRUITS</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center w-[30%]">
              <i className="text-white text-lg rounded-full bg-indigo-600 p-4 m-4">
                <FaEnvira />
              </i>
              <p className="font-bold">HEALTHY PROTEIN</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
