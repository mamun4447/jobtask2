import React from "react";
import { FaAngleRight, FaStar } from "react-icons/fa";
import singleCard from "./assets/home_Card.png";

const SingleCard = () => {
  return (
    <div className="relative overflow-hidden transition duration-200 transform rounded hover:-translate-y-2 hover:shadow-2xl">
      <img className="h-[81vh] w-full object-cover" src={singleCard} alt="" />
      <div className="absolute top-80 rounded-t-md inset-0 px-6 py-4 transition-opacity duration-200 bg-white hover:bg-black bg-opacity-50 hover:bg-opacity-75 opacity-300 h-[60%] hover:text-gray-100 text-left">
        <p className="font-bold mb-10 my-5 text-lg">
          Pizza is a savory dish of Italian origin
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry.
        </p>
        <hr className="text-black my-5" />
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
  );
};

export default SingleCard;
