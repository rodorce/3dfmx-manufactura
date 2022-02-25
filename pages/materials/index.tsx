import React from "react";
import Sidebar from "../../components/layout/Sidebar";
import { supabase } from "../../supabaseClient";
import { InferGetStaticPropsType, GetStaticProps } from "next";
import router from "next/router";
import Head from "next/head";
import Image from "next/image";
type Materials = {
  id: number;
  name: string;
  img: string;
};

const Materials = ({
  materials,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const materialCard = materials.map((material: Materials) => (
    <div
      key={material.id}
      className="cursor-pointer shadow-lg p-6 shadow-gray-500/40 flex flex-col h-full items-stretch justify-center animate__animated animate__fadeIn transform transition duration-500 hover:scale-110"
      onClick={() => router.push(`/materials/${material.id}`)}
    >
      <img
        src={material.img}
        alt="material"
        className="hidden lg:block object-scale-down w-64 h:auto"
      />
      <h2 className="text-xl font-semibold text-center">{material.name}</h2>
    </div>
  ));

  return (
    <>
      <Head>
        <title>Materiales - 3D Factory MX</title>
        <meta
          name="description"
          content="Proveedor #1 de Manufactura Aditiva en México"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar>
        <div className="container container-m-p !flex-col mt-24 md:!mt-10 text-bookmark-blue">
          <h2 className="font-semibold lg:text-5xl animate__animated animate__slideInUp text-2xl text-center">
            Selecciona un material
          </h2>
          <div className="lg:grid lg:grid-cols-4 gap-4 flex flex-col">
            {materialCard}
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const materialsResponse = await supabase
    .from<Materials>("materials")
    .select("id, name, img");

  return {
    props: {
      materials: materialsResponse.data,
    },
    revalidate: 60 * 60 * 4,
  };
};

export default Materials;
