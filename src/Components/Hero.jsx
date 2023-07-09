import React from "react";
import HeroLogo from "../assets/heroLogo.png";

const Hero = () => {
  return (
    <section className="py-44  relative" id="hero">
      <div className="container flex flex-col justify-center items-center gap-10 text-center">
        <h1
          className="text-5xl md:text-6xl max-w-5xl"
          data-aos="zoom-out"
          data-aos-duration="1200"
        >
          <span className="text-lime-300">
            You Miss Pepe? Don’t miss the Dev
          </span>
          <br /> who make the Pepe Great
        </h1>
        <img
          src={HeroLogo}
          alt=""
          className="md:w-[25rem]"
          data-aos="flip-left"
          data-aos-duration="900"
        />
      </div>
    </section>
  );
};

export default Hero;
