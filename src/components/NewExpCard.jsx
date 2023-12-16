import React from "react";
import { motion } from "framer-motion";
export const NewExpCard = () => {
  return (
    <article className="flex flex-row">
      <div>
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-32 h-32 rounded-full md:w-[200px] md:h-[200px] object-cover object-center"
          src="https://media.licdn.com/dms/image/C510BAQHc4LQ5wQmbog/company-logo_200_200/0/1630578342049/akij_group_logo?e=1710374400&v=beta&t=HiP8wiMDhSYiDVXo3_U87cxWLBYXcCBDid6vf5W6TfE"
          alt=""
        />
      </div>
      <div>description</div>
    </article>
  );
};
