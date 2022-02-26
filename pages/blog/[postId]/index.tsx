import React from "react";
import Article from "../../../components/blog/Article";
import Sidebar from "../../../components/layout/Sidebar";
import { supabase } from "../../../supabaseClient";
import { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";

type Post = {
  id: number;
  title: string;
  description: string;
  content: string;
  releaseDate: string;
  editDate: string;
  categories: Object[];
};

const Posts = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>{posts[0].title} - 3D Factory MX</title>
        <meta name="description" content={posts.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar>
        <Article post={posts[0]} />
      </Sidebar>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const postsResponse = await supabase.from<Post>("blog").select("id");
    const materialsLength = postsResponse.data!.length;
    const paths = Array.from({ length: materialsLength }, (_, index) => ({
      params: {
        postId: postsResponse.data![index].id.toString(),
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
  const postsId: any = context.params!.postId;
  const postsResponse = await supabase
    .from<Post>("blog")
    .select(`*`)
    .eq("id", postsId);
  return {
    props: {
      posts: postsResponse.data,
    },
    revalidate: 60 * 60 * 4,
  };
};

export default Posts;
