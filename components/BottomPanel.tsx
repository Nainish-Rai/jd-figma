/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {};

function BottomPanel({}: Props) {
  return (
    <div className="w-full h-full bg-[#26252A] flex p-4 rounded-xl ">
      <div className="w-full h-full rounded-xl overflow-hidden">
        <img
          src="/bottomimg.png"
          alt="botomimg"
          className=" w-2/5 h-full object-cover rounded-2xl p-2 "
        />
      </div>
      <div className=" ">
        <img src="/radar.png" alt="rdr" className="w-16 h-16" />
      </div>
    </div>
  );
}

export default BottomPanel;
