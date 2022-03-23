import { Markup } from "interweave";
import React from "react";

type OtherInfo = {
  other_benefits_title: string;
  other_benefits_content: string;
  other_uses_title: string;
  other_uses_content: string;
  more_info_title: string;
  more_info_content: string;
};

type Props = {
  otherInfo: OtherInfo;
};

const ProcessOtherInfo = (props: Props) => {
  return (
    <>
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-2 px-10 mb-5">
        <div className="benefits">
          <h2 className="font-semibold text-xl mb-4">
            {props.otherInfo.other_benefits_title}
          </h2>
          <Markup content={props.otherInfo.other_benefits_content} />
        </div>
        <div className="uses">
          <h2 className="font-semibold text-xl mb-4">
            {props.otherInfo.other_uses_title}
          </h2>
          <Markup content={props.otherInfo.other_uses_content} />
        </div>
      </div>
      <div className="moreInfo w-full gap-2 px-10 my-12 lg:my-32">
        <h2 className="font-semibold text-xl lg:text-center mb-4">
          {props.otherInfo.more_info_title}
        </h2>

        <article>
          <Markup content={props.otherInfo.more_info_content} />
        </article>
      </div>
    </>
  );
};

export default ProcessOtherInfo;
