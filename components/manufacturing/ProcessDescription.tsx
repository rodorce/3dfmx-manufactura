import Image from "next/image";
import React from "react";

type ProcessDescription = {
  name: string;
  entry: string;
  subtitle: string;
  content: string;
  applications: string[];
};

type Props = {
  processDescription: ProcessDescription;
};

const ProcessDescription = (props: Props) => {
  const applicationsList = props.processDescription.applications.map(
    (application: string) => <li key={application}>{application}</li>
  );
  return (
    <div className="font-Poppins">
      <div className="container container-m-p !flex-col !items-start !pt-44 md:!pt-24">
        <div className="title divide-y-2">
          <h2 className="text-2xl font-semibold pb-2 animate__animated animate__fadeIn">
            {props.processDescription.name}
          </h2>
          <div className="flex  flex-col lg:flex-row">
            <div className="text-gray-700 lg:w-2/3 my-2">
              <p className="whitespace-pre-line my-2 animate__animated animate__fadeIn">
                {props.processDescription.entry}
              </p>
              <div className="float-right mr-6 mt-2">
                <img
                  src="https://www.protolabs.com/media/1013213/stereolithography-3d-printing-process-cte-large.png"
                  className="animate__animated animate__fadeIn w-96 m-6"
                  alt=""
                />
              </div>
              <h2 className="font-semibold text-lg animate__animated animate__fadeIn">
                {props.processDescription.subtitle}
              </h2>
              <p className="whitespace-pre-line my-2 animate__animated animate__fadeIn">
                {props.processDescription.content}
              </p>
            </div>
            <div className="px-6 lg:mx-5 mx-1 my-5 py-8 bg-blue-900 text-white lg:w-1/3 lg:h-1/3 animate__animated animate__fadeIn">
              <div className="h2 font-medium text-xl animate__animated animate__fadeIn">
                Aplicaciones mas comunes
              </div>
              <ul>{applicationsList}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessDescription;
