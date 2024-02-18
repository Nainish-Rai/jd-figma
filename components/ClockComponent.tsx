/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {};

function ClockComponent({}: Props) {
  return (
    <div className="w-1/4 h-full rounded-xl overflow-hidden ">
      <img src="/clockbg.png" alt="clock" className="w-full h-full " />
    </div>
  );
}

export default ClockComponent;
