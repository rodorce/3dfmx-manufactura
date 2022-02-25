import Image from "next/image";
import React, { useState } from "react";

type Props = {
  details: DetailsGrid[];
  obtainIndex: (index: string) => void;
};

type DetailsGrid = {
  title: string;
  subtitle: string;
  img: string;
};

const DetailsGrid = (props: Props) => {
  const [index, setIndex] = useState(0);
  const handleClick = (e: React.MouseEvent) => {
    props.obtainIndex(e.currentTarget.id);
  };

  return (
    <div>
      {props.details.map((material, index) => (
        <div
          key={index}
          id={index.toString()}
          className="border-solid border-2 border-gray-50 shadow-sm rounded-sm p-4 lg:flex lg:flex-row m-4 cursor-pointer"
          onClick={handleClick}
        >
          <img
            id={index.toString()}
            src={material.img}
            className="w-20 hidden lg:block"
            alt="family"
          />
          <div
            className="px-4 text-center md:flex flex-col justify-center"
            id={index.toString()}
          >
            <h3 id={index.toString()} className="text-md font-semibold">
              {material.title}
            </h3>
            <h4 id={index.toString()} className="text-base">
              {material.subtitle}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailsGrid;
