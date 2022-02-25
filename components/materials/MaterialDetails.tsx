import React, { useState } from "react";
import DetailsContent from "./details/DetailsContent";
import DetailsGrid from "./details/DetailsGrid";

type Props = {
  details: FamilyDetails[];
  content: FamilyContent[];
};

type FamilyDetails = {
  title: string;
  subtitle: string;
  img: string;
  description: string;
};

type FamilyContent = {
  title: string;
  subtitle: string;
  img: string;
  description: string;
  features: string[];
  metricTitle: string[];
  metricMinIndex: string[];
  metricPercent: string[];
  metricMaxIndex: string[];
  gallery: string[];
};

const MaterialDetails = (props: Props) => {
  const [index, setIndex] = useState(0);
  const updateIndex = (index: string) => {
    setIndex(parseInt(index));
  };
  console.log(props.details);
  return (
    <div className="container container-m-p">
      <div className="flex flex-col lg:flex-row lg:basis-3/8 justify-center items-center lg:items-start animate__animated animate__fadeIn animate__delay-1s">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold p-4 flex">
            Materials in this family
          </h2>
          <DetailsGrid details={props.details} obtainIndex={updateIndex} />
        </div>
        <DetailsContent familyContent={props.content} index={index} />
      </div>
    </div>
  );
};

export default MaterialDetails;
