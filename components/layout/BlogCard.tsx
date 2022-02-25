import React from "react";
import router from "next/router";

type Props = {
  id: number;
  title: string;
  description: string;
  date: string;
  categories: Categories[];
  entry_img: string;
};

type Categories = {
  value: string;
  label: string;
};

const BlogCard = (props: Props) => {
  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm">
      {/* <a href="#"> */}
      <img className="rounded-t-lg" src={props.entry_img} alt="card-img" />
      {/* </a> */}
      <div className="p-5">
        {/* <a href="#"> */}
        <h5 className="text-gray-900 font-bold text-2xl tracking-tight">
          {props.title}
        </h5>
        <h2 className="text-gray-600 font-medium text-sm tracking-tight mb-4">
          {props.date}
        </h2>
        {/* </a> */}
        <p className="font-normal text-gray-700 mb-3">{props.description}</p>
        <div className="flex flex-col justify-start">
          <div className="flex flex-row">
            {props.categories &&
              props.categories.map((category) => (
                <div
                  key={category.value}
                  className="ml-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 rounded-full bg-white text-gray-700 border"
                >
                  {category.value}
                </div>
              ))}
          </div>

          <button
            className="flex font-semibold-text-lg text-center mt-3 mb-2 px-3 py-1 rounded-md bg-blue-500 hover:bg-blue-800 text-white w-fit"
            onClick={() => router.push(`/blog/${props.id}`)}
          >
            Leer más
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
