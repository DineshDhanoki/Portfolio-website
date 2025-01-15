import { createUseStyles } from "react-jss";
import Colors from "../../utils/colorConstants";

const skillsStyles = createUseStyles({
  skillsContainer: {
    marginTop: "5rem",
    padding: "0 2rem 2rem 2rem",
    [`@media screen and (max-width: 769px)`]: {
      padding: "0 1.5rem 1.5rem 1.5rem",
    },
  },

  skillsList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
    gridGap: "2rem",
    [`@media screen and (max-width: 769px)`]: {
      gridTemplateColumns: "repeat(auto-fit, minmax(8rem, 1fr))",
      gridGap: "1.5rem",
    },
  },

  skillsListItem: {
    height: "18rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "rgb(210 210 210) 0px 2px 10px",
    borderRadius: "0.5rem",
    flexDirection: "column",
    transition: "300ms",
    [`& svg`]: {
      maxWidth: "10rem",
      maxHeight: "10rem",
      width: "fit-content",
      height: "fit-content",
      [`@media screen and (max-width: 769px)`]: {
        maxWidth: "7rem",
        maxHeight: "5rem",
      },
    },
    [`&:hover`]: {
      transform: "translateY(-0.5rem)",
    },
    [`@media screen and (max-width: 769px)`]: {
      height: "12rem",
    },
  },

  skillItemIcon: {
    flex: "1",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  skillItemName: {
    width: "100%",
    padding: "1rem",
    borderTop: `1px solid ${Colors.platinumGray}`,
    textAlign: "center",
    fontWeight: "500",
    [`@media screen and (max-width: 769px)`]: {
      fontSize: "0.9rem",
    },
  },
});

export default skillsStyles;
