import Image from "next/image";
import React, { useState } from "react";

type Props = {
  processGuidelines: ProcessGuidelines;
};

type ProcessGuidelines = {
  guidelinesSections: Sections[];
  guidelineTitle: string;
  guidelinesText: string;
  optionsTitle: string;
  typeTitle: string[];
  typeText: string[];
  typeBenefitsList: string[];
  img: string;
};

type Sections = {
  name: string;
  text: string;
  type: string;
  title: string;
  headerCol: string[];
  colContent: string[];
};

const ProcessGuidelines = (props: Props) => {
  const [guidelineContent, setGuidelineContent] = useState<React.ReactNode>(
    <></>
  );
  const handleGuidelines = (e: React.MouseEvent) => {
    return props.processGuidelines.guidelinesSections.map((item) => {
      if (item.name === e.currentTarget.textContent) {
        return item.type === "OPTIONS_TABLE"
          ? setGuidelineContent(tableDefs(item.headerCol, item.colContent))
          : item.type === "METRIC_TABLE"
          ? setGuidelineContent(tableMetrics(item.headerCol, item.colContent))
          : item.type === "DESCRIPTION"
          ? setGuidelineContent(guidelineText(item.title, item.text))
          : setGuidelineContent("");
      }
    });
  };

  const tableMetrics = (headerCol: string[], colContent: string[]) => {
    const table = [];
    for (let i = 0; i < headerCol.length; i++) {
      table.push(
        <tr className="h-[75px]" key={headerCol[i]}>
          <th className="w-[30%] text-left">
            <strong>{headerCol[i]}</strong>
          </th>
          <td className="w-[35%]" key={colContent[i]}>
            {colContent[i]}
          </td>
        </tr>
      );
    }

    return (
      <table className="w-full float-left">
        <tbody>
          <th className="w-[30%] text-left">
            <strong>&nbsp;</strong>
          </th>
          <td className="w-[35%]">
            <p>
              <strong>Metric</strong>
            </p>
          </td>
          {table}
        </tbody>
      </table>
    );
  };

  const tableDefs = (headerCol: string[], colContent: string[]) => {
    const table = [];
    for (let i = 0; i < headerCol.length; i++) {
      table.push(
        <tr className="h-[75px]" key={headerCol[i]}>
          <th className="w-[30%] text-left">
            <strong>{headerCol[i]}</strong>
          </th>
          <td className="w-[35%]">{colContent[i]}</td>
        </tr>
      );
    }

    return (
      <table className="w-full float-left">
        <tbody>
          <tr>
            <th className="w-[10%] text-left">
              <strong>&nbsp;</strong>
            </th>
          </tr>
          {table}
        </tbody>
      </table>
    );
  };
  const guidelineText = (title: string, text: string) => (
    <div>
      <h2 className="font-semibold text-lg pb-4">{title}</h2>
      <p>{text}</p>
    </div>
  );

  const guidelines = () => {
    return props.processGuidelines.guidelinesSections.map((item) => {
      return (
        <li
          className="guidelines-list active:font-semibold"
          key={item.name}
          onClick={handleGuidelines}
        >
          {item.name}
        </li>
      );
    });
  };

  const materialOptions = () => {
    const details = [];
    for (let i = 0; i < props.processGuidelines.typeTitle.length; i++) {
      details.push(
        <details className="open:bg-white open:ring-1 open:ring-black/5 open:shadow-lg p-6 rounded-lg">
          <summary className="text-sm leading-6 text-gray-900 font-semibold select-none">
            {props.processGuidelines.typeTitle[i]}
          </summary>
          <div className="mt-3 text-sm leading-6 text-gray-600">
            <p>{props.processGuidelines.typeText[i]}</p>
            <div className="h2 my-3 font-semibold">Principales Beneficios</div>
            <ul>
              <li>{props.processGuidelines.typeBenefitsList[i][0]}</li>
              <li>{props.processGuidelines.typeBenefitsList[i][1]}</li>
            </ul>
          </div>
        </details>
      );
    }

    return (
      <div className="flex flex-col md:flex-row w-full border-t-8 border-cyan-500">
        <img src={props.processGuidelines.img} className="my-auto" alt="" />
        <div className="my-12">
          <h2 className="font-medium text-2xl">
            {props.processGuidelines.optionsTitle}
          </h2>
          {details}
        </div>
      </div>
    );
  };

  return (
    <div className="font-Poppins divide-x-4 divide-sky-600">
      <div className="container container-m-p !flex-col !items-start !gap-2">
        <h3 className="font-medium text-xl">
          {props.processGuidelines.guidelineTitle}
        </h3>
        <p>{props.processGuidelines.guidelinesText}</p>
        <h5 className="font-medium my-5">
          Selecciona una propiedad para ver detalles.
        </h5>
        <div className="flex flex-row w-full flex-wrap">
          <ul className="flex flex-nowrap lg:block overflow-scroll lg:overflow-auto">
            {guidelines()}
          </ul>
          <div className="lg:w-2/3 p-3 m-3">{guidelineContent}</div>
        </div>
        {materialOptions()}
      </div>
    </div>
  );
};

export default ProcessGuidelines;
