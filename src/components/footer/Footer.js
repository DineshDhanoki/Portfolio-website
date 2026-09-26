import React from "react";
import footerStyles from "./Footer.styles";
import LinkedInQR from "../../assets/images/linkedin-qr.svg";
import { ReactComponent as LinkedInLogo } from "../../assets/icons/linkedin.svg";

const Footer = () => {
  const classes = footerStyles();
  return (
    <div id="contact" className={classes.footerWrapper}>
      <div className={`container ${classes.footerContent}`}>
        <div className={classes.emailTitle}>Drop an email at</div>
        <div className={classes.email}>
          <a href="mailto:dinesh.dhanoki@gmail.com">dinesh.dhanoki@gmail.com</a>
        </div>
        <div className={classes.linkedinUrl}>
          <a
            href="https://www.linkedin.com/in/dinesh-dhanoki"
            target="_blank"
            rel="noreferrer"
          >
            <span>Click here to connect with me on</span>
            <LinkedInLogo />
          </a>
        </div>
        <div className={classes.linkedinQr}>
          <div>Or scan the below QR code</div>
          <img src={LinkedInQR} alt="LinkedIn QR Code" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
