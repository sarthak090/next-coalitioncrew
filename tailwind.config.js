module.exports = {
  purge: ["./pages/**/*.tsx", "./pages/**/*.js", "./components/**/*.tsx"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", "sans-serif", "Sen"],
      },
      colors: {
        cheetah: "#F501FB",
        heading: "#f89e4a",
        postbg1: "#1d1922",
        postbg2: "#00123a",
        bannerColor: "#2c1430",
        iconColor: "#2F2E41",
        yellowHeading: "#FFED4E",
        brownBackground: "#18181A",
        brownBorder: "#611F07",
      },
    },
    backgroundImage: {
      banner: "url('/img/banner.png')",
      crew: "url('/img/crew.jpeg')",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
