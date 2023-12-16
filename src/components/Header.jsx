import React from "react";
import { SocialIcon } from "react-social-icons";

export const Header = () => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 ">
      <div className="flex flex-row items-center">
        <SocialIcon
          url="https://facebook.com"
          fgColor="gray"
          bgColor="transparent"
          className="h-24 w-24"
        />
        <SocialIcon
          url="https://youtube.com"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://instagram.com"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://whatsapp.com"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>
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
    </header>
  );
};
