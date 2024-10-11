import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        mobileBackLight: "url(/assets/mobileBackGroundLight.png)",
        mobileBackDark: "url(/assets/mobileBackGroundDark.svg)",
        tabBackLight: "url(/assets/tabBackGroundLight.png)",
        tabBackDark: "url(/assets/tabBackGroundDark.svg)",
        deskBackLight:
          "url(/assets/tabBackGroundLight.png), url(/assets/deskBackGroundLight.png)",
        deskBackDark:
          "url(/assets/tabBackGroundDark.svg), url(/assets/deskBackGroundDark.png)",
      },
      backgroundPosition: {
        doubleBack: "top left, bottom right",
      },
      screens: {
        tab: "767px",
        des: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
