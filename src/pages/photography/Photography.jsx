import { render } from "react-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import styles from "./Photography.css";
import chistar from "../../utils/CHISTARCHISTAR.svg";

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
  "https://lh3.googleusercontent.com/ozSoDj0Q6v_r9J59uCtCRX2M5M-BfQYUJjUGyOTnz15z3TUFlWJjcr5MOE4DrC8OuApLC-JcGSdENK5AZ4f8Eq6Exx-YdrFmCnN4u2J7oNMaJ1hAo1mQ4cJTUFXOyeg2zlzWpOkfhg=w2400",
  "https://lh3.googleusercontent.com/wEqO_ON6B9vKoun2tDhj5xJmm9RVXPrNPoaoFFLgIwO4qvznjLKK9lpayBbK800LB3vSm0H51Y_IhdTJPHWVDjPLKRoRGxh2DYC6iJ7lEQ-Ar7g8RY6ZmitjcBMYUMzy6zxH9CeNtA=w2400",
  "https://lh3.googleusercontent.com/ZyZNsv5TRJwt27dHmRstUQSYD9MYG_wcLSGnFLMd4RWVVz8KYlsWOYLPK4VfEh9Ycel41-WVbfUGHBd5a0U6cFSupzLh-vAEnsMK6MhNWyzXaqJGzAu1nBAzXgHIUhZpwQTS6b7WdQ=w2400",
  "https://lh3.googleusercontent.com/EWNmLRE4ubZcXn2sXSNegw6dBbk1-Q2352xfCsTCC25z25tRUp8L-CSE08aoZQ08vnLvsYeGBL5VecGWxnw47EF0N5gGA58WN0INmor6IcpR0ZAhZBTy9OFGfChHR0_OzZGZsglAwA=w2400",
  "https://lh3.googleusercontent.com/ze1nEy_wBwWBVvuWeFyV84W3yjiZ_93Dvj-uV8lW5LzBpvK9k4XFkub9jmp5H0-bWxOJ34WyNgwBaNCAzHr3o180BHz4UZanYmJqIH8DN6cjZ7IY4y5ZOvl1KX1QGBRjgiKrsXV_Ew=w2400",
  "https://lh3.googleusercontent.com/EDmG93sps6BWlDUGM8tGZrosA_gnMYLW9RCd7x__tbHCql9eK3tvPQr_GbvhfhX3lnQzfAks6Rt_iUjv2-sWNrUrashWGLtwNO7A8JCKwfhCrzU0rQ-yoCxj90zo9wMQWGXpE8CRRA=w2400",
  "https://lh3.googleusercontent.com/PSFS9Eu9gL4BSZKsCMHRxO-A-JrViaju1YAt7Kh9N-ZBGgiUelEAzisQFbuVghoM1_ijly-RZnUgMmjNkC02u0QOsBSCqzd8D2WIcna6H21z_BP6pxCTKe_rZNx7vBI4wt78CGcqXA=w2400",
  "https://lh3.googleusercontent.com/vV1Q7nT1E3-7HowMloptwvLNwKJpSg2hijZjTe6Ma9ad56aGG0RB8KVfzIU-VS-M7mLZhWdrlfUiBNQuVS6FgFD7IYsgVN6I7pLYcmXrRxY95BQRRA7rkyLzEFvmUaW6-iWK8GXSLA=w2400",
  "https://lh3.googleusercontent.com/eu3cWgym7m7hQjKg0oi3RN9PdwJj9F08kbJrcRsrmeeDIz3lABLj39ayMO7KED104R3RUIU0Xo-4PAbymdrEbGjTvrYIDZBecmBa2z4i5MxsIBZGpmCRagV7afOMzMzbUU7KFImwGw=w2400",
  "https://lh3.googleusercontent.com/NRRzDf7TflKBsIbESdmLENhmic2YfNSz_wImPKamDdXSX2JlWuGfd8DKt_fGOcpfnn7XvUR6A6da1pes0MVvEjQgSx1Z4-TN9cEQimiU9hmvVfhfrbzObzPlfT5Xx-vOz0ZR8HBqJw=w2400",
  "https://lh3.googleusercontent.com/TufqwGG139GsrnSNE0lr3WJPufFfJkengONADoG-jAQa1Z2ewhBrQJS0RxCo9Cxzjjhvc3nzNLhZVQ3qfMG4Zd0yDX4ci1EI9WNveEnucyyLoU-_R2cb4IBM6oE2P3ZDNRt7MUBoAA=w2400",
  "https://lh3.googleusercontent.com/7HsWvwq3O3sN_u2wxgPRjVB172JL3VZXuM0rV9I_xkW1dR4B1frJOadV-5gidbFrNv6X-UKgtfa7P4LeqNN4PbQ8YijpYvSv8PYfIcuS-0TFs5SoG4l0aMqhEOQV5b4Qxhl3e4IhqQ=w2400",
  "https://lh3.googleusercontent.com/C8Vi7mXxJVtebAjgD4K9iK_tCEeK9K3z1VOMJ3R5vbMcNU1vLjRbZ3J7E-_dqYzhkroLRPW08NKhwakL-iBMaXe0881KysxKrAe2Kvmgzo6o05EAPNRLjQRHNrx_oIvxuPgSGMdbFA=w2400",
  "https://lh3.googleusercontent.com/NNb19P1YBI_UqWommw-vxOR2lNcsUO2K0M_ZWlndb7afeN25UPnHQ8-zBJxspyEWhod6yWicnCmfRcKuq6JdtPz-Tff-2zJdWhkYXCPBT7Fr5yrnAbCnxgVMZX3323paaOI0Qzy6KA=w2400",
  "https://lh3.googleusercontent.com/e_ZUWiZN8fuO--vKY73cJsEa9fpUmhj55-XkVWzSWOjiNl-gMqsTGsE0SR9PQc2frG3wNsdch_yYpqou3Llv9G0Vrw0jCnSpAEkGfhFxDkMCJqu2TVnQWdk8iYNdzhRC2VrNEHoAyg=w2400",
  "https://lh3.googleusercontent.com/tt0OS306wcqq4WI4A_HkolCubPtY698UGeNPLFIuMDRgruK1KUpRByczM8MTWksmzCJZ6w_XS6_aJ5MwGXBr_25S5_XIaqgdTZMcF_OFQtyBn7qLLfghtcqC27-kxozvYCTzWVrBvA=w2400",
  "https://lh3.googleusercontent.com/NNkHmUuH6Bx62TG3ff7SgWxScPZacfHa5WNgsegI4EzYV68tRv-qUCBWLb_Lm8UPAElr9qvAjrOwzSPNahij8JffnsXmL6HZ-h5fegmbYylySRu2LANu-8P7aL52AEd4vrpTqO0Mug=w2400",
  "https://lh3.googleusercontent.com/l0j_aMqG-vvmEcy5YbLkou2_2rLhIkU1ClsMqjKjZf-UtDFZ0xu5FU6GUB2ouFfNMgRYj5dKwvWHRpqpzwqSkEJm9Z-yH78r9mHuD_mt3WN-DQGuDz6VEh-NUkir8CrEfuqDQGFLDQ=w2400",
  "https://lh3.googleusercontent.com/BbAKMgy8-UUSiagc8GJtiycU9XrgVTkamUVkgfn7d_PXcNtp7yZDTG6c2dy7NMIEGWTdoFfDgd9-btVXnzC-Imlbo3OybVwDparzZ4QLPh4IRuCKCCW-NDduxO67R9GMWzf3L4daTA=w2400",
  "https://lh3.googleusercontent.com/0R5Kx0BFZneeYSMxZ_FbwucRnZ7QAuBStEOS10DzNLJTKnkY-vJdmWhwS0SSpxrPHCFsqlsvjZf0xzjZ1O5UomaeGK_scndSnnyZmWwuYB2mwru8SlcEggPLEwTWI47Ewi8S4rWnQA=w2400",
  "https://lh3.googleusercontent.com/k_9KqlqbDe6F-CCh2XQu23vylGP44c2ZRTlNOwqsArZHKLBSnHl_CdsqXzyb73HE1bN4Rwc_AuKrTz0n5QcL-1tqQSoQzChFtJIysTiCoesiMM6lTqlLroCxyVWZAH9PsecIcguOrw=w2400",
  "https://lh3.googleusercontent.com/wmNAf9ljJ8ramEW3ghpF71-2PJPmSQjqG96Cr9Hm9qcIKvf6U_fBCugsgY6dn5x1F1idDpI_mQbe_PrgKyZJrwFDa-eDRm7pm71FziIPLpDvtdO7W0c6Ndc2uMGCUIQNdooDfCDpkA=w2400",
  "https://lh3.googleusercontent.com/teh6A5_pfz_2HydEtbzwlFYDJDNlO1lNa3jokR-prABrNGIHHPN4WuZ-l-ZAbtrwp73Xn9Hbz7MVTdXkJ9EYKqoDZ5jplTZB3wuZ8ZhCEGH42cu0QrnGDukFK5Uc_Ot5S9uKqrJoTg=w2400",
  "https://lh3.googleusercontent.com/AqyguS9yEWs7PehmypHypJHVyKaAtsYxCHKoTR-xcdqz187x_7P1VMm4VlwkRERUTb-pgMtXj9Fik0w1-oNjbdUqGl62tRKlb4MI5uf1Pxhs1SLgep5TNa38ou3zp4QY5P_psBIEpQ=w2400",
  "https://lh3.googleusercontent.com/gAHfTgIdPkSgABX-sxfTuH0GvaOwe8_ie_nVXiNLe6zjEJtWqU8pQJXVLpFrMQ6M5GsDUr0b_9hCMPBOH_fgv3Q6Cbi74FOHJFvnJMW3GN12Oun7nDJOOP8jlfyU2SX7oMDizr0jbw=w2400",
  "https://lh3.googleusercontent.com/3W4t10o4KNvqGdsngkx4ewtuzLXU6aeSz99S6PINLZdbOfCG-fxPfJubq7PE8iApddu7cJEIuq1Ry2D2jZiHJn5n_Yq7j2L0zc0mUDFMSiJhJQ3J7776tNE2WwSA9PHqtUN8riqqpQ=w2400",
  "https://lh3.googleusercontent.com/lcK4G7A1BF9hUxZ2z418nytbJBzd207B81Xqncde8uX00bSOLh_At_RBHOQxn-di389bUueYMpOONGHZPYTbOaP2iyikxcNMAfAtvU382WdvdgyFXXZ7pC6sSrlbaekNTh9al7R-qQ=w2400",
  "https://lh3.googleusercontent.com/Z8TzvZ5RLMOmD_IF_N5SfTnjdaDax8IOHh0MdsYgePSH6cZZ8VIC8Wtpl2vCZSOtXsFHwm8-MFIhaGLnXoVEXUzBBuyjNg5X1l1-ajpj-JngK6cS6jKvQO4Xqpi5ZTJ4TiCXHInjFw=w2400",
  "https://lh3.googleusercontent.com/c_vyMxXjyB4ZUWWol81dVv6NKGI-C6yDj1lD_czVltzJLs8AbFJrEC2acimd9BkFRg-vVHqUZx6EPutrDCJ0Nja__0NZ-mksEG49EicdAG28SSXesHoXUOVN7-uy6PRD_AF0TmyjRg=w2400",
  "https://lh3.googleusercontent.com/2USqOyiTSUpx6mWeUELFSDCdxgjDbPwHLBYMoAKYxC_Vu3PMF_M7nqK57mjDmadt4Nk6n_eIi6y0qXLyvD4gIu8SqQARh3C7ugbA89239CBUW01ufQc4nIHqtBPx02Rsd822x1ITDg=w2400",
];

const variants = {
  enter: (direction) => {
    return {
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
    console.log(page, direction);
  };

  return (
    <div className="photography-page flex flex-col bg-eggshell min-h-screen w-screen">
      <div className="photography-navbar flex flex-row h-[10vh] font-inter font-[500] text-xl justify-evenly items-center">
        <div className="photography-navbar-item px-1 hover:rounded hover:bg-sunsetPink transition-all">
          <a href="/about">Home</a>
        </div>
        <img className="chistar h-[6vh]" src={chistar}></img>
        {/* <div className="photography-navbar-item px-1 hover:rounded hover:bg-sunsetPink transition-all z-0">
          <a
            href="https://www.instagram.com/secondhandneel/"
            target="_blank"
            rel="norefferer"
          >
            Instagram
          </a>
        </div> */}
        <div className="photography-navbar-item px-1 hover:rounded hover:bg-sunsetPink transition-all z-0">
          Contact
        </div>
        {/* <div className="marquee text-4xl font-inter text-navy">
          THE POETRY IS IN THE STREETS IN FULL LIVING COLOR.
        </div> */}
      </div>
      <div className="photography-header flex justify-center items-center h-[90vh] px-[10vw] pb-[5vh]">
        <div
          className="left fixed h-[75vh] w-[25vw] left-0 z-10 bg-transparent"
          onClick={() => paginate(-1)}
        ></div>
        <div
          className="right fixed h-[75vh] w-[25vw] right-0 z-10 bg-transparent"
          onClick={() => paginate(1)}
        ></div>
        <AnimatePresence initial={true} custom={direction}>
          <motion.img
            key={page}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 0, damping: 0 },
              opacity: { duration: 0.3 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={false}
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
