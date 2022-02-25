import React from "react";
import SpecificationContent from "./specifications/SpecificationContent";

type Props = {
  specifications: Specifications[];
};

type Specifications = {
  propTitle: string[];
  propDesc: string[];
  title: string;
};

const MaterialSpecification = (props: Props) => {
  return (
    <div className="bg-gray-50">
      <div className="container gap-12 pt-24 pb-24 items-center">
        <h2 className="text-4xl md:text-4xl font-bold text-bookmark-blue lg:text-left text-center">
          Specifications
        </h2>
        <div className="flex flex-col lg:flex-row">
          <SpecificationContent specifications={props.specifications} />
        </div>
      </div>
    </div>
  );
};

export default MaterialSpecification;
