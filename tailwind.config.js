/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnightblue: {
          "100": "#1d165c",
          "200": "#100948",
          "300": "#000235",
          "400": "rgba(28, 19, 111, 0.39)",
        },
        white: "#fff",
        paleturquoise: {
          "100": "#bafeff",
          "200": "#9bfaff",
          "300": "#82f9ff",
          "400": "rgba(155, 250, 255, 0.7)",
        },
        powderblue: "#81cccd",
        silver: "rgba(196, 196, 196, 0)",
        darkslateblue: "rgba(51, 43, 102, 0.25)",
        cornflowerblue: "rgba(141, 140, 218, 0.5)",
        mediumorchid: "rgba(180, 94, 201, 0.53)",
        slateblue: "rgba(112, 111, 223, 0.5)",
      },
      spacing: {},
      fontFamily: {
        "body-text": "Outfit",
      },
      borderRadius: {
        "30xl": "49px",
        "36xl": "55px",
        sm: "14px",
      },
    },
    fontSize: {
      "6xl": "25px",
      "9xl": "28px",
      "3xl": "22px",
      xl: "20px",
      "61xl": "80px",
      "31xl": "50px",
      "51xl": "70px",
      "81xl": "100px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
