import React from "react";

const Contact = () => {
  return (
    <section className="bg-primary px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
          Contact Me
        </h2>
        <p>
          I love meeting new people, so if you'd like to connect some time feel free to reach out.
        </p>

        <p className="py-2">
          <span className="font-bold">Email:</span> joecusano57@gmail.com
        </p>
      </div>
    </section>
  );
};

export default Contact;