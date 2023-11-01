import React from "react";
import yellowD from "../assets/graduate photo.png";
import horse from "../assets/horse.png";

/* Need to move box of text to overlap the images
    Need to change the text box color
    Need to make the More about me a link
 */

export default function About() {
  return (
    <div>
      <div className="box-border flex justify-center lg:pt-36">
        <img
          style={{ zIndex: "-1" }}
          className="rounded-lg sm: w-80 lg:w-1/3"
          src={yellowD}
          alt="Yellow Dress"
        />
        <img
          style={{ zIndex: "-1" }}
          className="rounded-md sm: w-80 lg:w-1/3"
          src={horse}
          alt="Girl with horse"
        />
      </div>
      <div
        style={{ marginTop: "-5rem" }}
        className="h-full mt-5 mb-20 bg-orange-300 rounded-md shadow-2xl sm:mx-20 w-100 md: lg:mx-80 lg:mb-44 xl:"
      >
        <h2 className="p-3 text-2xl font-semibold text-center lg:text-3xl">
          Hi There!
        </h2>
        <p className="p-3 text-xl text-center lg:">
          My name is Elizabeth Redman.
        </p>
        <p className="p-4 text-lg text-center lg:mx-10">
          Discover the artistry and passion of a photographer who has embraced
          the journey from iPhone 3 to a world of boundless creativity. With a
          keen eye for capturing the essence of joy and love, I invite you to
          embark on a delightful visual odyssey. Immortalize your treasured
          memories through my camera lens.
        </p>
        <p className="p-2 text-lg text-center">More about me</p>
      </div>
    </div>
  );
}
