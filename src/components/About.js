import React from "react";
// import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-secondary text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>
          <div className="flex-col space-y-5">
            <p>
              Hi, my name is Joe Cusano. I am a software engineer. 
            </p>
            <p>
              I am currently a software developer at Glenview Capital, where I work on a performance/risk analytics application. At Glenview, I've led the design
              and development of a new data pipeline to source prices for securities.
            </p>
            <p>
              Previously, I worked at Accenture
              as an advanced app engineering analyst. I designed and implemented one of Accenture's first generative AI applications within a client organization.
              I prefer backend work, but am open to developing across the full stack.
            </p>
            <p>
              I am most comfortable writing code in Python and C#. I have written code in an array of
              other languages in personal projects and during my undergrad at Duke University. I welcome opportunities to learn new things. Learning constantly
              is one of my favorite aspects of software engineering.
            </p>
          </div>
        </div>

        {/* <div className="about-img">
          <img
            src={AboutImg}
            alt="about pic"
            className="lgw-[80%] md:ml-auto"
          />
        </div> */}
      </div>
    </section>
  );
};

export default About;