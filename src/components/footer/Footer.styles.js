import { createUseStyles } from "react-jss";
import Colors from "../../utils/colorConstants";

const footerStyles = createUseStyles({
  footerWrapper: {
    background: Colors.oxfordBlue,
    color: Colors.white,
  },

  footerContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "5rem",
    [`@media screen and (max-width: 769px)`]: {
      padding: "3rem 1rem",
    },
  },

  emailTitle: {
    width: "100%",
    fontSize: "1.5rem",
    textAlign: "center",
    [`@media screen and (max-width: 769px)`]: {
      fontSize: "0.9rem",
    },
  },

  email: {
    padding: "1rem 0",
    textAlign: "center",
    transition: "ease-in-out 200ms",
    [`& a`]: {
      fontSize: "3rem",
      fontWeight: "400",
      textDecoration: "none",
      letterSpacing: "0.1rem",
      color: Colors.white,
      transition: "ease-in-out 200ms",
      position: "relative",
      [`&:before`]: {
        content: '""',
        position: "absolute",
        bottom: "-1rem",
        left: "0",
        width: "0%",
        height: "0.5rem",
        display: "block",
        background: Colors.white,
        transition: "ease-in-out 300ms",
      },
      [`&:after`]: {
        content: '""',
        position: "absolute",
        bottom: "-2rem",
        right: "0",
        width: "0%",
        height: "0.5rem",
        display: "block",
        background: Colors.white,
        transition: "ease-in-out 300ms",
      },
      [`&:hover`]: {
        fontSize: "3.3rem",
        letterSpacing: "0.5rem",
        [`&:before`]: {
          width: "80%",
        },
        [`&:after`]: {
          width: "60%",
        },
      },
      [`@media screen and (max-width: 769px)`]: {
        fontSize: "2rem",
        [`&:hover`]: {
          fontSize: "2.3rem",
          letterSpacing: "0.3rem",
        },
      },
      [`@media screen and (max-width: 580px)`]: {
        fontSize: "1.1rem",
        [`&:hover`]: {
          fontSize: "1.2rem",
          letterSpacing: "0.2rem",
        },
      },
    },
    [`&:hover`]: {
      paddingBottom: "3rem",
    },
  },

  linkedinUrl: {
    width: "100%",
    padding: "1rem 0",
    [`& a`]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      fontSize: "1.5rem",
      color: Colors.white,
      [`& svg`]: {
        height: "2.5rem",
        marginLeft: "1rem",
      },
      [`&:hover`]: {
        [`& span`]: {
          borderBottom: "2px solid",
        },
      },
    },
    [`@media screen and (max-width: 769px)`]: {
      [`& a`]: {
        fontSize: "1.3rem",
      },
    },
    [`@media screen and (max-width: 580px)`]: {
      [`& a`]: {
        fontSize: "0.8rem",
      },
      [`& svg`]: {
        height: "1.5rem !important",
        marginLeft: "0.5rem !important",
      },
    },
  },

  linkedinQr: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [`& div`]: {
      paddingBottom: "1rem",
    },
    [`& img`]: {
      height: "10rem",
    },
    [`@media screen and (max-width: 580px)`]: {
      fontSize: "0.8rem",
      [`& img`]: {
        height: "8rem",
      },
    },
  },
});

export default footerStyles;
