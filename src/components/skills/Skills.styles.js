import { createUseStyles } from "react-jss";
import Colors from "../../utils/colorConstants";

const skillsStyles = createUseStyles({
  skillsContainer: {
    marginTop: "5rem",
    padding: "0 2rem 2rem 2rem",
    [`@media screen and (max-width: 769px)`]: {
      marginTop: "3.5rem",
      padding: "0 1.25rem 2.5rem",
    },
    [`@media screen and (min-width: 770px) and (max-width: 1024px)`]: {
      marginTop: "4rem",
      padding: "0 2rem 3rem",
    },
  },

  skillsList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
    gridGap: "2rem",
    [`@media screen and (max-width: 769px)`]: {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gridGap: "1rem",
    },
    [`@media screen and (min-width: 770px) and (max-width: 1024px)`]: {
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gridGap: "1.25rem",
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
      height: "10.5rem",
    },
    [`@media screen and (min-width: 770px) and (max-width: 1024px)`]: {
      height: "13rem",
      [`& svg`]: {
        maxWidth: "7rem",
        maxHeight: "6rem",
      },
    },
    [`@media screen and (max-width: 420px)`]: {
      height: "9.5rem",
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
      padding: "0.7rem 0.4rem",
    },
  },
});

export default skillsStyles;
