import React from "react";
import WhyUsCard from "./WhyUsCard";
import {
  HeadsetHelp,
  MoneySquare,
  NetworkAlt,
  Phone,
  ProfileCircled,
  QuestionMarkCircle,
} from "iconoir-react";

type Props = {};

const Benefits = (props: Props) => {
  return (
    <div className="bg-gray-50">
      <div className="container lg:flex-row lg:items-center lg:gap-12 lg:pt-32 lg:pb-32 pt-14 pb-14">
        <div className="flex flex-col lg:gap-12 items-center">
          <h2 className="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center md:text-center font-semibold lg:w-7/12 ">
            Grandes{" "}
            <span className="text-bookmark-purple">ventajas y beneficios </span>
            al trabajar con nosotros
          </h2>
          <div
            className="lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 flex flex-col items-stretch"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <WhyUsCard
              title="Cotización en menos de 24h"
              content="Genera tu cotización en línea colocando la información del material y proceso que necesitas"
              icon={<MoneySquare className="text-white text-6xl" />}
            />
            <WhyUsCard
              title="Atención personalizada"
              content="A través de nuestras plataformas digitales generaremos la comunicación para que ty proyecto sea fabricado en el menor tiempo posible."
              icon={<HeadsetHelp className="text-white text-6xl" />}
            />
            <WhyUsCard
              title="Expertos en Manufactura"
              content="Nos hemos capacitado en todos los procesos de manufactura aditiva por lo que te ofreceremos la mejor solución para tu proyecto"
              icon={<ProfileCircled className="text-white text-6xl" />}
            />
            <WhyUsCard
              title="Comunicación rápida"
              content="Te ofrecemos feedback constante y atención personalizada y aterrizado a tus necesidades"
              icon={<Phone className="text-white text-6xl" />}
            />
            <WhyUsCard
              title="Networking"
              content="Te ayudamos a conectar tu proyecto con diferentes miembros de la comunidad"
              icon={<NetworkAlt className="text-white text-6xl" />}
            />
            <WhyUsCard
              title="Respondemos todas tus preguntas"
              content="Siempre te ofreceremos las mejores propuestas para tus proyectos y responderemos todas tus dudas"
              icon={<QuestionMarkCircle className="text-white text-6xl" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
