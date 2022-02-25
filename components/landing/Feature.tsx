import React from "react";

type Props = {};

const Feature = (props: Props) => {
  return (
    <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-32 lg:mb-32">
      <div className="flex flex-col gap-12 items-center lg:items-start md:columns-2 md:w-1/2">
        <h2 className="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center md:text-left font-semibold !leading-tight animate__animated animate__fadeInLeft">
          Utilizamos <span className="text-bookmark-purple">Impresión 3D</span>{" "}
          para hacer tu proyecto realidad
        </h2>
        <p className="animate__animated animate__fadeIn animate__delay-1s">
          En 3D Factory MX estamos para apoyarte con todas tus dudas de
          Impresión 3D, por lo cual contamos con personal especializado para
          poder ofrecerte soluciones rápidas y eficientes en capacitación,
          soporte técnico, mantenimiento y reparación de equipos de impresión
          3D.
        </p>
        <button className="btn btn-purple animate__animated animate__fadeIn animate__delay-2s">
          Saber más
        </button>
      </div>
      <div className="flex md:items-center mx-auto">
        <img
          src="./assets/img/3d-printer.svg"
          alt=""
          className="w-64 md:w-96 animate__animated animate__fadeInRight"
        />
      </div>
    </div>
  );
};

export default Feature;
