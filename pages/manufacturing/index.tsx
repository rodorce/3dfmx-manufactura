import React from "react";
import Sidebar from "../../components/layout/Sidebar";
import { supabase } from "../../supabaseClient";
import { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import router from "next/router";
import Image from "next/image";

type Materials = {
  id: number;
  name: string;
};

type Process = {
  id: number;
  name: string;
  img: string;
};

const Manufacturing = ({
  processes,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const processCard = processes.map((process: Process) => (
    <div
      key={process.id}
      className="cursor-pointer shadow-lg p-6 shadow-gray-500/40 flex flex-col h-full items-stretch justify-center animate__animated animate__fadeIn transform transition duration-500 hover:scale-110"
      onClick={() => router.push(`/manufacturing/${process.id}`)}
    >
      <img
        src={process.img}
        alt="material"
        className="hidden lg:block object-scale-down w-64 h:auto"
      />
      <h2 className="text-xl font-semibold text-center">{process.name}</h2>
    </div>
  ));

  return (
    <>
      <Head>
        <title>Procesos de manufactura - 3D Factory MX</title>
        <meta
          name="description"
          content="Proveedor #1 de Manufactura Aditiva en México"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar>
        <div className="container container-m-p !flex-col mt-24 md:!mt-10 text-bookmark-blue">
          <h2 className="font-semibold lg:text-5xl animate__animated animate__slideInUp text-2xl text-center">
            Selecciona un proceso
          </h2>
          <div className="lg:grid lg:grid-cols-4 gap-4 flex flex-col">
            {processCard}
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const materialsResponse = await supabase
    .from<Materials>("materials")
    .select("id, name");

  const processesResponse = await supabase
    .from<Process>("manufacturing")
    .select("id, name, img");

  return {
    props: {
      materials: materialsResponse.data,
      processes: processesResponse.data,
    },
    revalidate: 60 * 4,
  };
};

export default Manufacturing;
