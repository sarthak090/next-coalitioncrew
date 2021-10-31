module.exports = {
  purge: ["./pages/**/*.tsx", "./pages/**/*.js", "./components/**/*.tsx"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cheetah: "#F501FB",
        heading: "#f89e4a",
        postbg1: "#1d1922",
        postbg2: "#00123a",
        bannerColor: "#2c1430",
      },
    },
    backgroundImage: {
      banner: "url('/img/banner.png')",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
