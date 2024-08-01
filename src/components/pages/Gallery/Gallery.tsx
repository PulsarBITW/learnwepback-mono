import React, { ReactNode } from "react";

import AwardsPng from "@/assets/awardsPng.png";
import AwardsJpg from "@/assets/awardsJpg.jpg";
import AwardsJpeg from "@/assets/awardsJpeg.jpeg";
import AwardsSvg from "@/assets/awardsSvg.svg";
import * as classes from "./styled.module.css";

interface ImageItem {
  src: ReactNode;
  title?: string;
}

const Gallery = () => {
  return (
    <div>
      <h2>{"Обработка изображений лоадерами"}</h2>
      <div className={classes.imageListContainer}>
        {imageList.map((el, index) => (
          <Card key={index} {...el} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ src, title }: ImageItem) => {
  return (
    <div>
      <h3 className={classes.title}>{title ? title : "Без названия"}</h3>
      {typeof src === "string" ? <img src={src} /> : <>{src}</>}
    </div>
  );
};

const imageList = [
  {
    src: AwardsPng,
    title: "Картинка Png",
  },
  {
    src: AwardsJpg,
    title: "Картинка Jpg",
  },
  {
    src: AwardsJpeg,
    title: "Картинка Jpeg",
  },
  {
    src: <AwardsSvg width={250} height={250} />,
    title: "Картинка Svg",
  },
];

export default Gallery;
