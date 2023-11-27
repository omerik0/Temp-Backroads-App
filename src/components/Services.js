import React from "react";
import Title from "./Title";
import { servicesArticle } from "../data";
import Service from "./Service";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services"></Title>
      <div className="section-center services-center">
        {servicesArticle.map((article) => {
          return <Service key={article.id} {...article}></Service>;
        })}
      </div>
    </section>
  );
};

export default Services;
