import { createUseStyles } from "react-jss";
import Colors from "../../utils/colorConstants";

const headerStyles = createUseStyles({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 2px 10px #d2d2d2",
    zIndex: "1",
    position: "sticky",
    top: "0",
    background: "#ffffff",
  },

  logo: {
    padding: "0.5rem 1rem",
  },

  headerMenu: {
    display: "flex",
    [`& a`]: {
      fontSize: "1rem",
      textDecoration: "none",
      fontWeight: "500",
    },
    [`& nav`]: {
      [`& ul`]: {
        listStyle: "none",
        display: "flex",
        alignItems: "center",
        [`& li`]: {
          margin: "0 1rem",
        },
      },
    },
  },

  headerMenuItem: {
    color: Colors.oxfordBlue,
    [`@media screen and (max-width: 769px)`]: {
      display: "none",
    },
  },

  downloadResumeBtn: {
    background: Colors.oxfordBlue,
    color: Colors.white,
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    outline: "none",
    border: "none",
    fontSize: "1rem",
    fontFamily: "inherit",
    cursor: "pointer",
    transition: "ease-in-out 300ms",
    [`@media screen and (max-width: 769px)`]: {
      display: "none",
    },
    [`&:hover`]: {
      background: Colors.hoverBlue,
      transition: "ease-in-out 300ms",
    },
  },

  menuIcon: {
    display: "none",
    zIndex: "99999",
    cursor: "pointer",
    paddingRight: "0.5rem",
    overflow: "hidden",
    [`& svg`]: {
      height: "4rem",
      width: "auto",
    },
    [`@media screen and (max-width: 769px)`]: {
      display: "flex",
    },
  },

  mobileMenuContainer: (menuState) => ({
    position: "absolute",
    width: "100vw",
    height: "100vh",
    margin: "0",
    top: "0",
    right: "0",
    background: "rgba(255, 255, 255, 0.75)",
    clipPath: menuState ? "circle(141.4% at 100% 0)" : "circle(0.0% at 100% 0)",
    transition: "400ms ease-in-out",
    backdropFilter: "blur(5px)",
    [`& nav`]: {
      marginTop: "30%",
      [`& ul`]: {
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        [`& li`]: {
          margin: "1rem 0",
        },
      },
    },
  }),

  mobileMenuItem: {
    textDecoration: "none",
    fontSize: "1.4rem",
    fontWeight: "500",
    color: Colors.oxfordBlue,
  },

  mobileMenuDownloadResume: {
    background: Colors.oxfordBlue,
    color: Colors.white,
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    outline: "none",
    border: "none",
    fontFamily: "inherit",
    cursor: "pointer",
    transition: "ease-in-out 300ms",
    [`&:hover`]: {
      background: Colors.hoverBlue,
      transition: "ease-in-out 300ms",
    },
  },
});

export default headerStyles;
