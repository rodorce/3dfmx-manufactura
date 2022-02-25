import React, { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

import Link from "next/link";
import Router from "next/router";
import { Menu } from "iconoir-react";
import Image from "next/image";
type Props = {
  children?: React.ReactNode;
};

type Process = {
  id: string;
  name: string;
};

type Material = {
  id: string;
  name: string;
};
const Sidebar = (props: Props) => {
  const [processes, setProcesses] = useState<Process[]>([]);
  const [materials, setMaterials] = useState<Material[]>([]);
  const [materialItem, setMaterialItem] = useState<string>("flex");
  const [processItem, setProcessItem] = useState<string>("flex");
  const [menuDisplay, setMenuDisplay] = useState<string>("hidden");
  const [menuHeight, setMenuHeight] = useState<string>("h-auto");
  const [menuPosition, setMenuPosition] = useState<string>("flex");

  const fetchProcess = async () => {
    try {
      const processesResponse = await supabase
        .from<Process>("manufacturing")
        .select("id, name");
      setProcesses(processesResponse.data!);
    } catch (e) {
      setProcesses([]);
    }
  };

  const fetchMaterial = async () => {
    try {
      const materialsResponse = await supabase
        .from<Material>("materials")
        .select("id, name");
      setMaterials(materialsResponse.data!);
    } catch (e) {
      setMaterials([]);
    }
  };

  const showMaterial = (material: Material) => {
    Router.push("/materials/" + material.id);
  };

  const showProcess = (process: Process) => {
    Router.push("/manufacturing/" + process.id);
  };

  useEffect(() => {
    fetchProcess();
    fetchMaterial();
  }, []);
  const materialName =
    materials &&
    materials.map((material) => (
      <li
        key={material.id}
        className={
          Router.asPath === `/materials/${material.id}`
            ? `inline-block w-full px-4 py-2 text-xs rounded hover:text-[#555555] text-[#00000091] font-semibold`
            : "`inline-block w-full px-4 py-2 text-xs rounded hover:text-[#555555] text-[#00000091]`"
        }
        onClick={() => showMaterial(material)}
      >
        {material.name}
      </li>
    ));

  const processName =
    processes &&
    processes.map((process) => (
      <li
        key={process.id}
        className={
          Router.asPath === `/manufacturing/${process.id}`
            ? `inline-block w-full px-4 py-2 text-xs rounded hover:text-[#555555] text-[#00000091] font-semibold`
            : "`inline-block w-full px-4 py-2 text-xs rounded hover:text-[#555555] text-[#00000091]`"
        }
        onClick={() => showProcess(process)}
      >
        {process.name}
      </li>
    ));

  const handleMenu = () => {
    menuDisplay === "hidden"
      ? setMenuDisplay("block")
      : setMenuDisplay("hidden");

    menuHeight === "h-full" ? setMenuHeight("h-auto") : setMenuHeight("h-full");

    menuPosition === "fixed"
      ? setMenuPosition("flex")
      : setMenuPosition("fixed");
  };
  return (
    <div
      className={`lg:flex font-Poppins lg:flex-row flex-col w-full lg:relative h-full ${menuPosition}`}
    >
      <div
        className={`md:flex justify-center bg-[#f8faff] ${menuHeight} lg:h-auto`}
      >
        <div className="w-full lg:w-64 bg-[#f8faff] border-r border-[#e0e1e4]">
          <div className="px-6 pt-8">
            <div className="flex items-center lg:justify-between justify-center">
              <img
                src="https://cdn.shopify.com/s/files/1/0405/7746/6523/files/Logo-3d-factory-mx-con-R_195x@2x.png?v=1591294818"
                alt="logo"
              />
            </div>
            <Menu
              className="ml-auto text-[#8D9E97] lg:hidden"
              onClick={handleMenu}
            />
          </div>
          <div className="px-6 pt-4">
            <hr className="border-gray-700" />
          </div>
          <div className={`px-6 pt-4 ${menuDisplay} lg:block`}>
            <ul className="flex flex-col space-y-2">
              <li className="relative text-black">
                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                  <svg
                    className="w-5 h-5 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9.75 8.75V19"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M5 8.25H19"
                    ></path>
                  </svg>
                </div>
                <Link href="/" passHref>
                  <span className="inline-block w-full py-2 pl-8 pr-4 text-xs rounded hover:text-[#555555] text-[#00000091] focus:text-[#000000] cursor-pointer">
                    Inicio
                  </span>
                </Link>
              </li>
              <li className="">
                <div className="relative flex justify-between text-black hover:text-black focus-within:text-white">
                  <div className="flex items-center w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                      <svg
                        className="w-5 h-5 stroke-current"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V9L14 4.75H7.75C6.64543 4.75 5.75 5.64543 5.75 6.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25Z"
                        ></path>
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M18 9.25H13.75V5"
                        ></path>
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M9.75 15.25H14.25"
                        ></path>
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M9.75 12.25H14.25"
                        ></path>
                      </svg>
                    </div>

                    <span
                      onClick={() => {
                        processItem === "flex"
                          ? setProcessItem("hidden")
                          : setProcessItem("flex");
                      }}
                      className="cursor-pointer inline-block w-full py-2 pl-8 pr-4 text-xs rounded hover:bg-[#e9eaee] text-[#00000091] focus:text-[#000000]"
                    >
                      Procesos de manufactura
                    </span>
                  </div>
                  <button
                    className="absolute right-0 flex items-center p-1"
                    tabIndex={-1}
                  >
                    <svg
                      className="w-5 h-5 stroke-current"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M15.25 10.75L12 14.25L8.75 10.75"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className={`cursor-pointer pt-2 pl-4 ${processItem}`}>
                  <ul className="flex flex-col pl-2 text-gray-500 border-l border-gray-700">
                    {processName}
                  </ul>
                </div>
              </li>
              <li className="">
                <div className="relative flex justify-between text-black hover:text-black focus-within:text-white">
                  <div className="flex items-center w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                      <svg
                        className="w-5 h-5 stroke-current"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V9L14 4.75H7.75C6.64543 4.75 5.75 5.64543 5.75 6.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25Z"
                        ></path>
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M18 9.25H13.75V5"
                        ></path>
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M9.75 15.25H14.25"
                        ></path>
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M9.75 12.25H14.25"
                        ></path>
                      </svg>
                    </div>
                    <span
                      onClick={() => {
                        materialItem === "flex"
                          ? setMaterialItem("hidden")
                          : setMaterialItem("flex");
                      }}
                      className="cursor-pointer inline-block w-full py-2 pl-8 pr-4 text-xs rounded hover:bg-[#e9eaee] text-[#00000091] focus:text-[#000000]"
                    >
                      Materiales
                    </span>
                  </div>
                  <button
                    className="absolute right-0 flex items-center p-1"
                    tabIndex={-1}
                  >
                    <svg
                      className="w-5 h-5 stroke-current"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M15.25 10.75L12 14.25L8.75 10.75"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className={`pt-2 pl-4 ${materialItem}`}>
                  <ul className="cursor-pointer flex flex-col pl-2 text-gray-500 border-l border-gray-700">
                    {materialName}
                  </ul>
                </div>
              </li>
              <li className="relative text-gray-600 hover:text-gray-600 focus-within:text-black focus-within:font-semibold cursor-pointer">
                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                  <svg
                    className="w-5 h-5 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M5.75 19.2502H6.25C6.80229 19.2502 7.25 18.8025 7.25 18.2502V15.75C7.25 15.1977 6.80229 14.75 6.25 14.75H5.75C5.19772 14.75 4.75 15.1977 4.75 15.75V18.2502C4.75 18.8025 5.19772 19.2502 5.75 19.2502Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M11.75 19.2502H12.25C12.8023 19.2502 13.25 18.8025 13.25 18.2502V12.75C13.25 12.1977 12.8023 11.75 12.25 11.75H11.75C11.1977 11.75 10.75 12.1977 10.75 12.75V18.2502C10.75 18.8025 11.1977 19.2502 11.75 19.2502Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17.75 19.2502H18.25C18.8023 19.2502 19.25 18.8025 19.25 18.2502V5.75C19.25 5.19772 18.8023 4.75 18.25 4.75H17.75C17.1977 4.75 16.75 5.19772 16.75 5.75V18.2502C16.75 18.8025 17.1977 19.2502 17.75 19.2502Z"
                    ></path>
                  </svg>
                </div>
                <span
                  onClick={() => Router.push("/blog")}
                  className="inline-block w-full py-2 pl-8 pr-4 text-xs rounded hover:text-[#555555] text-[#00000091] focus:text-[#000000] focus:font-bold"
                >
                  Blog
                </span>
              </li>
              <li className="relative text-gray-600 hover:text-gray-600 focus-within:text-black focus-within:font-semibold cursor-pointer">
                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                  <svg
                    className="w-5 h-5 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="7.25"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></circle>
                    <circle
                      cx="12"
                      cy="12"
                      r="3.25"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></circle>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M7 17L9.5 14.5"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17 17L14.5 14.5"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9.5 9.5L7 7"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M14.5 9.5L17 7"
                    ></path>
                  </svg>
                </div>
                <Link href="/#recommendation" passHref>
                  <span className="inline-block w-full py-2 pl-8 pr-4 text-xs rounded hover:text-[#555555] text-[#00000091] focus:text-[#000000] focus:font-bold">
                    Nuestra recomendación
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">{props.children}</div>
    </div>
  );
};

export default Sidebar;
