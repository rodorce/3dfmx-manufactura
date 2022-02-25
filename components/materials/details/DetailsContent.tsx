import React, { useEffect, useState } from "react";
import DetailsGallery from "./DetailsGallery";
import DetailsMetrics from "./DetailsMetrics";

type Props = {
  familyContent: FamilyContent[];
  index: number;
};

type FamilyContent = {
  title: string;
  subtitle: string;
  description: string;
  img: string;
  gallery: string[];
  features: string[];
  metricTitle: string[];
  metricMinIndex: string[];
  metricMaxIndex: string[];
  metricPercent: string[];
};

const DetailsContent = (props: Props) => {
  return (
    <div
      className="flex flex-col p-4 md:w-2/3 text-center lg:text-left"
      // key={props.materialContent.id}
    >
      <h2 className="text-3xl font-semibold">
        {props.familyContent[props.index] !== undefined
          ? props.familyContent[props.index].title
          : props.familyContent[0].title}
      </h2>
      <h3 className="text-xl font-semibold py-3">
        {props.familyContent[props.index] !== undefined
          ? props.familyContent[props.index].subtitle
          : props.familyContent[0].subtitle}
      </h3>
      <p className="py-3">
        {props.familyContent[props.index] !== undefined
          ? props.familyContent[props.index].description
          : props.familyContent[0].title}
      </p>
      <ul className="py-2 flex flex-col lg:grid lg:grid-cols-2 leading-loose">
        {props.familyContent[props.index] !== undefined
          ? props.familyContent[props.index].features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))
          : props.familyContent[0].features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
      </ul>

      <DetailsMetrics
        metrics={{
          metricTitle: props.familyContent[props.index].metricTitle,
          metricMinIndex: props.familyContent[props.index].metricMinIndex,
          metricPercent: props.familyContent[props.index].metricPercent,
          metricMaxIndex: props.familyContent[props.index].metricMaxIndex,
        }}
      />

      {
        <DetailsGallery
          gallery={{
            img: props.familyContent[props.index].gallery,
          }}
        />
      }
    </div>
  );
};

export default DetailsContent;
