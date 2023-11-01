import React from "react";
import image1 from "../assets/bride.png";
import image2 from "../assets/red-haired-toddler.png";
import image3 from "../assets/group of graduates1.png";

export default function Portfolio() {
  return (
    <div>
      <div className="lg:pt-36">
        <h3 className="pt-10 text-5xl text-center">MY</h3>
        <h2 className="text-7xl text-center">PORTFOLIO</h2>
      </div>
      <div class="flex justify-center pt-10 lg:pt-20">
        <img
          className="w-[215px] lg:w-[400px] h-full"
          style={{ padding: "10px" }}
          src={image1}
          alt="bride"
        />
        <img
          className="w-[215px] lg:w-[400px] h-full"
          style={{ padding: "10px" }}
          src={image2}
          alt="red head toddler"
        />
        <img
          className="w-[215px] lg:w-[400px] h-full"
          style={{ padding: "10px" }}
          src={image3}
          alt="group of graduates"
        />
      </div>
    </div>
  );
}
