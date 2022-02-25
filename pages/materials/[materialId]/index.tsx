import React from "react";
import Sidebar from "../../../components/layout/Sidebar";
import { supabase } from "../../../supabaseClient";
import { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from "next";
import MaterialDescription from "../../../components/materials/MaterialDescription";
import MaterialDetails from "../../../components/materials/MaterialDetails";
import MaterialSpecification from "../../../components/materials/MaterialSpecification";
import Head from "next/head";
import MaterialApplications from "../../../components/materials/MaterialApplications";
type Material = {
  id: number;
};

const Material = ({
  material,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>{material[0].name} - 3D Factory MX</title>
        <meta name="description" content={material[0].description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar>
        <MaterialDescription material={material[0]} />
        <MaterialDetails
          details={material[0].family}
          content={material[0].family}
        />
        <MaterialSpecification specifications={material[0].specifications} />
        <MaterialApplications
          applications={material[0].applications}
          featuredApplications={material[0].featuredApplications}
        />
      </Sidebar>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const materialsResponse = await supabase
      .from<Material>("materials")
      .select("id");

    const materialsLength = materialsResponse.data!.length;
    const paths = Array.from({ length: materialsLength }, (_, index) => ({
      params: {
        materialId: materialsResponse.data![index].id.toString(),
      },
    }));

    return {
      paths,
      fallback: "blocking",
    };
  } catch (e) {
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const materialId: any = context.params!.materialId;
  const materialsResponse = await supabase
    .from<Material>("materials")
    .select(`*`)
    .eq("id", materialId);
  return {
    props: {
      material: materialsResponse.data,
    },
    revalidate: 60 * 60 * 4,
  };
};

export default Material;
