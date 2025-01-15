import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import headerStyles from "./Header.styles";
import MyResume from "../../assets/files/vb.pdf";

const Header = () => {
  const [menuState, setMenuState] = useState(0);
  const classes = headerStyles(menuState);
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <a href="/">
          <Logo />
        </a>
      </div>
      <div className={classes.headerMenu}>
        <nav>
          <ul>
            <li>
              <a className={classes.headerMenuItem} href="#about">
                About
              </a>
            </li>
            <li>
              <a className={classes.headerMenuItem} href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a href={MyResume} download="VatsalBhavsar-FrontendEngineer">
                <button type="submit" className={classes.downloadResumeBtn}>
                  Download Resume
                </button>
              </a>
            </li>
          </ul>
        </nav>
        <span
          className={classes.menuIcon}
          onClick={() => {
            setMenuState(menuState === 0 ? 1 : 0);
          }}
        >
          <svg
            className={`ham hamRotate ham7 ${menuState ? "active" : ""}`}
            viewBox="0 0 100 100"
          >
            <path
              className="line top"
              d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013"
            />
            <path className="line middle" d="m 70,50 h -40" />
            <path
              className="line bottom"
              d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40"
            />
          </svg>
        </span>
      </div>
      <div className={classes.mobileMenuContainer}>
        <nav>
          <ul>
            <li>
              <a
                className={classes.mobileMenuItem}
                href="#about"
                onClick={() => {
                  setMenuState(0);
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                className={classes.mobileMenuItem}
                href="#contact"
                onClick={() => {
                  setMenuState(0);
                }}
              >
                Contact
              </a>
            </li>
            <li>
              <a href={MyResume} download="VatsalBhavsar-FrontendEngineer">
                <button
                  type="submit"
                  className={`${classes.mobileMenuDownloadResume} ${classes.mobileMenuItem}`}
                >
                  Download Resume
                </button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
