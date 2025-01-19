import { createUseStyles } from "react-jss";
import Colors from "../../utils/colorConstants";

const bannerStyles = createUseStyles({
  banner: {
    height: "45rem",
    width: "100%",
    boxShadow: "0 10px 15px #d2d2d2",
    transform: "skewY(-1.5deg)",
    marginTop: "-4rem",
    position: "relative",
    backgroundSize: "cover",
  },

  bannerContent: {
    height: "100%",
    transform: "skewY(1.5deg)",
    paddingTop: "4rem",
    position: "relative",
    display: "flex",
    [`& lottie-player`]: {
      height: "90%",
    },
    [`@media screen and (max-width: 769px)`]: {
      flexDirection: "column",
      [`& lottie-player`]: {
        height: "95%",
      },
    },
  },

  bannerContentLeft: {
    flexBasis: "50%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: "0 0 2rem 5rem",
    [`@media screen and (max-width: 769px)`]: {
      padding: "2rem 2rem 0 2rem",
      flexBasis: "unset",
    },
  },

  titleSvg: {
    textAlign: "right",
    [`@media screen and (max-width: 769px)`]: {
      textAlign: "center",
    },
  },

  bannerTitle: {
    fontSize: "2.5rem",
    fontWeight: "500",
    color: Colors.oxfordBlue,
    padding: "1rem 0",
    textAlign: "right",
    [`@media screen and (max-width: 769px)`]: {
      fontSize: "2rem",
      textAlign: "center",
    },
    [`@media screen and (max-width: 580px)`]: {
      fontSize: "1.2rem",
      textAlign: "center",
    },
  },

  bannerContentRight: {
    flexBasis: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [`@media screen and (max-width: 769px)`]: {
      height: "50%",
      flex: "1",
    },
  },

  bannerMarqueue: {
    position: "absolute",
    width: "100%",
    bottom: "0",
    background: Colors.oxfordBlue,
    color: "#ffffff",
    overflow: "hidden",
    [`& span`]: {
      padding: "8px 15px",
      fontSize: "0.8rem",
    },
  },

  myName: {
    animation: "$name-fill-animation 1s ease forwards 1s",
    // transform: "skew(-10deg, 0deg)",

    [`& path:nth-of-type(1)`]: {
      strokeDasharray: "2970px",
      strokeDashoffset: "2970px",
      animation: "$name-animation 2s ease forwards",
    },
    [`& path:nth-of-type(2)`]: {
      strokeDasharray: "450px",
      strokeDashoffset: "450px",
      animation: "$name-animation 1.8s ease forwards 0.2s",
    },
    [`& path:nth-of-type(3)`]: {
      strokeDasharray: "246px",
      strokeDashoffset: "246px",
      animation: "$name-animation 1.6s ease forwards 0.4s",
    },
    [`& path:nth-of-type(4)`]: {
      strokeDasharray: "339px",
      strokeDashoffset: "339px",
      animation: "$name-animation 1.4s ease forwards 0.6s",
    },
    [`& path:nth-of-type(5)`]: {
      strokeDasharray: "351px",
      strokeDashoffset: "351px",
      animation: "$name-animation 1.2s ease forwards 0.8s",
    },
    [`& path:nth-of-type(6)`]: {
      strokeDasharray: "227px",
      strokeDashoffset: "227px",
      animation: "$name-animation 1s ease forwards 1s",
    },
    [`& path:nth-of-type(7)`]: {
      strokeDasharray: "455px",
      strokeDashoffset: "455px",
      animation: "$name-animation 2s ease forwards",
    },

    [`& path:nth-of-type(8)`]: {
      strokeDasharray: "376px",
      strokeDashoffset: "376px",
      animation: "$name-animation 1.8s ease forwards 0.2s",
    },
    [`& path:nth-of-type(9)`]: {
      strokeDasharray: "350px",
      strokeDashoffset: "350px",
      animation: "$name-animation 1.6s ease forwards 0.4s",
    },
    [`& path:nth-of-type(10)`]: {
      strokeDasharray: "297px",
      strokeDashoffset: "297px",
      animation: "$name-animation 1.4s ease forwards 0.6s",
    },
    [`& path:nth-of-type(11)`]: {
      strokeDasharray: "339px",
      strokeDashoffset: "339px",
      animation: "$name-animation 1.2s ease forwards 0.8s",
    },
    [`& path:nth-of-type(12)`]: {
      strokeDasharray: "351px",
      strokeDashoffset: "351px",
      animation: "$name-animation 1s ease forwards 1s",
    },
    [`& path:nth-of-type(13)`]: {
      strokeDasharray: "395px",
      strokeDashoffset: "395px",
      animation: "$name-animation 0.8s ease forwards 1.2s",
    },
  },

  myTitle: {
    animation: "$name-fill-animation 1s ease forwards 1s",
    // transform: "skew(-10deg, 0deg)",
    width: "85%",

    [`& path:nth-of-type(1)`]: {
      strokeDasharray: "500px",
      strokeDashoffset: "500px",
      animation: "$name-animation 2s ease forwards",
    },
    [`& path:nth-of-type(2)`]: {
      strokeDasharray: "500px",
      strokeDashoffset: "500px",
      animation: "$name-animation 1.8s ease forwards 0.2s",
    },
    [`& path:nth-of-type(3)`]: {
      strokeDasharray: "500px",
      strokeDashoffset: "500px",
      animation: "$name-animation 1.6s ease forwards 0.4s",
    },
    [`& path:nth-of-type(4)`]: {
      strokeDasharray: "500px",
      strokeDashoffset: "500px",
      animation: "$name-animation 1.4s ease forwards 0.6s",
    },
    [`& path:nth-of-type(5)`]: {
      strokeDasharray: "500px",
      strokeDashoffset: "500px",
      animation: "$name-animation 1.2s ease forwards 0.8s",
    },
    [`& path:nth-of-type(6)`]: {
      strokeDasharray: "500px",
      strokeDashoffset: "500px",
      animation: "$name-animation 1s ease forwards 1s",
    },
    [`& path:nth-of-type(7)`]: {
      strokeDasharray: "500px",
      strokeDashoffset: "500px",
      animation: "$name-animation 0.8s ease forwards 1.2s",
    },
    [`& path:nth-of-type(8)`]: {
      strokeDasharray: "500px",
      strokeDashoffset: "500px",
      animation: "$name-animation 0.6s ease forwards 1.4s",
    },

    [`& path:nth-of-type(9)`]: {
      strokeDasharray: "500px",
      strokeDashoffset: "500px",
      animation: "$name-animation 2s ease forwards",
    },
    [`& path:nth-of-type(10)`]: {
      strokeDasharray: "500px",
      strokeDashoffset: "500px",
      animation: "$name-animation 1.8s ease forwards 0.2s",
    },
    [`& path:nth-of-type(11)`]: {
      strokeDasharray: "500px",
      strokeDashoffset: "500px",
      animation: "$name-animation 1.6s ease forwards 0.4s",
    },
    [`& path:nth-of-type(12)`]: {
      strokeDasharray: "500px",
      strokeDashoffset: "500px",
      animation: "$name-animation 1.4s ease forwards 0.6s",
    },
    [`& path:nth-of-type(13)`]: {
      strokeDasharray: "500px",
      strokeDashoffset: "500px",
      animation: "$name-animation 1.2s ease forwards 0.8s",
    },
    [`& path:nth-of-type(14)`]: {
      strokeDasharray: "500px",
      strokeDashoffset: "500px",
      animation: "$name-animation 1s ease forwards 1s",
    },
    [`& path:nth-of-type(15)`]: {
      strokeDasharray: "500px",
      strokeDashoffset: "500px",
      animation: "$name-animation 0.8s ease forwards 1.2s",
    },
    [`& path:nth-of-type(16)`]: {
      strokeDasharray: "500px",
      strokeDashoffset: "500px",
      animation: "$name-animation 0.6s ease forwards 1.4s",
    },
  },

  "@keyframes name-animation": {
    to: {
      strokeDashoffset: "0",
    },
  },

  "@keyframes name-fill-animation": {
    from: {
      fill: "transparent",
    },
    to: {
      fill: Colors.oxfordBlue,
    },
  },
});

export default bannerStyles;
