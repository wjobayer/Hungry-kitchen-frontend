module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "#FFCC00",
        secondary:"FFCC00 ",
        darkgray:"#22262F"
      },
      fontFamily: {
        pt_sans: "'PT Sans', sans-serif",
      },
    },
  },
  plugins: [],
};
