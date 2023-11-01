import React from "react";
import missionImg from "../assets/group of graduates1.png";

/*set the parent div to relative
set the text box to absolute with bottom-0 and top-56 */

/* Need to account the spacing for when the text box is moved up overlapping the image. */

export default function Mission() {
  return (
    <div className="flex items-center justify-center m-auto border-box">
      <div className="justify-center pt-60 ">
        <img
          className="w-[400px] lg:w-[600px] lg:ml-[500px]"
          style={{ zIndex: "-1" }}
          src={missionImg}
          alt="group of graduates"
        />
      </div>
      <div className="absolute rounded-md shadow-2xl bg-orange-300 mx-10 w-auto lg:ml-1 lg:mx-[600px] lg:py-1 lg:mb-[300px] xl:">
        <h2 className="p-3 text-2xl font-semibold text-center lg:text-3xl lg:font-lighter">
          I CAPTURE MOMENTS OF HAPPINESS, AND LOVE IT.
        </h2>
        <p className="p-2 text-xl text-center">
          I am absolutely enamored with the art of creation.
        </p>
        <p className="p-4 px-10 text-lg text-center">
          There is an enchantment in capturing those heartfelt moments and
          transforming them into timeless treasures.
        </p>
        <p className="p-4 px-10 text-lg text-center">
          My approach to this profession is rooted in my profound belief that
          life itself is a beautiful masterpiece, and every moment deserves to
          be etched in memory. It's not about me; it's about capturing the
          bigger picture.
        </p>
        <p className="p-4 px-10 text-lg text-center">
          Join me on this extraordinary journey of preserving the essence of
          life's most precious moments.
        </p>
        <p className="p-2 px-0 text-lg text-center">INQUIRE</p>
      </div>
    </div>
  );
}

{
  /* <h2 className="absolute pt-10 text-6xl font-semibold rotate-90">
        MY WHY?
      </h2> */
}
