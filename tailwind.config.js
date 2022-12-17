/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#643001",
          secondary: "#7b3d11",
          accent: "#1FB2A6",
          neutral: "#191D24",
          "base-100": "#2A303C",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FFA111",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
