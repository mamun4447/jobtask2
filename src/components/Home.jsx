import React from "react";
import Chefs from "./Chefs";
import Describe from "./Describe";
import Food from "./Food";
import Hero from "./Hero";
import Nav from "./Nav";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Describe />
      <Chefs />
      <Food />
    </div>
  );
};

export default Home;
