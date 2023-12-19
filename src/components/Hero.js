import React from "react";
// import HeroImg from "../assets/hero-img.png";

import {
  AiOutlineLinkedin,
  AiOutlineGithub
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I'm <span className="text-accent">Joe</span><br />
            Software Engineer
          </h1>

          <p className="py-5">
            Full-stack developer interested primarily in backend work and leveraging AI within software products.
          </p>

          <div className="flex py-5 space-x-5">
            <a
              href="https://www.linkedin.com/in/joseph-cusano-837508195/"
              className="inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineLinkedin size={40} />{" "}
            </a>
            <a
              href="https://github.com/joecus1"
              className="inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>
          </div>
        </div>

        {/* <div className="hero-img">
          <img
            src={HeroImg}
            alt="hero pic"
            className="lgw-[80%] ml-auto"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;