import React from "react";
import bannerImg from "../assets/okc and surrounding areas background picture.jpg";

export default function Banner() {
  return (
    <div>
      <div className="relative">
        <img
          className="flex justify-center pt-44 w-full"
          src={bannerImg}
          alt=""
        />
        <h2 className="absolute w-full py-2.5 bottom-0 top-52 inset-x-0 text-3xl text-center text-white lg:text-5xl lg:top-72 lg:bottom-0 lg:inset-x-0">
          OKLAHOMA CITY
        </h2>
        <h2 className="absolute w-full py-2.5 bottom-0 top-60 inset-x-0 text-3xl text-center text-white lg:text-5xl lg:top-[350px] lg:bottom-0 lg:inset-x-0">
          & SURROUNDING AREAS
        </h2>
      </div>
    </div>
  );
}
