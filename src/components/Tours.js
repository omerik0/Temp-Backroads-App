import React from "react";
import Title from "./Title";
import { tours } from "../data.js";
import Tour from "./Tour.js";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours"></Title>

      <div className="section-center featured-center">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour}></Tour>;
        })}
      </div>
    </section>
  );
};

export default Tours;
