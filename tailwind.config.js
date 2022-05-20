module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightpink: "#EE9B86",
      },
      fontFamily: {
        forma: ["forma-djr-micro", "sans-serif"],
      },
      fontSize: {
        84: "84px",
        1: "8vw",
        2: "5vw",
      },
      spacing: {
        5.4: "20px",
        6.4: "24px",
        8.4: "32px",
        6.6: "36px",
        8.5: "40px",
        8.6: "48px",
        10.6: "60px",
        8.8: "64px",
        9.8: "72px",
        12.7: "84px",
        16.6: "96px",
        101: "101px",
        128: "128px",
        210: "210px",
        480: "480px",
        562: "562px",
      },
    },
  },
  plugins: [],
};
