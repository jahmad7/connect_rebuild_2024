import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        QBGreen: "#2CA01C",
        connectGray: "#f3f8ff",
        // connectGray: "#f1f5f9",
      },
      // zIndex: {
      //   "-10": "-10",
      // },
      // gridTemplateColumns: {
      //   13: "repeat(13, minmax(0, 1fr))",
      // },
    },
  },
  plugins: [],
};
export default config;
