import React from "react";
import { Markup } from "interweave";

type Props = {
  post: Post;
};

type Post = {
  title: string;
  content: string;
  releaseDate: string;
  editDate: string;
  categories: Object[];
};

const Article = (props: Props) => {
  console.log(props.post);
  return (
    <div className="container !lg:px-72 py-12">
      <h2 className="text-center font-semibold text-4xl mb-1">
        {props.post.title}
      </h2>
      <div className="w-full mb-5 lg:inline-block justify-center flex lg:px-72">
        {props.post.releaseDate && (
          <span className="font-medium text-sm text-gray-700 float-left">
            Publicado el {props.post.releaseDate}
          </span>
        )}
        {props.post.editDate && (
          <span className="font-medium text-sm text-gray-700 ml-5 float-right">
            Editado el {props.post.editDate}
          </span>
        )}
      </div>
      <div className="font-medium text-md flex justify-center">
        <article className="prose lg:prose-xl">
          <Markup content={props.post.content} />
        </article>
      </div>
    </div>
  );
};

export default Article;
