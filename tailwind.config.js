module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightpink: "#EE9B86",
        eggshell: "#f9f5f1",
        eggshell2: "#FBF9F4",
        githubGrey: "#333333",
        instagramRed: "#C13584",
        twitterBlue: "#1DA1F2",
        youtubeRed: "#9A4C5C",
        almostBlack: "#08090A",
        almostBlackFaded: "#4B5563",
        skyBlue: "#bac8d3",
        clay: "#837875F9",
        stone: "#333",
        pastelGreen: "#c8d3ba",
        candy: "#AF818B",
        chinaRose: "#9A4C5C",
        mango: "#F9DDA4",
        mangoHighlight: "#eecdac",
        navy: "#003547",
        pink: "#ffd1d9",
        pink2: "#EE9B86",
        sunsetPink: "#FF7B81",
        blueHour: "#D4E4FD",
        mud: "#43392E",
        lightMud: "#93897E",
      },
      fontFamily: {
        forma: ["forma-djr-micro", "sans-serif"],
        garamond: ["adobe-garamond-pro", "serif"],
        tablet: ["tablet-gothic", "sans-serif"],
        inter: ["Inter, sans-serif", { fontFeatureSettings: '"sups", "ss01"' }],
      },
      fontSize: {
        84: "84px",
        1: "8vw",
        2: "5vw",
        10: "10vh",
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
        1024: "1024px",
      },
      dropShadow: {
        "xl-white": ["0 20px 13px rgba(255 249 239 / 0.03)"], // fix this
      },
      listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal",
        square: "square",
        roman: "upper-roman",
        star: "⁕",
      },
    },
  },
  plugins: [],
};
