import React from "react";
import logo from "./assets/Vector.png";

const Nav = () => {
  return (
    <div className="h-10  shadow-md flex gap-1 justify-center items-center text-sm container mx-auto">
      <img className="w-4" src={logo} alt="" />{" "}
      <p className="font-mono ">Culinary kitchen</p>
    </div>
  );
};

export default Nav;
