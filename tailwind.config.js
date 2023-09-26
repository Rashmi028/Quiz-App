/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: {
          "100": "#444",
          "200": "#373737",
        },
        gold: {
          "100": "#ffc102",
          "200": "#ffc000",
          "300": "rgba(255, 193, 2, 0.6)",
        },
        gray: {
          "100": "#2b262d",
          "200": "rgba(255, 255, 255, 0.3)",
          "300": "rgba(0, 0, 0, 0.7)",
          "400": "rgba(255, 255, 255, 0.8)",
          "500": "rgba(255, 255, 255, 0.25)",
        },
        orange: {
          "100": "#ffb504",
          "200": "#feb005",
          "300": "#ffad00",
        },
        tomato: "#fa3939",
        forestgreen: "#1f8435",
        chocolate: "#d05a04",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "dm-sans": "'DM Sans'",
        inter: "Inter",
      },
      borderRadius: {
        "11xl": "30px",
        "3xs": "10px",
        xl: "20px",
        mini: "15px",
      },
    },
    fontSize: {
      mini: "15px",
      xs: "12px",
      lg: "18px",
      xl: "20px",
      "56xl": "75px",
      base: "16px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
