/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
   
      black: "#110E18",
      white:"#FCFCFC",
      purple: "#6E44FF",
      orange:"#FF8600",
      
      
    },

    fontSize: {
      "2xl": "5rem",
      xl: "48px", // 48px
      lg: "32px", // 32px
      "lg-1": "24px", // 24px
      md: "18px", // 18px
      "md-1": "14px", // 16px
      sm: "12px", // 12px
      xsm:"10px",//10px
    },
    fontWeight: {
      thin: "100",
      light: "300",
      normal: "400",
      medium: "500",
      "semi-bold": "600",
      bold: "700",
    },
    boxShadow: {
      md: `0px 0px 10px rgba(0, 0, 0, 0.1)`,
      "md-1": `0px 4px 10px 0px #6764641F`,
    },

    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1672px",
      "4xl": "1824px",
    },

    extend: {
      width: {
        "full-0.9": "90%",
      },
      height: {
        inputHeightLg: "55px",
        inputHeightMd: "45px",
      },
      margin: {
        basic: "0.5rem",
        moderate: "1rem",
        large: "1.5rem",
        xLarge: "3rem",
      },
      padding: {
        basic: "0.5rem",
        moderate: "1rem",
        large: "1.5rem",
        xLarge: "3rem",
      },
      gap: {
        basic: "0.5rem",
        moderate: "1rem",
        large: "1.5rem",
        xLarge: "3rem",
      },
      backgroundImage: (theme) => ({
        "custom-gradient": `linear-gradient(to bottom, ${theme(
          "colors.blue_shade"
        )}, ${theme("colors.off_blue")})`,
      }),

      textShadow: {
        md: "2px 2px 2px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-md": {
          textShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
