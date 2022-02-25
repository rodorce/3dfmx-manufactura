import Image from "next/image";
import React from "react";

type Props = {
  applications: MaterialApplications[];
  featuredApplications: FeaturedApplications;
};

type MaterialApplications = {
  entryImg: string;
  entryTitle: string;
  entryDesc: string;
};

type FeaturedApplications = {
  featuredImg: string;
  featuredText: string;
  list: string[];
};

const MaterialApplications = (props: Props) => {
  const featuredText = props.featuredApplications.featuredText;
  const featuredImg = props.featuredApplications.featuredImg;
  const applicationsList = props.featuredApplications.list.map(
    (item, index) => {
      return <li key={index}>{item}</li>;
    }
  );
  const entries = props.applications.map((application, index) => {
    return (
      <div className="lg:col-span-2" key={index}>
        <img src={application.entryImg} alt="" className="mx-auto" />
        <h2 className="text-2xl font-semibold text-center lg:text-left pt-6">
          {application.entryTitle}
        </h2>
        <p className="text-lg text-center lg:text-left pt-2">
          {application.entryDesc}
        </p>
      </div>
    );
  });

  return (
    <div className="container container-m-p">
      <div className="lg:grid lg:grid-cols-6 gap-12 flex flex-col lg:items-start items-center">
        <div className="col-span-3 flex justify-center flex-col">
          <img src={featuredImg} alt="" />
          <p className="text-xl text-center lg:text-left pt-2">
            {featuredText}
          </p>
        </div>
        <div className="py-6 lg:col-span-3">
          <h2 className="text-4xl font-semibold text-center lg:text-left">
            Applications
          </h2>
          <ul className="text-xl font-normal text-center lg:text-left pt-6">
            {applicationsList}
          </ul>
        </div>
        {entries}
      </div>
    </div>
  );
};

export default MaterialApplications;
