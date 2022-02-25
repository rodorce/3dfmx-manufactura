import React from "react";

type Props = {};

const Divider = () => {
  return (
    <div className="bg-bookmark-blue">
      <div className="container flex flex-col lg:pt-32 lg:pb-32 pt-14 pb-14 justify-center align-center items-center">
        <h2
          className="text-2xl uppercase text-white tracking-widest text-center"
          data-aos="fade-up"
        >
          ¿Estás listo para cotizar?
        </h2>
        <h1
          className="text-3xl md:text-5xl text-white text-center font-bold lg:pl-32 lg:pr-32 lg:mr-32 lg:ml-32 mt-5"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <span className="text-blue-500">¡</span>Cotiza en línea con un par de
          clics<span className="text-blue-500">!</span>
        </h1>
        <a href="mailto:ventas@3dfactory.mx">
          <button
            className="mt-10 md:py-5 px-12 w-full py-5 rounded-md transition duration-300 text-white bg-blue-500 hover:bg-white hover:text-blue-500"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Cotiza hoy
          </button>
        </a>
      </div>
    </div>
  );
};

export default Divider;
