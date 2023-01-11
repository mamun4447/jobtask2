import React from "react";
import Chefs from "./Chefs";
import Describe from "./Describe";
import Food from "./Food";
import Footer from "./Footer";
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
      <Footer />
    </div>
  );
};

export default Home;
