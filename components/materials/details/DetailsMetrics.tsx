import React from "react";

type Props = {
  metrics: Metrics;
};

type Metrics = {
  metricTitle: string[];
  metricMinIndex: string[];
  metricPercent: string[];
  metricMaxIndex: string[];
};

const DetailsMetrics = (props: Props) => {
  let metricName = props.metrics.metricTitle.map((metric) => metric);
  let metricMinIndex = props.metrics.metricMinIndex.map((metric) => metric);
  let metricPercent = props.metrics.metricPercent.map((metric) => metric);
  let metricMaxIndex = props.metrics.metricMaxIndex.map((metric) => metric);

  return (
    <div>
      {metricName.map((metric, i) => (
        <div className="py-3 flex lg:flex-row flex-col" key={metric}>
          <h2 className="text-md font-semibold p-3 text-center">{metric}</h2>
          <h2 className="text-md p-3 text-left lg:text-center">
            {metricMinIndex[i]}
          </h2>
          <div className="w-full bg-gray-200 h-1 m-3">
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: metricPercent[i] }}
              ></div>
            </div>
          </div>
          <h2 className="text-md p-3 text-right">{metricMaxIndex[i]}</h2>
        </div>
      ))}
    </div>
  );
};

export default DetailsMetrics;
