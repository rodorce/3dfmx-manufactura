import React from "react";
import Navbar from "./Navbar";
type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="relative">
      <video
        autoPlay
        loop
        muted
        className="object-cover !m-0 !p-0 w-full h-full absolute z-0"
        src="./assets/video/hero-video.webm"
      ></video>
      <div className="absolute bg-gradient-to-r from-blue-900 to-black h-full w-full z-100 opacity-80"></div>
      <Navbar />
      <div className="lg:mt-0 flex flex-col-reverse lg:flex-row items-center gap-12 pt-48 lg:pt-28 pb-20 container">
        <div className="flex flex-1 flex-col lg:items-start z-10">
          <h2 className="text-bookmark-white text-3xl md:text-4 lg:text-left text-center lg:text-5xl  mb-8 font-medium animate__animated animate__fadeInDown">
            3D FACTORY MX
          </h2>
          <p className="text-bookmark-white lg:text-left mb-20 font-bold lg:text-6xl text-center text-4xl lg:pr-96 animate__animated animate__fadeInDown">
            <span className="text-blue-600">#1</span> Proveedor Manufactura
            Aditiva en <span className="text-blue-600">México.</span>
          </p>
          <div className="flex justify-center flex-wrap gap-6">
            <a href="mailto:ventas@3dfactory.mx">
              <button
                type="button"
                className="btn btn-purple hover:bg-bookmark-white hover:text-black animate__animated animate__pulse"
              >
                Cotiza hoy
              </button>
            </a>
            <a href="http://3dfactory.mx" rel="external">
              <button
                type="button"
                className="btn btn-transparent hover:bg-black hover:text-white text-black-600 hover:border-none animate__animated animate__pulse animate_delay-5s"
              >
                Tienda en línea
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
