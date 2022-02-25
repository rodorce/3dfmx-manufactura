import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from "../components/landing/Hero";
import Feature from "../components/landing/Feature";
import WhyUs from "../components/landing/WhyUs";
import Benefits from "../components/landing/Benefits";
import Divider from "../components/landing/Divider";
import Blog from "../components/landing/Blog";
import Footer from "../components/landing/Footer";
import { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from "next";
import { supabase } from "../supabaseClient";
import Recommendations from "../components/landing/Recommendation";

interface Post {
  id: number;
  entry_img: string;
  title: string;
  description: string;
  releaseDate: string;
  categories: Categories[];
}

interface Categories {
  label: string;
  value: string;
}

type Props = {
  posts: Post[];
};

const Home: NextPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Manufactura - 3D Factory MX</title>
        <meta
          name="description"
          content="Proveedor #1 de Manufactura Aditiva en México"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Feature />
        <WhyUs />
        <Benefits />
        <Recommendations />
        <Divider />
        <div className="divide-y">
          <Blog post={posts} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const postsResponse = await supabase
    .from<Post>("blog")
    .select("*")
    .order("id", { ascending: false })
    .range(0, 3);

  return {
    props: {
      posts: postsResponse.data,
    },
    revalidate: 60 * 60 * 4,
  };
};

export default Home;
