import React from "react";
import { motion } from "framer-motion";
import { ExperienceArray } from "../Content/ExperienceArray";
export const ExperienceCard = () => {
  return (
    <>
      {ExperienceArray.map((item, index) => (
        <>
          <article className="flex flex-row rounded-lg items-center space-y-7 flex-shrink-0 w-full snap-center bg-[#292929] p-10  cursor-pointer transition-opacity duration-200">
            <div className="w-3/12">
              <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="object-cover object-center"
                src={item.logo}
                alt=""
              />
              <h4 className="text-4xl font-light">{item.occupation}</h4>
              <p className="font-bold text-2xl mt-1">{item.company}</p>
              <p>Start work 02/2022 end 12/2022 </p>
            </div>
            <div className=" w-3/4">
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
