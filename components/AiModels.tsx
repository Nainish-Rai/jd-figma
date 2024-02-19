import React from "react";
import { DropMenuCustom } from "./ui/DropMenuCustom";
import ModelsList from "./ModelsList";

type Props = {};

function AiModels({}: Props) {
  return (
    <div className="w-3/4 h-full bg-[#26252A] p-2 rounded-xl ">
      <div className="bg-[#201F23] rounded-xl p-4 pb-2">
        {" "}
        <h3 className="text-xl font-semibold">AI Models</h3>
        <div className="flex mt-4 gap-4">
          <DropMenuCustom />
          <DropMenuCustom />
          <DropMenuCustom />
        </div>
        <div className="w-full text-xs  flex justify-between mt-4 px-6">
          <div className=" text-white/60">Model</div>
          <div className="flex justify-between gap-14">
            <div className=" text-white/60">Version</div>
            <div className=" text-white/60">License</div>
            <div className=" text-white/60">Contributors</div>
            <div className=" text-white/60">Rating</div>
          </div>
        </div>
      </div>
      <div>
        <ModelsList />
      </div>
    </div>
  );
}

export default AiModels;
