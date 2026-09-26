import { createUseStyles } from "react-jss";
import Colors from "../../utils/colorConstants";

const experienceStyles = createUseStyles({
  experienceContainer: {
    marginTop: "3rem",
    padding: "0 2rem 5rem 2rem",
    [`@media screen and (max-width: 1024px)`]: {
      marginTop: "1rem",
      padding: "0 1.25rem 3.5rem",
    },
  },

  expBlock: {
    height: "15rem",
    display: "flex",
    [`@media screen and (max-width: 1024px)`]: {
      height: "auto",
      minHeight: "11rem",
      display: "grid",
      gridTemplateColumns: "1.25rem minmax(0, 1fr)",
      columnGap: "0.75rem",
    },
  },
  expBlockLeft: {
    flex: "1",
    height: "100%",
    textAlign: "right",
    [`& .exp-block-content`]: {
      flex: "1",
      height: "100%",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "flex-end",
      flexDirection: "column",
      padding: "0 3rem 1rem 0",
    },
    [`@media screen and (max-width: 1024px)`]: {
      display: "none !important",
    },
  },
  expBlockRight: {
    flex: "1",
    height: "100%",
    [`& .exp-block-content`]: {
      flex: "1",
      height: "100%",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "flex-end",
      flexDirection: "column",
      padding: "0 0 1rem 3rem",
      [`@media screen and (max-width: 1024px)`]: {
        minWidth: 0,
        padding: "1.5rem 0 2.5rem 0.75rem",
        justifyContent: "center",
        alignItems: "flex-start",
      },
    },
  },
  expBlockSeperator: {
    height: "100%",
    width: "0.5rem",
    background: "rgba(15, 22, 48, 0.6)",
    position: "relative",
    borderRadius: "1rem",
    [`&:before`]: {
      content: '""',
      position: "absolute",
      bottom: "-1.1rem",
      left: "50%",
      width: "1.4rem",
      height: "1.4rem",
      borderRadius: "1.4rem",
      display: "block",
      background: Colors.oxfordBlue,
      transform: "translate(-50%)",
    },
    [`@media screen and (max-width: 1024px)`]: {
      width: "0.25rem",
      height: "100%",
      marginLeft: "0.5rem",
      borderRadius: "1rem",
      [`&:before`]: {
        width: "0.85rem",
        height: "0.85rem",
        bottom: "-0.45rem",
      },
    },
  },

  expBlockSeperatorFirst: {
    [`&:after`]: {
      content: '""',
      position: "absolute",
      top: "-0.2rem",
      left: "50%",
      width: "1.4rem",
      height: "1.4rem",
      borderRadius: "1.4rem",
      display: "block",
      background: Colors.oxfordBlue,
      transform: "translate(-50%)",
    },
    [`@media screen and (max-width: 1024px)`]: {
      [`&:after`]: {
        width: "0.85rem",
        height: "0.85rem",
      },
    },
  },

  expYearTagRight: {
    background: Colors.oxfordBlue,
    color: "#ffffff",
    padding: "0.3rem 0.8rem",
    borderRadius: "0.2rem",
    position: "absolute",
    left: "2rem",
    bottom: "-1.2rem",
    whiteSpace: "nowrap",
    [`&:before`]: {
      content: '""',
      borderTop: "5px solid transparent",
      borderBottom: "5px solid transparent",
      borderLeft: "7px solid transparent",
      borderRight: `7px solid ${Colors.oxfordBlue}`,
      width: 0,
      height: 0,
      bottom: 0,
      left: "-14px",
      display: "block",
      position: "absolute",
      top: "50%",
      transform: "translate(0, -50%)",
    },
    [`@media screen and (max-width: 1024px)`]: {
      left: "1.25rem",
      right: "auto",
      bottom: "-0.75rem",
      fontSize: "0.75rem",
      padding: "0.25rem 0.5rem",
      [`&:before`]: {
        display: "none",
      },
    },
  },

  expYearTagLeft: {
    background: Colors.oxfordBlue,
    color: "#ffffff",
    padding: "0.3rem 0.8rem",
    borderRadius: "0.2rem",
    position: "absolute",
    right: "2rem",
    bottom: "-1.2rem",
    whiteSpace: "nowrap",
    [`&:before`]: {
      content: '""',
      borderTop: "5px solid transparent",
      borderBottom: "5px solid transparent",
      borderLeft: `7px solid ${Colors.oxfordBlue}`,
      borderRight: "7px solid transparent",
      width: 0,
      height: 0,
      bottom: 0,
      right: "-14px",
      display: "block",
      position: "absolute",
      top: "50%",
      transform: "translate(0, -50%)",
    },
    [`@media screen and (max-width: 1024px)`]: {
      left: "1.25rem",
      right: "auto",
      bottom: "-0.75rem",
      fontSize: "0.75rem",
      padding: "0.25rem 0.5rem",
      [`&:before`]: {
        display: "none",
      },
    },
  },

  // presentDayTag: {
  //   background: Colors.oxfordBlue,
  //   color: "#ffffff",
  //   padding: "0.3rem 0.8rem",
  //   borderRadius: "0.2rem",
  //   position: "absolute",
  //   top: "-3rem",
  //   left: "50%",
  //   whiteSpace: "nowrap",
  //   transform: "translate(-50%, 0)",
  //   [`&:before`]: {
  //     content: '""',
  //     borderTop: `7px solid ${Colors.oxfordBlue}`,
  //     borderBottom: "3px solid transparent",
  //     borderLeft: "7px solid transparent",
  //     borderRight: "7px solid transparent",
  //     width: 0,
  //     height: 0,
  //     bottom: "-9px",
  //     display: "block",
  //     position: "absolute",
  //     left: "50%",
  //     transform: "translate(-50%, 0)",
  //   },
  // },

  presentDayTag: {
    background: Colors.oxfordBlue,
    color: "#ffffff",
    padding: "0.3rem 0.8rem",
    borderRadius: "0.2rem",
    position: "absolute",
    top: "-0.5rem",
    right: "2rem",
    whiteSpace: "nowrap",
    [`&:before`]: {
      content: '""',
      borderTop: "5px solid transparent",
      borderBottom: "5px solid transparent",
      borderLeft: `7px solid ${Colors.oxfordBlue}`,
      borderRight: "7px solid transparent",
      width: 0,
      height: 0,
      bottom: 0,
      right: "-14px",
      display: "block",
      position: "absolute",
      top: "50%",
      transform: "translate(0, -50%)",
    },
    [`@media screen and (max-width: 1024px)`]: {
      left: "1.25rem",
      right: "auto",
      top: "-0.9rem",
      fontSize: "0.75rem",
      padding: "0.25rem 0.5rem",
      [`&:before`]: {
        display: "none",
      },
    },
  },

  companyLogo: {
    [`& img`]: {
      height: "3rem",
    },
    [`& .claris-logo`]: {
      width: "13rem",
      height: "auto",
    },
    [`& svg`]: {
      height: "4rem",
      fill: "#474c56",
    },
    [`@media screen and (max-width: 580px)`]: {
      [`& img`]: {
        height: "2rem",
      },
      [`& .claris-logo`]: {
        width: "10rem",
        height: "auto",
      },
      [`& svg`]: {
        height: "3rem",
        fill: "#474c56",
      },
    },
  },
  companyName: {
    fontSize: "2rem",
    fontWeight: "500",
    color: Colors.oxfordBlue,
    marginTop: "1rem",
    [`@media screen and (max-width: 580px)`]: {
      fontSize: "1.3rem",
      lineHeight: "1.25",
    },
  },
  role: {
    fontSize: "1.3rem",
    fontWeight: "500",
    fontStyle: "italic",
    [`@media screen and (max-width: 580px)`]: {
      fontSize: "0.98rem",
      lineHeight: "1.45",
    },
  },
  duration: {
    fontSize: "1.1rem",
    color: "#666",
    marginTop: "0.5rem",
    fontWeight: "400",
    [`@media screen and (max-width: 580px)`]: {
      fontSize: "0.9rem",
    },
  },
});

export default experienceStyles;
