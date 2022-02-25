import React from "react";

type Props = {
  icon: React.ReactNode;
  title: string;
  content: string;
};

const WhyUsCard = (props: Props) => {
  return (
    <div className="flex flex-row bg-white shadow-lg rounded-xl my-6">
      <div className="flex justify-center items-center basis-1/3 bg-blue-700 rounded-tl-xl rounded-bl-xl">
        {props.icon}
      </div>
      <div className="basis-2/3 align-middle p-5">
        <h2 className="lg:text-2xl text-xl font-bold">{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default WhyUsCard;
