import React from "react";
import Cards from "./Cards";
import SingleCard from "./SingleCard";

const Hero = () => {
  return (
    <div className="mt-5">
      <h1 className="font-serif">V A R I E T I E S</h1>
      <p className="border border-b border-black w-10 mx-auto mb-5"></p>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        <SingleCard />
        <Cards />
      </div>
    </div>
  );
};

export default Hero;
