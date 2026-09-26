import React from "react";
import experienceStyles from "./Experience.styles";
import { ReactComponent as ClarisIcon } from "../../assets/icons/claris-logo-dark.svg";
import { ReactComponent as QualcommIcon } from "../../assets/icons/qualcomm.svg";
import { ReactComponent as PGIcon } from "../../assets/icons/pg.svg";
import { ReactComponent as NiveaIcon } from "../../assets/icons/nivea.svg";
import { ReactComponent as MorchemIcon } from "../../assets/icons/morchem.svg";
import { ReactComponent as LakmeIcon } from "../../assets/icons/lakme.svg"; // Ensure this path is correct
import { ReactComponent as TechMIcon } from "../../assets/icons/techm.svg";
import intelenetLogo from "../../assets/icons/intelenet.svg";

const Experience = () => {
  const classes = experienceStyles();

  const getCompanyIcon = (companyName) => {
    switch (companyName) {
      case "Claris International Inc. (an Apple company)":
        return <ClarisIcon className="claris-logo" aria-label="Claris logo" role="img" />;
      case "Collabera Technologies Pvt Ltd / Qualcomm India Private Limited":
        return <QualcommIcon />;
      case "Procter and Gamble":
        return <PGIcon />;
      case "Nivea India Pvt Ltd":
        return <NiveaIcon />;
      case "Morchem India Pvt Ltd":
        return <MorchemIcon />;
      case "Lakme Lever Pvt Ltd":
        return <LakmeIcon />; // Ensure this line is correct and the SVG is correct
      case "Tech Mahindra Business Services":
        return <TechMIcon />;
      case "Intelenet Global Services":
        return <img src={intelenetLogo} alt="Intelenet logo" />;
      default:
        return <QualcommIcon />;
    }
  };

  const ExperienceContent = ({ companyName, role, duration, className }) => (
    <div className={`exp-block-content ${className || ""}`}>
      <div className={classes.companyLogo}>{getCompanyIcon(companyName)}</div>
      <div className={classes.companyName}>{companyName}</div>
      <div className={classes.role}>{role}</div>
      <div className={classes.duration}>{duration}</div>
    </div>
  );

  const experienceData = [
    {
      companyName: "Claris International Inc. (an Apple company)",
      role: "AI Engineer",
      duration: "Nov 2024 - Present",
      type: "present",
      date: "Nov 2024",
    },
    {
      companyName: "Collabera Technologies Pvt Ltd / Qualcomm India Private Limited",
      role: "Senior Business Process Analyst",
      duration: "Jul 2022 - Oct 2024",
      type: "double",
      date: "Jul 2022",
    },
    {
      companyName: "Procter and Gamble",
      role: "Supply Chain Implant (E-Commerce)",
      duration: "Nov 2021 - Jul 2022",
      type: "left",
      date: "April 2021",
    },
    {
      companyName: "Nivea India Pvt Ltd",
      role: "Supply Chain Customer Implant",
      duration: "Dec 2020 - April 2021",
      type: "double",
      date: "Dec 2020",
    },
    {
      companyName: "Morchem India Pvt Ltd",
      role: "Logistics and Customer Service Administration",
      duration: "Jul 2020 - Dec 2020",
      type: "left",
      date: "Jun 2020",
    },
    {
      companyName: "Lakme Lever Pvt Ltd",
      role: "Supply Chain Executive",
      duration: "Nov 2019 - Jun 2020",
      type: "double",
      date: "Aug 2018",
    },
    {
      companyName: "Tech Mahindra Business Services",
      role: "Customer Relations Advisor",
      duration: "May 2017 - Aug 2018",
      type: "left",
      date: "May 2017",
    },
    {
      companyName: "Intelenet Global Services",
      role: "Senior Customer Service Executive",
      duration: "May 2016 - May 2017",
      type: "double",
      date: "May 2016",
    },
  ];

  return (
    <section className={`${classes.experienceContainer} container`}>
      <div className="section-title">Professional Experience so far</div>

      {experienceData.map((exp, index) => {
        if (exp.type === "present") {
          return (
            <div key={index} className={classes.expBlock}>
              <div className={classes.expBlockLeft}></div>
              <span
                className={`${classes.expBlockSeperator} ${classes.expBlockSeperatorFirst}`}
              >
                <span className={classes.presentDayTag}>Present Day</span>
                <span className={`hide-md ${classes.expYearTagLeft}`}>
                  {exp.date}
                </span>
                <span className={`hide-sm ${classes.expYearTagRight}`}>
                  {exp.date}
                </span>
              </span>
              <div className={classes.expBlockRight}>
                <ExperienceContent {...exp} />
              </div>
            </div>
          );
        }

        if (exp.type === "double") {
          return (
            <div key={index} className={classes.expBlock}>
              <div className={classes.expBlockLeft}>
                <ExperienceContent {...exp} className="hide-md" />
              </div>
              <span className={classes.expBlockSeperator}>
                <span className={classes.expYearTagRight}>{exp.date}</span>
              </span>
              <div className={classes.expBlockRight}>
                <ExperienceContent {...exp} className="hide-sm" />
              </div>
            </div>
          );
        }

        return (
          <div key={index} className={classes.expBlock}>
            <div className={classes.expBlockLeft}></div>
            <span className={classes.expBlockSeperator}>
              <span className={classes.expYearTagLeft}>{exp.date}</span>
            </span>
            <div className={classes.expBlockRight}>
              <ExperienceContent {...exp} />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Experience;
