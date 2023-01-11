import React from "react";
import card1 from "./assets/card1.png";
import card2 from "./assets/card22.png";
import card3 from "./assets/card3.png";
import card4 from "./assets/card4.png";
import { FaAngleRight, FaStar } from "react-icons/fa";

const Cards = () => {
  return (
    <div className="grid grid-cols-2 gap-2 h-[80vh]">
      {/* <===< Crispy French Fries >===> */}
      <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
        <img className="h-[40vh] w-full object-cover" src={card1} alt="" />
        <div className="absolute top-32 rounded-t-md inset-0 px-6 py-4 transition-opacity duration-200 bg-white hover:bg-black bg-opacity-50 hover:bg-opacity-75 opacity-300 h-[60%] hover:text-gray-100 text-left">
          <p className="font-bold">Crispy French Fries</p>
          <p>Lorem Ipsum is simply dummy text of the printing.</p>
          <hr className="text-black mt-2" />
          <div className="flex justify-between items-center">
            <button className="my-4 flex items-center gap-1">
              Explore <FaAngleRight />
            </button>
            <p className="flex gap-1 items-center">
              <FaStar /> Rate
            </p>
          </div>
        </div>
      </div>

      {/* <===< Paneer Tikka >===> */}
      <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
        <img className="h-[40vh] w-full object-cover " src={card2} alt="" />
        <div className="absolute top-32 rounded-t-md inset-0 px-6 py-4 transition-opacity duration-200 bg-white hover:bg-black bg-opacity-50 hover:bg-opacity-75 opacity-300 h-[60%] hover:text-gray-100 text-left">
          <p className="font-bold">Paneer Tikka</p>
          <p>Lorem Ipsum is simply dummy text of the printing.</p>
          <hr className="text-black mt-2" />
          <div className="flex justify-between items-center">
            <button className="my-4 flex items-center gap-1">
              Explore <FaAngleRight />
            </button>
            <p className="flex gap-1 items-center">
              <FaStar /> Rate
            </p>
          </div>
        </div>
      </div>

      {/* <===< Macaroon >===> */}
      <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
        <img className="h-[40vh] w-full object-cover" src={card3} alt="" />
        <div className="absolute top-32 rounded-t-md inset-0 px-6 py-4 transition-opacity duration-200 bg-white hover:bg-black bg-opacity-50 hover:bg-opacity-75 opacity-300 h-[60%] hover:text-gray-100 text-left">
          <p className="font-bold">Macaroon</p>
          <p>Lorem Ipsum is simply dummy text of the printing.</p>
          <hr className="text-black mt-2" />
          <div className="flex justify-between items-center">
            <button className="my-4 flex items-center gap-1">
              Explore <FaAngleRight />
            </button>
            <p className="flex gap-1 items-center">
              <FaStar /> Rate
            </p>
          </div>
        </div>
      </div>

      {/* <=== Doughnut ===> */}
      <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
        <img className="h-[40vh] w-full object-cover" src={card4} alt="" />
        <div className="absolute top-32 rounded-t-md inset-0 px-6 py-4 transition-opacity duration-200 bg-white hover:bg-black bg-opacity-50 hover:bg-opacity-75 opacity-300 h-[60%] hover:text-gray-100 text-left">
          <p className="font-bold">Doughnut</p>
          <p>Lorem Ipsum is simply dummy text of the printing.</p>
          <hr className="text-black mt-2" />
          <div className="flex justify-between items-center">
            <button className="my-4 flex items-center gap-1">
              Explore <FaAngleRight />
            </button>
            <p className="flex gap-1 items-center">
              <FaStar /> Rate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
