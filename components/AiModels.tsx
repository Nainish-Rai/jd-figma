import React from "react";
import { DropMenuCustom } from "./ui/DropMenuCustom";

type Props = {};

function AiModels({}: Props) {
  return (
    <div className="w-3/4 h-full bg-[#26252A] p-2 rounded-xl ">
      <div className="bg-[#201F23] rounded-xl p-4">
        {" "}
        <h3 className="text-xl font-semibold">AI Models</h3>
        <div className="flex mt-4 gap-4">
          <DropMenuCustom />
          <DropMenuCustom />
          <DropMenuCustom />
        </div>
      </div>
    </div>
  );
}

export default AiModels;
