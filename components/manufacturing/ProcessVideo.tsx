import React from "react";

type Props = {
  processVideo: ProcessVideo;
};

type ProcessVideo = {
  videoTitle: string;
  videoText: string;
};

const ProcessVideo = (props: Props) => {
  return (
    <div className="bg-gray-600 font-Poppins text-white">
      <div className="container container-m-p">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2">
          <div className="video"></div>
          <div>
            <h2 className="font-semibold text-2xl">
              {props.processVideo.videoTitle}
            </h2>
            <p>{props.processVideo.videoText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessVideo;
