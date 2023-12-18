import React from "react";
import { motion } from "framer-motion";
import akij from "../assets/images/akij.png";
import { ExperienceArray } from "../Content/ExperienceArray";
export const NewExpCard = () => {
  return (
    <>
      {ExperienceArray.map((item, index) => (
        <>
          <article className="flex flex-row w-100 snap-center bg-[#292929] p-20 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200">
            <div className="w-2/4">
              <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:w-[300px] md:h-[300px] object-cover object-center "
                src={item.logo}
                alt=""
              />
            </div>
            <div className="px-0 md:px-10 w-full">
              <h4 className="text-4xl font-light">IT Officer</h4>
              <p className="font-bold text-2xl mt-1">Akij group Ltd.</p>
              {/* <div className="flex space-x-2 my-2">
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
        </div> */}

              <p>Start work 02/2022 end 12/2022 </p>
              <ul className="list-disc space-y-1 ml-5 text-lg">
                <li>
                  {" "}
                  Provided timely and accurate updates on daily sales
                  activities, offering valuable insights to aid decision-making
                  processes.
                </li>
                <li>
                  {" "}
                  Monitored the activities of field officers, ensuring adherence
                  to company policies and standards, and optimizing field
                  operations.
                </li>
                <li>
                  {" "}
                  Oversaw and analyzed sales performance metrics, identifying
                  areas for improvement and implementing strategies to enhance
                  sales efficiency
                </li>
                <li>
                  {" "}
                  Utilized analytical skills to interpret data trends, providing
                  actionable recommendations for improving business processes
                  and decision-making.
                </li>
                <li>
                  Managed the approval process for sales orders, ensuring
                  accuracy and compliance with company policies.
                </li>
                <li>
                  Contributed to effective inventory management, optimizing
                  stock levels, and ensuring a balance between supply and
                  demand. These detailed descriptions will help prospective
                  employers understand the depth and scope of your
                  responsibilities and accomplishments in each role.
                </li>
                <li>
                  {" "}
                  Managed and maintained hardware resources, troubleshooting and
                  resolving technical issues to ensure uninterrupted IT
                  operations.
                </li>
              </ul>
            </div>
          </article>
        </>
      ))}
    </>
  );
};
