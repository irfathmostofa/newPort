import React from "react";
import { motion } from "framer-motion";
import { ExperienceArray } from "../Content/ExperienceArray";
export const ExperienceCard = () => {
  return (
    <>
      {ExperienceArray.map((item, index) => (
        <>
          <article
            key={index}
            className="flex md:flex-row flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full snap-center bg-[#292929] md:p-10 p-4  cursor-pointer transition-opacity duration-200"
          >
            <div className="md:w-3/12 w-full">
              <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:object-cover md:object-center  w-32 md:w-auto"
                src={item.logo}
                alt=""
              />
              <h4 className="md:text-4xl text-3xl font-light">
                {item.occupation}
              </h4>
              <p className="font-bold md:text-2xl text-md mt-1">
                {item.company}
              </p>
              <p>Start work 02/2022 end 12/2022 </p>
            </div>
            <div className=" md:w-3/4 w-full">
              <h3 className="font-bold text-lg">Responsibility</h3>
              <ul className="list-disc space-y-1 ml-5 text-lg">
                {item.work.map((i) => (
                  <>
                    <li> {i.title}</li>
                  </>
                ))}
              </ul>
            </div>
          </article>
        </>
      ))}
    </>
  );
};
