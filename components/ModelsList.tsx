import React from "react";
import ModelListItem from "./ModelListItem";

type Props = {};

const ListContent = [
  {
    model: "Chatgpt",
    version: "v2.1",
    license: "MIT",
    rating: 4,
  },
  {
    model: "Chatgpt",
    version: "v2.1",
    license: "MIT",
    rating: 4,
  },
  {
    model: "Chatgpt",
    version: "v2.1",
    license: "MIT",
    rating: 4,
  },
  {
    model: "Chatgpt",
    version: "v2.1",
    license: "MIT",
    rating: 4,
  },
  {
    model: "Chatgpt",
    version: "v2.1",
    license: "MIT",
    rating: 4,
  },
  {
    model: "Chatgpt",
    version: "v2.1",
    license: "MIT",
    rating: 4,
  },
];

function ModelsList({}: Props) {
  return (
    <div className="w-full h-full overflow-scroll scrollbar-hide">
      {ListContent.map((item, index) => (
        <ModelListItem {...item} key={index} />
      ))}
    </div>
  );
}

export default ModelsList;
