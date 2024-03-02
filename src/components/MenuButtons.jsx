import React from "react";

export const MenuButtons = () => {
  return (
    <>
      <div className="pt-5">
        <a href="#about">
          <button className="heroButton">About</button>
        </a>
        <a href="#experience">
          {" "}
          <button className="heroButton">Experience</button>
        </a>
        <a href="#skills">
          <button className="heroButton">Skills</button>
        </a>
        <a href="#projects">
          <button className="heroButton">Projects</button>
        </a>
      </div>
    </>
  );
};
