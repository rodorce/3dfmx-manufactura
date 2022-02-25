import React from "react";

type Props = {};

const WhyUs = (props: Props) => {
  return (
    <div className="w-full bg-gray-50">
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:pt-32 lg:pb-32 pt-14 pb-14">
        <div className="flex flex-col gap-12 items-center mx-auto">
          <h2
            className="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center md:text-center font-semibold animate__animated"
            data-aos="zoom-in"
          >
            ¿Por qué <span className="text-bookmark-purple">nosotros</span>?
          </h2>
          <div className="lg:grid lg:grid-cols-3">
            <div
              className="p-5 m-5 bg-white shadow-lg lg:w-96"
              data-aos="zoom-in"
            >
              <i className="text-2xl fas fa-horizontal-rule text-blue-600"></i>
              <h2 className="text-2xl font-bold pb-4">
                <span className="text-blue-600">Descubre</span> la variedad más
                amplia de materiales
              </h2>
              <p className="text-gray-600 text-lg">
                Traemos a ti, los materiales más novedosos con mayor resistencia
                mecánica y mejor apareciencia.
              </p>
            </div>
            <div
              className="p-5 m-5 bg-white shadow-lg lg:w-96"
              data-aos="zoom-in"
            >
              <i className="text-2xl fas fa-horizontal-rule text-blue-600"></i>
              <h2 className="text-2xl font-bold pb-4">
                <span className="text-blue-600">Conoce</span> los diferentes
                procesos de manufactura
              </h2>
              <p className="text-gray-600 text-lg">
                Nosotros te guiaremos en la selección del proceso de manufactura
                y te recomendaremos la mejor opción costo/beneficio
              </p>
            </div>
            <div
              className="p-5 m-5 bg-white shadow-lg lg:w-96"
              data-aos="zoom-in"
            >
              <i className="text-2xl fas fa-horizontal-rule text-blue-600"></i>
              <h2 className="text-2xl font-bold pb-4">
                <span className="text-blue-600">Crece</span> y{" "}
                <span className="text-blue-600">desarrolla</span> tu negocio
              </h2>
              <p className="text-gray-600 text-lg">
                Nosotros buscamos ser tu firma de manufactura para que tu
                dediques tu esfuerzo a tu mercado y tus clientes. Nosotros a
                llevar realidad tu proyecto y tengas la mayor tranquilidad.
              </p>
            </div>
          </div>
          <button className="btn btn-purple" data-aos="fade-up">
            Saber más
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
