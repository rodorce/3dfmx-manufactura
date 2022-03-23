import React from "react";
import ProcessDescription from "../../../components/manufacturing/ProcessDescription";
import ProcessVideo from "../../../components/manufacturing/ProcessVideo";
import ProcessGuidelines from "../../../components/manufacturing/ProcessGuidelines";
import ProcessMaterialProperties from "../../../components/manufacturing/ProcessMaterialProperties";
import Sidebar from "../../../components/layout/Sidebar";
import { supabase } from "../../../supabaseClient";
import { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import ProcessOtherInfo from "../../../components/manufacturing/ProcessOtherInfo";
type Process = {
  id: number;
};

const Process = ({
  processes,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>{processes[0].name} - 3D Factory MX</title>
        <meta
          name="description"
          content="Proveedor #1 de Manufactura Aditiva en México"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar>
        <ProcessDescription processDescription={processes[0]} />
        <ProcessVideo processVideo={processes[0]} />
        <ProcessGuidelines processGuidelines={processes[0]} />
        <ProcessMaterialProperties processMaterialProperties={processes[0]} />
        <ProcessOtherInfo otherInfo={processes[0]} />
      </Sidebar>
    </>
  );
};

export default Process;

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const processResponse = await supabase
      .from<Process>("manufacturing")
      .select("id");

    const processLength = processResponse.data!.length;
    const paths = Array.from({ length: processLength }, (_, index) => ({
      params: {
        manufacturingId: processResponse.data![index].id.toString(),
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
  const processId: any = context.params!.manufacturingId;
  const processesResponse = await supabase
    .from<Process>("manufacturing")
    .select("*")
    .eq("id", processId);
  return {
    props: {
      processes: processesResponse.data,
    },
    revalidate: 60 * 4,
  };
};
