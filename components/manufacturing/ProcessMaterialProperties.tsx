import React from "react";

type Props = {
  processMaterialProperties: MaterialProperties;
};

type MaterialProperties = {
  comparisonTitle: string;
  comparisonTH: string[];
  comparisonTB: string[][];
};
const ProcessMaterialProperties = (props: Props) => {
  return (
    <div className="container !flex-col pb-24">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <h2 className="font-semibold text-2xl pb-3">
            Comparar propiedades del material
          </h2>
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  {props.processMaterialProperties.comparisonTH.map(
                    (header: string) => {
                      return (
                        <th
                          key={header}
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          {header}
                        </th>
                      );
                    }
                  )}
                </tr>
              </thead>
              <tbody>
                {props.processMaterialProperties.comparisonTB.map(
                  (row: string[], index: number) => (
                    <tr className="border-b" key={index}>
                      {row.map((col: string) => (
                        <td
                          key={col}
                          className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                        >
                          {col}
                        </td>
                      ))}
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessMaterialProperties;
