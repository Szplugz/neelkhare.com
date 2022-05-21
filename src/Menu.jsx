import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="left-box flex items-center justify-center fixed top-0 left-0 h-screen w-1/2 m-0 bg-black">
      <div className="menu-box flex flex-col w-480">
        <h className="name text-lightpink font-forma relative flex items-center font-[550] text-10 h-12.7">
          {" "}
          Neel Khare{" "}
        </h>
        <li className="bits text-eggshell font-forma relative flex items-center font-[550] text-10 h-12.7">
          <a href="#">
            <MenuItem text={"Bits"} />
          </a>
        </li>
        <li className="intrigue text-eggshell font-forma relative flex items-center font-[550] text-10 h-12.7">
          <a href="#">
            <MenuItem text={"Intrigue"} />
          </a>
        </li>
        <li className="inspiration text-eggshell font-forma relative flex items-center font-[550] text-10 h-12.7">
          <a href="#">
            <MenuItem text={"Inspiration"} />
          </a>
        </li>
        <li className="project text-eggshell font-forma relative flex items-center font-[550] text-10 h-12.7">
          <a href="#">
            <MenuItem text={"Project"} />
          </a>
        </li>
        <li className="menu-item">
          <a
            href="https://drive.google.com/file/d/1Opg8P9ej8cd1tPoKEsSkcYo7F4J3Uz63/view?usp=sharing"
            target="_blank"
          >
            <MenuItem text={"Resumé"} />
          </a>
        </li>
      </div>
    </div>
  );
};

const MenuItem = ({ text }) => <div>{text}</div>;

export default Menu;
