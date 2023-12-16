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
        <a href="#">
          <button className="heroButton">Skills</button>
        </a>
        <a href="#">
          <button className="heroButton">Projects</button>
        </a>
      </div>
    </>
  );
};
