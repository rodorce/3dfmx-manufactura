import React, { useState } from "react";
import Select from "react-select";
import materials from "../../data/Materials.json";
import features from "../../data/Features.json";
import applications from "../../data/Applications.json";
import process from "../../data/Process.json";
import industry from "../../data/Industry.json";

const Recommendations = () => {
  const [featureOptions, setFeatureOptions] = useState([]);
  const [applicationOptions, setApplicationOptions] = useState<any>([]);
  const [processOptions, setProcessOptions] = useState("");
  const [industryOptions, setIndustryOptions] = useState<any>([]);
  const [recommendations, setRecommendations] = useState<any>([]);
  const [animation, setAnimation] = useState("");
  const handleFeaturesChange = (value: any) => {
    setFeatureOptions(value.map((v: any) => v.value));
  };

  const handleApplicationsChange = (value: any) => {
    setApplicationOptions(value.value);
  };
  const handleProcessChange = (value: any) => {
    setProcessOptions(value.value);
  };

  const handleIndustryChange = (value: any) => {
    setIndustryOptions(value.value);
  };

  const obtainMostFrequents = (arr: any) => {
    let counts = arr.reduce((a: any, c: any) => {
      a[c] = (a[c] || 0) + 1;
      return a;
    }, {});
    let maxCount = Math.max(...Object.values<number>(counts));
    let mostFrequent = Object.keys(counts).filter(
      (k) => counts[k] === maxCount
    );
    return mostFrequent;
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    let filterIndustry = [""];
    filterIndustry = materials
      .filter((material) => material.industry.includes(industryOptions))
      .map((material) => material.name);

    let filterApplication = [""];
    filterApplication = materials
      .filter((material) => material.use.includes(applicationOptions))
      .map((material) => material.name);

    let filterProcess = [""];
    filterProcess = materials
      .filter((material) => material.process === processOptions)
      .map((material) => material.name);

    let filterFeatures: any = [];

    for (let i = 0; i < featureOptions.length; i++) {
      filterFeatures.push(
        materials
          .filter((material) => material.features.includes(featureOptions[i]))
          .map((material) => material.name)
      );
    }

    let array = filterIndustry.concat(
      filterProcess.concat(filterApplication.concat(filterFeatures))
    );

    let flatArray: any = [];
    for (let i = 0; i < array.length; i++) {
      flatArray = flatArray.concat(array[i]);
    }

    const result = obtainMostFrequents(flatArray).filter(
      (value) => value != "undefined"
    );

    setRecommendations(result);
    setAnimation("animate__animated animate__fadeIn");
  };

  const recommendation = (
    <>
      <h3 className="text-2xl text-center mb-2">Te recomendamos adquirir: </h3>
      <ul>
        {recommendations.map((rec: any) => (
          <li className={`text-left text-lg px-12 ${animation}`} key={rec}>
            <details className="open:bg-white open:ring-1 open:ring-black/5 open:shadow-lg px-6 py-2 my-4 rounded-lg">
              <summary className="mb-2 text-md leading-6 text-gray-900 font-semibold select-none py-2">
                {rec}
              </summary>
              <ul className="text-left text-sm">
                <li className="mb-4">
                  <strong>Industria: </strong>
                  <span>
                    {materials
                      .filter((material) => material.name === rec)
                      .map((material, index) => (
                        <span key={index}>
                          {(index ? ", " : "") + material.industry}
                        </span>
                      ))}
                  </span>
                </li>
                <li className="mb-4">
                  <strong>Aplicación: </strong>
                  <span>
                    {materials
                      .filter((material) => material.name === rec)
                      .map((material, index) => (
                        <span key={index}>
                          {(index ? ", " : "") + material.use}
                        </span>
                      ))}
                  </span>
                </li>
                <li className="mb-4">
                  <strong>Proceso: </strong>
                  <span>
                    {
                      materials.filter((material) => material.name === rec)[0]
                        .process
                    }
                  </span>
                </li>
                <li className="mb-4">
                  <strong>Características: </strong>
                  <span>
                    {materials
                      .filter((material) => material.name === rec)
                      .map((material, index) => (
                        <span key={material.name}>
                          {" "}
                          {(index ? ", " : "") + material.features}
                        </span>
                      ))}
                  </span>
                </li>
              </ul>
            </details>
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <div className="bg-zinc-100" id="recommendation">
      <div
        className="container container-m-p justify-center"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="flex flex-col">
          <h3 className="font-semibold text-4xl text-center mb-12 text-bookmark-blue">
            ¿No sabes por donde empezar? ¡Nosotros te ayudamos!
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="flex lg:flex-row flex-col-reverse">
              <div className="basis-1/2">
                <div className="flex flex-col">
                  <div className="text-2xl font-bold">Industria</div>
                  <Select
                    placeholder="Seleccionar industria"
                    options={industry}
                    onChange={handleIndustryChange}
                    className="mx-2 mb-4"
                  />
                </div>
                <div className="flex-col">
                  <h2 className="text-2xl font-bold">Aplicación</h2>
                  <Select
                    placeholder="Seleccionar aplicación"
                    options={applications}
                    onChange={handleApplicationsChange}
                    className="mx-2 mb-4"
                  />
                </div>
                <div className="flex-col">
                  <h2 className="text-2xl font-bold">Proceso</h2>
                  <Select
                    placeholder="Seleccionar proceso"
                    options={process}
                    onChange={handleProcessChange}
                    className="mx-2 mb-4"
                  />
                  <div className="flex-col">
                    <h2 className="text-2xl font-bold">
                      Otras características
                    </h2>
                    <div className="flex flex-col mb-12">
                      <Select
                        placeholder="Seleccionar material"
                        isMulti
                        options={features}
                        onChange={handleFeaturesChange}
                        className="mx-2 mb-4"
                      />
                      <button className="mt-5 py-5 rounded-md transition duration-300 text-white bg-blue-500 hover:bg-blue-800 hover:text-white">
                        Obtener recomendación
                      </button>
                      <h6 className="text-sm text-center mt-4 mb-2">
                        Todos los campos son opcionales
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2">
                <div className="flex flex-col">
                  {recommendations.length != 0 && recommendation}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
