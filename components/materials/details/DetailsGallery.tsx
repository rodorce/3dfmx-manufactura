import Image from "next/image";
import React from "react";

type Props = {
  gallery: Gallery;
};

type Gallery = {
  img: string[];
};

const DetailsGallery = (props: Props) => {
  const images = props.gallery.img.map((img, index) => (
    <div
      key={index}
      className="w-full rounded hover:shadow-2xl flex justify-center"
    >
      <img src={img} alt="gallery" />
    </div>
  ));

  return (
    <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3 animate__animated animate__fadeIn animate__delay-1s">
      {images}
    </div>
  );
};

export default DetailsGallery;
