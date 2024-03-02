import React from "react";
import worklopedia from "../assets/proeject-image/worklopedia.png";
import { projectsArray } from "../Content/projectArray";
export const Projects = () => {
  return (
    <div className="flex md:relative flex-col mt-40 md:mt-0 text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 md:min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="md:absolute top-14 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7Ab0A]/80">
        {projectsArray.map((item) => (
          <>
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center md:justify-center p-10 md:p-44 h-screen">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-0 items-center">
                <div className="">
                  <h4 className="text-4xl font-semibold mb-5">{item.name}</h4>
                  <p>{item.description}</p>
                </div>

                <div className="pl-2">
                  <img src={item.image} alt="" />
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
};
