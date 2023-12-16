import React from "react";
import { motion } from "framer-motion";
export const About = () => {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase md:tracking-[8px] tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://lh3.googleusercontent.com/pw/ABLVV85LygZUdc8YqEUsq4VVG8x7N0uECpY_OB8-DAfjgAybqhQhGoi3uQE9T2_9kAk2vyWZvShW6l9MF_avWZTNhQo-7VdqK0PByAvAt_m8-XNghKlXOi1OpzF7Kt_WQXod4E9AxQk8sSkHeHAWl4ez8bI2agB8uhUvfKoeYjcih46jvVowF0id-jTWVZSYbriDnfmch0kDHQtZd-0RZAF21SiOG3Gxp6_J5UqO0f_xh6uwHRFzmOBr4Wl6yb3St-oNzjrucf2Kusq0hWWG-5G1wGOv27Y2XL2U4rZC5Nad2wDF8QqKwsHGL33O5yygID7n9t6qWiuiCMz04TiVcrewd7VRpImFX15EI7I4K2arZ7q3EmivhRjN7MlXr216FeGz5qlCe7-Lg-YVMh8VY_-hzSw-aOV6Bm_kn1SSv9KLM0F6oMiX-dX7GZAgjRcWyt_oUT-6raX9_zj96pP4v4UpdUbUz3_Ckf97Ku-rPjJh3px0JAnRt-G5c57eiqScmFt5CNK7x50G2K8oyP0KkqdK01bf6ET2LlHcisQpUrbljWYWsKQE_xGu7TmDKCcGG_mw4EFDrzIpaKJi636Gd1tnCXa47-6ia5JIvZ4MF3OXu1Gti-4wG8GTw__INMBD6RnwWSbqiXE53QKGqlzGfBmlOW9nFMwFF6xrYLThYovwPt0NUxZeinSjqDALTjztY-ceIy3IeVMj43sB-nvrzwNdUaCaZuuOhsHL27h6Uvx4j00jO0ZbVVofZ2Cn4vcP_Nw_5Jm_vGyfNezTeNSPZ9t9xuxbN9YIrEPFUF5387lXp9dsHt8tZ0OaBnb1KHHYKtgYUkQ8d69LVcxb8Uw0-WkFYaxc4FG5_oUrSX1eKwA1VbHr3xS5PsAh5mVg9wnvcGyMiHm4Tzx4I6Jo2VUYCWVKPg1mB7sJvRoYeTpHW6sc=w419-h629-s-no-gm?authuser=0"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Here is a little background</h4>
        <p className="text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci id
          commodi delectus rem ratione incidunt sint reiciendis eaque nihil.
          Consectetur ipsa ullam perspiciatis veritatis pariatur dolor ipsam
          itaque quidem quo? Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Adipisci id commodi delectus rem ratione incidunt sint
          reiciendis eaque nihil. Consectetur ipsa ullam perspiciatis veritatis
          pariatur dolor ipsam itaque quidem quo?Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Adipisci id commodi delectus rem ratione
          incidunt sint reiciendis eaque nihil. Consectetur ipsa ullam
          perspiciatis veritatis pariatur dolor ipsam itaque quidem quo? Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Adipisci id
          commodi delectus rem ratione incidunt sint reiciendis eaque nihil.
          Consectetur ipsa ullam perspiciatis veritatis pariatur dolor ipsam
          itaque quidem quo?
        </p>
      </div>
    </div>
  );
};
