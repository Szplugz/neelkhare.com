import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const NavbarItem = ({ text, color, invalid }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const leftBracketVariants = {
    hover: {
      x: -5,
      color: "#08090A",
    },
    initial: {
      x: 0,
      color: "#9A4C5C",
    },
  };
  const rightBracketVariants = {
    hover: {
      x: 5,
      color: "#08090A",
    },
    initial: {
      x: 0,
      color: "#9A4C5C",
    },
  };

  return invalid ? (
    <div
      className="flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        variants={leftBracketVariants}
        animate={isHovered ? "hover" : "initial"}
        transition={{ ease: "easeInOut", duration: 0.25 }}
      >
        [
      </motion.div>
      <p
        className={
          "text-" +
          (color ? color : "gray-600") +
          " font-inter relative flex items-center font-[400] text-xl transition duration-250 ease-in-out leading-tight"
        }
      >
        {text}
      </p>
      <motion.div
        variants={rightBracketVariants}
        animate={isHovered ? "hover" : "initial"}
        transition={{ ease: "easeInOut", duration: 0.25 }}
      >
        ]
      </motion.div>
    </div>
  ) : (
    <div
      className="flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        variants={leftBracketVariants}
        animate={isHovered ? "hover" : "initial"}
        transition={{ ease: "easeInOut", duration: 0.25 }}
      >
        [
      </motion.div>
      <p
        className={
          "text-" +
          (color ? color : "almostBlack") +
          " font-inter relative flex items-center font-[400] text-xl hover:text-chinaRose transition duration-250 ease-in-out leading-tight"
        }
      >
        {text}
      </p>
      <motion.div
        variants={rightBracketVariants}
        animate={isHovered ? "hover" : "initial"}
        transition={{ ease: "easeInOut", duration: 0.25 }}
      >
        ]
      </motion.div>
    </div>
  );
};

export default NavbarItem;
