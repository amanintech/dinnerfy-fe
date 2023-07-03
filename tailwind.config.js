/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          150: "#F2FDF9",
          250: "#15bc6e",
          450: "#00a95c",
          850: "#176951",
        },
      },
    },
  },
  plugins: [],
};
