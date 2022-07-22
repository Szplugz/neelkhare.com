import { render } from "react-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import styles from "./Photography.css";

// const gallery = [
//   {
//     id: 0,
//     url: "https://lh3.googleusercontent.com/3W4t10o4KNvqGdsngkx4ewtuzLXU6aeSz99S6PINLZdbOfCG-fxPfJubq7PE8iApddu7cJEIuq1Ry2D2jZiHJn5n_Yq7j2L0zc0mUDFMSiJhJQ3J7776tNE2WwSA9PHqtUN8riqqpQ=w2400",
//     content: "Image 1",
//   },
//   {
//     id: 1,
//     url: "https://lh3.googleusercontent.com/lcK4G7A1BF9hUxZ2z418nytbJBzd207B81Xqncde8uX00bSOLh_At_RBHOQxn-di389bUueYMpOONGHZPYTbOaP2iyikxcNMAfAtvU382WdvdgyFXXZ7pC6sSrlbaekNTh9al7R-qQ=w2400",
//     content: "Image 2",
//   },
// ];

const images = [
  "https://lh3.googleusercontent.com/3W4t10o4KNvqGdsngkx4ewtuzLXU6aeSz99S6PINLZdbOfCG-fxPfJubq7PE8iApddu7cJEIuq1Ry2D2jZiHJn5n_Yq7j2L0zc0mUDFMSiJhJQ3J7776tNE2WwSA9PHqtUN8riqqpQ=w2400",
  "https://lh3.googleusercontent.com/lcK4G7A1BF9hUxZ2z418nytbJBzd207B81Xqncde8uX00bSOLh_At_RBHOQxn-di389bUueYMpOONGHZPYTbOaP2iyikxcNMAfAtvU382WdvdgyFXXZ7pC6sSrlbaekNTh9al7R-qQ=w2400",
];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Photography = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="photography-page flex flex-col bg-eggshell min-h-screen w-screen">
      <div className="photography-navbar flex flex-row h-[10%] font-forma text-lg justify-between py-[5vh] px-[5vw]">
        <p className="photography-navbar-item">Home</p>
        <p className="photography-navbar-item">Instagram</p>
        <p className="photography-navbar-item">Contact</p>
      </div>
      <div className="photography-header flex h-[75vh] max-w-[100vw]">
        <div
          className="left fixed h-screen w-[25vw] left-0 z-10 bg-transparent"
          onClick={() => paginate(-1)}
        ></div>
        <div
          className="right fixed h-screen w-[25vw] right-0 z-10 bg-transparent"
          onClick={() => paginate(1)}
        ></div>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            className="w-auto max-w-[300px]"
            key={page}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Photography;
