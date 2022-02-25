import React from "react";
import BlogCard from "../layout/BlogCard";
import Router, { useRouter } from "next/router";
interface Post {
  id: number;
  entry_img: string;
  title: string;
  description: string;
  releaseDate: string;
  categories: Category[];
}

interface Category {
  label: string;
  value: string;
}
type Props = {
  post: Post[];
};

const Blog = ({ post }: Props) => {
  return (
    <div className="bg-gray-100">
      <div className="container container-m-p">
        <div className="flex flex-col gap-12 items-center mx-auto">
          <div className="title flex flex-col gap-4">
            <h2
              className="md:leading-[5rem] lg:leading-[4rem] text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center md:text-center font-semibold lg:pl-32 lg:pr-32 lg:mr-32 lg:ml-32 mt-5"
              data-aos="zoom-in"
            >
              Revisa nuestro <span className="text-bookmark-purple">blog</span>{" "}
              y últimos <span className="text-bookmark-purple">proyectos</span>
            </h2>
            <p
              className="lg:pl-32 lg:pr-32 lg:mr-32 lg:ml-32 text-gray-600 text-center"
              data-aos="fade-in"
              data-aos-delay="300"
            >
              Conoce más sobre las últimas novedades de la industria.
            </p>
          </div>
          <div
            className="flex flex-col lg:flex-row flex-wrap gap-7"
            data-aos="fade-in"
            data-aos-delay="500"
          >
            {post &&
              post.map((p) => (
                <BlogCard
                  key={p.id}
                  id={p.id}
                  title={p.title}
                  description={p.description}
                  date={p.releaseDate}
                  categories={p.categories}
                  entry_img={p.entry_img}
                />
              ))}
          </div>
          <button
            className="btn btn-purple hover:bg-black hover:text-white"
            data-aos="fade-in-up"
            data-aos-delay="500"
            onClick={() => Router.push("/blog")}
          >
            Ver más artículos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
