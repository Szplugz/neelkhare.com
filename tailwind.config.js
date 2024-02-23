/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "inner-lg":
          "inset 0 10px 15px 3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      },
    },
    fontFamily: {
      corrie: "LHF Corrie",
    },
    colors: {
      eggshell: "#FBF9F4",
      candy: "#9A4C5C",
      spruce: "#43392E",
      oak: "#4A2A00",
      gray: "#8B8B8B",
      starRed: "#D12D35",
      lightMud: "#93897E",
    },
  },
  plugins: [],
};
