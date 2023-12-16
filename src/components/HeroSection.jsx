import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { BackgroundCircles } from "./BackgroundCircles";
import { MenuButtons } from "./MenuButtons";
export const HeroSection = () => {
  const [text, helper] = useTypewriter({
    words: [
      "Hi, The Name's Irfath Chowdhury",
      "Guy-Who-loves-Chips.tsx",
      "<ButLovesToCodeMore/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://lh3.googleusercontent.com/pw/ABLVV875kYBSe4LOqF5ziO3o1LU6FEe3S4UFnyy25RLo8jAdXYA3V-cBAMGCH5vZy_sEjtRtCfE1sz5tisysO7O_7SRDf7639u5Otbic-hz0Fs0QXs-599OhqnWYsor1fdQx5Wmkt3B7zEsO-QkGF0_mv17QWdX34kvBg83OBdhC0FIivTLcOD8Q4apyPF_GfJtP9vGPr-v0sWKEpHpspkNyIcDpN-GZb3q-MGMe7GU-G6HeNX9acxIxE0m80wdNTL8BEKfylXd8N_nhN2975YaRjfqO2pL1f_6Tzx7JUv-4ye-N2xpqVp-tlxXJaVUjxihmgcdv0NNCN1367OIZqAI-gqjbmS7BgW_f9JecIuoapp4IBQGfB7sEwrVATmxOMQtcxGBwu1zT6srZOOb8KVpuvpUZKWRCfk8fw2ty6TqBjrx1o2ZR0U87tt_7a0TtRObAG7Gni_JXAnfAjBBjjL1lKvU2Z4hvBfUx7xkBzp0N3OA1qA_4TjGtf5vG5mxf_LCfESCeicyiKECoOzqdAnWm2oT--EPK7n2357zoqUi-ywXAu8M0MNfuIkHrDYj7KGMn-4hGr3yJeBfFWRApgU_d4_A5R8eRtkyUuSqf0UpkehIXUm_q_-wROh6AhoK4xZn909ne61Xd390RFx0DtRn7A18aZmJDO9IHPTajHnY-0GMskf724iveJ9HZ6Oum1IuyNgAk-vrO_hsOkJOqhUIjcH89lV1dYZ2HsZaevRNQ7iT3Xsohk4eXDpOX38CjwktnNWhwIHtKybF4TZxR-HPbbQu_LlyNk1lnjiWs2LTX9BAyJJevV3WGXOtAgOCxvHrSjlGN7swad3ovpCN_xCx0tLH6a3V8wU1K6hwsAMiCzt7uTYwvW74yPiQZ1WCgXNMpRHhgIWZkg2B3ajYxAmXNRZjv5GV46T8ZFvlppvah=w419-h629-s-no-gm?authuser=0"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[8px]">
          Software Developer
        </h2>
        <h1 className="text-4xl lg:text-5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <MenuButtons />
      </div>
    </div>
  );
};
