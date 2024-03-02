import React from "react";
import { SocialIcon } from "react-social-icons";

export const Header = () => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 ">
      <div className="flex flex-row items-center">
        <SocialIcon
          url="https://www.facebook.com/irfath.98/"
          fgColor="gray"
          bgColor="transparent"
          className="h-24 w-24"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/irfath-chowdhury-b2754a161/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/irfath_chowdhury/"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          href="https://wa.me/01941637656"
          url="https://whatsapp.com"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>
      <a href="#contact">
        <div className="flex flex-row items-center text-gray-300 cursor-pointer">
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase text-sm text-gray-400 hidden md:block">
            Get in touch
          </p>
        </div>
      </a>
    </header>
  );
};
