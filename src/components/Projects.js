import React from "react";
import neuralNet from '../assets/images/neural-net.png'
import particleCollide from '../assets/images/particle-collide.png'
import ragApp from '../assets/images/rag-app.png'
import boomerangApp from '../assets/images/boomerang-app.png'

const Projects = () => {
    const projects = [
      {
        img: ragApp,
        title: "rag-app",
        desc: "A Generative AI chatbot I built using the RAG approach. Pulled context from PDFs to answer questions.",
        link: "https://github.com/joecus1/ai-pdf-chatbot",
        buttonText: "Code",
      },
      {
        img: boomerangApp,
        title: "boomerang-app",
        desc: "Created a full-stack mobile application using React-Native and using Google Firebase \
        to implement database storage, authentication, and geolocation.",
        link: "https://drive.google.com/drive/folders/1HMmQz59Nhm3b7QOAeafnXbjzp40Y2KWK?usp=drive_link",
        buttonText: "Demos",
      },
      {
        img: neuralNet,
        title: "neural-net",
        desc: "A neural net I built from scratch in Python using just the numpy library.",
        link: "https://github.com/joecus1/homemade-neural-net",
        buttonText: "Code",
      },
      {
        img: particleCollide,
        title: "particle-collision",
        desc: "A simulation of particles colliding built with Python",
        link: "https://github.com/joecus1/particle-collision-simulation",
        buttonText: "Code",
      },
    ]; 

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of the personal projects I have built recently in my free time.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative h-fit" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  {/* <a
                    href={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Demo
                  </a> */}
                  <a
                    href={project.link}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.buttonText}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;