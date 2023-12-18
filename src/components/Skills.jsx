import React from "react";
import { Skill } from "./Skill";

export const Skills = () => {
  return (
    <div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-14 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-28 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>
      <div className="grid md:grid-cols-5 grid-cols-3 gap-3 absolute top-[160px]">
        <Skill />
      </div>
    </div>
  );
};
