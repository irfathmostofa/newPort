import React from "react";
import { motion } from "framer-motion";
export const ExperienceCard = () => {
  return (
    <>
      <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full snap-center bg-[#292929] p-20 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200">
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-32 h-32 rounded-full md:w-[200px] md:h-[200px] object-cover object-center"
          src="https://media.licdn.com/dms/image/C510BAQHc4LQ5wQmbog/company-logo_200_200/0/1630578342049/akij_group_logo?e=1710374400&v=beta&t=HiP8wiMDhSYiDVXo3_U87cxWLBYXcCBDid6vf5W6TfE"
          alt=""
        />
        <div className="px-0 md:px-10">
          <h4 className="text-4xl font-light">Server Administrator</h4>
          <p className="font-bold text-2xl mt-1">mPair Technologies</p>
          <div className="flex space-x-2 my-2">
            <img
              className="h-10 w-10 rounded-full"
              src="https://w7.pngwing.com/pngs/452/24/png-transparent-js-logo-node-logos-and-brands-icon.png"
              alt=""
            />
            <img
              className="h-10 w-10 rounded-full"
              src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
              alt=""
            />
            <img
              className="h-10 w-10"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
              alt=""
            />
            <img
              className="h-10 w-10 rounded-full"
              src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
              alt=""
            />
            <img
              className="h-10 w-10 "
              src="https://vuejs.org/images/logo.png"
              alt=""
            />
          </div>

          <p>Start work---end </p>
          <ul className="list-disc space-y-4 ml-5 text-lg">
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        </div>
      </article>
    </>
  );
};
