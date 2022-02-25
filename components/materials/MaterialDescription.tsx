import Image from "next/image";
import React from "react";

type Props = {
  material: MaterialDescription;
};

type MaterialDescription = {
  img: string;
  name: string;
  description: string;
  colors: string[];
};

const MaterialDescription = (props: Props) => {
  const description = (
    <div className="flex flex-col items-center lg:flex-row justify-center">
      <div className="shrink-0 w-96 pb-10">
        <img
          src={props.material.img}
          className="rounded-full animate__animated animate__fadeIn"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center px-10">
        <h2 className="text-3xl font-semibold pb-4 text-center lg:text-left animate__animated animate__fadeIn animate__delay-1s">
          {props.material.name}
        </h2>
        <p className="text-base text-center lg:text-left whitespace-pre-line animate__animated animate__fadeIn animate__delay-1s">
          {props.material.description}
        </p>
        <div className="pt-10">
          <div className="flex flex-col lg:flex-row items-center animate__animated animate__fadeIn animate__delay-1s">
            <span className="font-semibold pb-5 ">Colores</span>
            <div className="flex-wrap flex-row items-center justify-center">
              {props.material.colors.map((c) => (
                <button
                  className="shadow-lg rounded-full ml-5 p-5 mb-5 border border-white"
                  style={{ backgroundColor: c }}
                  key={c}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="bg-gray-50 font-Poppins">
      <div className="container container-m-p !mt-24">{description}</div>
    </div>
  );
};

export default MaterialDescription;
