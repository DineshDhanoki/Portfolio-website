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
    [`@media screen and (max-width: 769px)`]: {
      height: "auto",
      minHeight: "43rem",
      marginTop: "-4rem",
      backgroundPosition: "center",
    },
    [`@media screen and (min-width: 770px) and (max-width: 1024px)`]: {
      height: "auto",
      minHeight: "47rem",
      marginTop: "-4rem",
    },
    [`@media screen and (max-width: 420px)`]: {
      minHeight: "40rem",
    },
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
      paddingTop: "3.75rem",
      [`& lottie-player`]: {
        height: "100%",
      },
    },
    [`@media screen and (min-width: 770px) and (max-width: 1024px)`]: {
      flexDirection: "column",
      paddingTop: "4.5rem",
    },
  },

  bannerContentLeft: {
    flexBasis: "50%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: "0 0 2rem 5rem",
    [`@media screen and (max-width: 769px)`]: {
      padding: "1.5rem 1.25rem 0",
      flexBasis: "unset",
    },
    [`@media screen and (min-width: 770px) and (max-width: 1024px)`]: {
      flexBasis: "unset",
      width: "min(100%, 42rem)",
      margin: "0 auto",
      padding: "2rem 2rem 0",
    },
  },

  titleSvg: {
    textAlign: "right",
    [`@media screen and (max-width: 1024px)`]: {
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
    [`@media screen and (min-width: 770px) and (max-width: 1024px)`]: {
      fontSize: "2.15rem",
      textAlign: "center",
    },
    [`@media screen and (max-width: 580px)`]: {
      fontSize: "1.25rem",
      lineHeight: "1.3",
      textAlign: "center",
    },
  },

  bannerContentRight: {
    flexBasis: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [`@media screen and (max-width: 769px)`]: {
      width: "100%",
      minHeight: "17rem",
      flex: "unset",
      transform: "none",
      padding: "0.5rem 1.25rem 2.5rem",
      [`& dotlottie-player`]: {
        width: "100%",
        height: "100%",
      },
    },
    [`@media screen and (min-width: 770px) and (max-width: 1024px)`]: {
      flexBasis: "unset",
      minHeight: "20rem",
      width: "min(100%, 34rem)",
      margin: "0 auto",
      padding: "1rem 2rem 3rem",
      transform: "none",
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
    display: "block",
    width: "100%",
    maxWidth: "742px",
    height: "auto",
    [`& [data-role="name-letter"]`]: {
      strokeDasharray: "500px",
      strokeDashoffset: "500px",
    },
    [`& [data-letter="0"], & [data-letter="6"]`]: {
      animation: "$name-animation 2s ease forwards",
    },
    [`& [data-letter="1"], & [data-letter="7"]`]: {
      animation: "$name-animation 1.8s ease forwards 0.2s",
    },
    [`& [data-letter="2"], & [data-letter="8"]`]: {
      animation: "$name-animation 1.6s ease forwards 0.4s",
    },
    [`& [data-letter="3"], & [data-letter="9"]`]: {
      animation: "$name-animation 1.4s ease forwards 0.6s",
    },
    [`& [data-letter="4"], & [data-letter="10"]`]: {
      animation: "$name-animation 1.2s ease forwards 0.8s",
    },
    [`& [data-letter="5"], & [data-letter="11"]`]: {
      animation: "$name-animation 1s ease forwards 1s",
    },
    [`& [data-letter="12"]`]: {
      animation: "$name-animation 0.8s ease forwards 1.2s",
    },
  },

  myTitle: {
    animation: "$name-fill-animation 1s ease forwards 1s",
    display: "block",
    width: "85%",
    maxWidth: "941px",
    height: "auto",
    marginLeft: "auto",
    [`@media screen and (max-width: 769px)`]: {
      width: "100%",
    },
    [`@media screen and (min-width: 770px) and (max-width: 1024px)`]: {
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    [`@media screen and (max-width: 580px)`]: {
      [`& span`]: {
        padding: "7px 10px",
        fontSize: "0.7rem",
      },
    },

    [`& [data-role="ai-a-fill"]`]: {
      fill: "transparent",
      animation: "$name-fill-animation 1s ease forwards 1s",
    },

    [`& [data-role="ai-a-outline"]`]: {
      fill: "transparent",
      strokeDasharray: "500px",
      strokeDashoffset: "500px",
      animation:
        "$name-animation 1.8s ease forwards 0.2s, $name-fill-animation 1s ease forwards 1s",
    },
    [`& [data-role="ai-i"]`]: {
      fill: "transparent",
      strokeDasharray: "500px",
      strokeDashoffset: "500px",
      animation:
        "$name-animation 1.8s ease forwards 0.2s, $name-fill-animation 1s ease forwards 1s",
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

  bannerSubtitle: {
    textAlign: "center",
    width: "85%",
    marginLeft: "auto",
    [`@media screen and (max-width: 769px)`]: {
      width: "100%",
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
