import React from "react";
import Image from "../assets/eheader.png";

const Header = () => {
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat w-full h-full"
        style={{
          height: "500px",
          backgroundImage: `url(${Image})`,
        }}
      >
        <h3 className="w-full text-white text-5xl font-bold flex justify-center absolute top-96 left-0 right-0 lg:top-56">
          Welcome to
        </h3>
        <h2 className="w-full text-white text-4xl font-bold flex justify-center absolute top-80 left-0 right-0 sm:text-orange-950 mt-52 lg:text-white lg:top-36">
          Elizabeth Redman Photography
        </h2>
      </div>
    </div>
  );
};

export default Header;
