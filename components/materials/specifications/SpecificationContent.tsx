import React from "react";

type Props = {
  specifications: Specifications[];
};

type Specifications = {
  propTitle: string[];
  propDesc: string[];
  title: string;
};

const SpecificationContent = (props: Props) => {
  let featureList = (spec: Specifications, index: number) => {
    let propTitle = spec.propTitle.map((prop) => prop);
    let propDesc = spec.propDesc.map((prop) => prop);
    return propTitle.map((prop, i) => {
      return (
        <div
          key={i}
          className="flex flex-col lg:flex-row gap-3 pb-6 items-center"
        >
          <h2 className="font-semibold text-center lg:text-left pr-2">
            {prop}
          </h2>
          <p className="text-center lg:text-left">{propDesc[i]}</p>
        </div>
      );
    });
  };

  let specificationsGrid = props.specifications.map((spec, index) => {
    return (
      <div className="mx-auto lg:w-1/4" key={index}>
        <div className="flex flex-col items-center lg:items-start transform transition duration-500 hover:scale-110">
          <h2 className="font-bold text-2xl pb-6">{spec.title}</h2>
        </div>
        {featureList(spec, index)}
      </div>
    );
  });

  return (
    <div className="flex flex-col lg:flex-row gap-12 py-12 items-center lg:items-start">
      {specificationsGrid}
    </div>
  );
};

export default SpecificationContent;
