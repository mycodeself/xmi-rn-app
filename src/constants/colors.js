const colors = {
  primary: "#CEA0AE",
  secondary: "#d98eba",
  arsenic: "#394648",
  rgba: {
    primary: (alpha = 1) => {
      return "rgba(206, 170, 174, "+alpha+")";
    },
    secondary: (alpha = 1) => {
      return "rgba(230,160,195, "+alpha+")";
    }
  },
  contentBackgroundColor: '#F8F8F8'
};

export default colors;