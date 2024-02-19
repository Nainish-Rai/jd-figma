import React from "react";

type Props = {
  model: string;
  version: string;
  license: string;

  rating: number;
};

function ModelListItem({
  model,
  version,
  license,

  rating,
}: Props) {
  return (
    <div className="w-full text-xs  flex justify-between mt-4 px-10">
      <div className=" text-white/60">{model}</div>
      <div className="flex justify-between gap-14">
        <div className=" text-white/60">{version}</div>
        <div className=" text-white/60">{license}</div>
        <div className=" text-white/60">Contributors</div>
        <div className=" text-white/60">{rating}</div>
      </div>
    </div>
  );
}

export default ModelListItem;
