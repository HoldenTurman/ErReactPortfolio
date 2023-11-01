import React from "react";

export default function Offer() {
  return (
    <div>
      <div>
        <h2 className="sm:p-3 text-5xl text-center lg:text-4xl font-semibold">
          WEDDINGS
        </h2>
        <p className="sm:p-4 text-xl text-center lg:mx-72">
          Weddings starting at 3k-I-offer two Collections for my traditional
          styled weddings + Custom Elopements.
        </p>
        <p className="sm:p-5 text-xl  text-center lg:text-lg">Learn More</p>
        <hr style={{ border: "solid 1px", width: "350px", margin: "auto" }} />
      </div>
      <div>
        <h2 className="sm: mt-10 p-5 text-5xl text-center lg:text-4xl font-semibold">
          FAMILIES/COUPLES
        </h2>
        <p className="sm:p-4 text-xl text-center lg:mx-72">
          Weddings starting at 3k-I-offer two Collections for my traditional
          styled weddings + Custom Elopements.
        </p>
        <p className="sm:p-10 text-xl  text-center">Learn More</p>
        <hr
          style={{
            border: "solid 1px",
            width: "350px",
            margin: "auto",
          }}
        />
      </div>
      <div>
        <h2 className="sm: mt-10 p-3 text-5xl text-center lg:text-4xl font-semibold">
          GRADUATION
        </h2>
        <p className="sm:p-4 text-xl text-center lg:mx-72">
          Weddings starting at 3k-I-offer two Collections for my traditional
          styled weddings + Custom Elopements.
        </p>
        <p className="sm:p-2 text-xl  text-center">Learn More</p>
      </div>
    </div>
  );
}
