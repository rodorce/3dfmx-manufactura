import React, { useEffect, useState, useRef } from "react";
import Router, { useRouter } from "next/router";
import Sidebar from "../../components/layout/Sidebar";
import { supabase } from "../../supabaseClient";
import { NextPage } from "next";
import BlogCard from "../../components/layout/BlogCard";
import Navbar from "../../components/landing/Navbar";
import { Search } from "iconoir-react";
import { InferGetStaticPropsType, GetStaticProps } from "next";
import Head from "next/head";

type Props = {
  posts?: Posts[];
  userAgent?: string;
  page?: number;
  count?: number;
};

interface Posts {
  id: number;
  title: string;
  entry_img: string;
  description: string;
  editDate: string;
  releaseDate: string;
  categories: Categories[];
}

interface Categories {
  value: string;
  label: string;
}

const Posts: NextPage<Props> = ({ posts, page, count }) => {
  const [categories, setCategories] = useState<Categories[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Posts[]>([]);
  const searchRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const totalPages = Math.ceil((count as number) / 10);
  const router = useRouter();

  console.log(posts);
  const fetchCategories = async () => {
    const response = await supabase
      .from<Categories>("blog_categories")
      .select("*");
    setCategories(response.data!);
  };

  const handleSearchOnEnter = (e: React.KeyboardEvent) => {
    const selectedCategory: Categories = {
      label: categoryRef.current!.value,
      value: categoryRef.current!.value,
    };
    if (e.key === "Enter") {
      if (searchRef.current?.value !== null) {
        const filteredPost = posts!.filter(
          (post) =>
            post.title
              .toLowerCase()
              .includes(searchRef.current!.value.toLowerCase()) ||
            post.description
              .toLowerCase()
              .includes(searchRef.current!.value.toLowerCase()) ||
            JSON.stringify(post.categories).includes(
              JSON.stringify(selectedCategory)
            )
        );
        setFilteredPosts(filteredPost);
      }
    }
  };

  const handleSearchOnClick = () => {
    const selectedCategory: Categories = {
      label: categoryRef.current!.value,
      value: categoryRef.current!.value,
    };
    if (searchRef.current?.value !== null) {
      let filteredPost = posts!.filter(
        (post) =>
          post.title
            .toLowerCase()
            .includes(searchRef.current!.value.toLowerCase()) ||
          post.description
            .toLowerCase()
            .includes(searchRef.current!.value.toLowerCase()) ||
          JSON.stringify(post.categories).includes(
            JSON.stringify(selectedCategory)
          )
      );

      setFilteredPosts(filteredPost);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <Head>
        <title>Blog - 3D Factory MX</title>
        <meta
          name="description"
          content="Todos los artículos respecto a las últimas novedades de la industria y proyectos más recientes en 3D Factory MX."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ backgroundColor: "#f5f5f5" }}>
        <Sidebar>
          <main className="container">
            <h2 className="font-semibold text-4xl text-center my-12">
              Todos los articulos
            </h2>

            <div className="flex flex-row w-full align-middle items-center">
              <input
                type="text"
                name="search"
                id=""
                placeholder="Buscar"
                className="flex basis-10/12 py-1 px-2 my-2 shadow-md rounded-sm ml-1"
                ref={searchRef}
                onKeyPress={handleSearchOnEnter}
              />
              <Search
                className="relative bg-white h-8 shadow-md rounded-sm hover:animate-bounce"
                onClick={handleSearchOnClick}
              />
              <select
                name="categories"
                id="categories"
                className="flex basis-2/12 py-1 px-2 my-2  mx-1 bg-transparent"
                ref={categoryRef}
              >
                <option selected disabled hidden value="Categorias">
                  Categorias
                </option>
                {categories &&
                  categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.value}
                    </option>
                  ))}
              </select>
            </div>
            <div className="lg:grid lg:grid-cols-3 lg:gap-12 flex flex-col">
              {filteredPosts.length === 0
                ? posts &&
                  posts!.map((post) => (
                    <BlogCard
                      key={post.id}
                      id={post.id}
                      entry_img={post.entry_img}
                      title={post.title}
                      description={post.description}
                      date={post.editDate ? post.editDate : post.releaseDate}
                      categories={post.categories}
                    />
                  ))
                : filteredPosts.map((post) => (
                    <BlogCard
                      key={post.id}
                      id={post.id}
                      title={post.title}
                      description={post.description}
                      date={post.editDate ? post.editDate : post.releaseDate}
                      categories={post.categories}
                      entry_img={post.entry_img}
                    />
                  ))}
            </div>
            <div className="my-10 w-full flex items-center justify-center">
              {page! - 1 >= 0 ? (
                <button
                  className="flex font-semibold-text-lg text-center mt-3 mb-2 px-3 py-1 rounded-md border-2 text-blue-500 border-blue-500 bg-transparent hover:bg-blue-800 hover:border-blue-800 hover:text-white transition ease-in w-fit"
                  onClick={() => router.push(`/blog?page=${page! - 1}`)}
                >
                  Anterior
                </button>
              ) : (
                ""
              )}
              {page! + 1 < totalPages ? (
                <button
                  className="flex font-semibold-text-lg text-center mt-3 mb-2 px-3 py-1 rounded-md border-2 text-blue-500 border-blue-500 bg-transparent hover:bg-blue-800 hover:border-blue-800 hover:text-white transition ease-in w-fit"
                  onClick={() => router.push(`/blog?page=${page! + 1}`)}
                >
                  Siguiente
                </button>
              ) : (
                ""
              )}
            </div>
          </main>
        </Sidebar>
      </div>
    </>
  );
};

const getPagination = (page: number, size: number) => {
  const limit = size ? +size : 3;
  const from = page ? page * limit : 0;
  const to = page ? from + size - 1 : size - 1;

  return { from, to };
};

Posts.getInitialProps = async ({ query: { page = 0 } }) => {
  const { from, to } = getPagination(page as number, 10);
  const response = await supabase
    .from<Posts>("blog")
    .select("*", { count: "exact" })
    .order("id", { ascending: true })
    .range(from, to);
  const data = response.data!;
  return {
    posts: data,
    count: response.count as number,
    page: +page as number,
  };
};

export default Posts;
