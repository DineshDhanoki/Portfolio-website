import React from "react";
import experienceStyles from "./Experience.styles";
import { ReactComponent as CompanyIcon } from "../../assets/icons/qualcomm.svg";

const Experience = () => {
  const classes = experienceStyles();

  return (
    <section className={`${classes.experienceContainer} container`}>
      <div className={`section-title`}>Professional Experience so far</div>

      {/* Current: Qualcomm/Collabera */}
      <div className={classes.expBlock}>
        <div className={classes.expBlockLeft}></div>
        <span
          className={`${classes.expBlockSeperator} ${classes.expBlockSeperatorFirst}`}
        >
          <span className={classes.presentDayTag}>Present Day</span>
          <span className={`hide-md ${classes.expYearTagLeft}`}>Jul 2022</span>
          <span className={`hide-sm ${classes.expYearTagRight}`}>Jul 2022</span>
        </span>
        <div className={classes.expBlockRight}>
          <div className="exp-block-content">
            <div className={classes.companyLogo}>
              <CompanyIcon />
            </div>
            <div className={classes.companyName}>
              Collabera Technologies / Qualcomm India
            </div>
            <div className={classes.role}>
              Frontend Developer / Senior Business Process Analyst
            </div>
            <div className={classes.duration}>Jul 2022 - Oct 2024</div>
          </div>
        </div>
      </div>

      {/* P&G */}
      <div className={classes.expBlock}>
        <div className={classes.expBlockLeft}>
          <div className="exp-block-content hide-md">
            <div className={classes.companyLogo}>
              <CompanyIcon />
            </div>
            <div className={classes.companyName}>Procter and Gamble</div>
            <div className={classes.role}>
              Supply Chain Implant (E-Commerce)
            </div>
            <div className={classes.duration}>Nov 2021 - Jul 2022</div>
          </div>
        </div>
        <span className={classes.expBlockSeperator}>
          <span className={classes.expYearTagRight}>July 2022</span>
        </span>
        <div className={classes.expBlockRight}>
          <div className="exp-block-content hide-sm">
            <div className={classes.companyLogo}>
              <CompanyIcon />
            </div>
            <div className={classes.companyName}>Procter and Gamble</div>
            <div className={classes.role}>
              Supply Chain Implant (E-Commerce)
            </div>
            <div className={classes.duration}>Nov 2021 - Jul 2022</div>
          </div>
        </div>
      </div>

      {/* Nivea */}
      <div className={classes.expBlock}>
        <div className={classes.expBlockLeft}></div>
        <span className={classes.expBlockSeperator}>
          <span className={classes.expYearTagLeft}>Dec 2020</span>
        </span>
        <div className={classes.expBlockRight}>
          <div className="exp-block-content">
            <div className={classes.companyLogo}>
              <CompanyIcon />
            </div>
            <div className={classes.companyName}>Nivea India Pvt Ltd</div>
            <div className={classes.role}>Supply Chain Customer Implant</div>
            <div className={classes.duration}>Nov 2021 - Jul 2022</div>
          </div>
        </div>
      </div>

      {/* Morchem */}
      <div className={classes.expBlock}>
        <div className={classes.expBlockLeft}>
          <div className="exp-block-content hide-md">
            <div className={classes.companyLogo}>
              <CompanyIcon />
            </div>
            <div className={classes.companyName}>Morchem India Pvt Ltd</div>
            <div className={classes.role}>
              Logistics and Customer Service Administration
            </div>
            <div className={classes.duration}>Jul 2020 - Dec 2020</div>
          </div>
        </div>
        <span className={classes.expBlockSeperator}>
          <span className={classes.expYearTagRight}>Jul 2020</span>
        </span>
        <div className={classes.expBlockRight}>
          <div className="exp-block-content hide-sm">
            <div className={classes.companyLogo}>
              <CompanyIcon />
            </div>
            <div className={classes.companyName}>Morchem India Pvt Ltd</div>
            <div className={classes.role}>
              Logistics and Customer Service Administration
            </div>
            <div className={classes.duration}>Jul 2020 - Dec 2020</div>
          </div>
        </div>
      </div>

      {/* Lakme */}
      <div className={classes.expBlock}>
        <div className={classes.expBlockLeft}></div>
        <span className={classes.expBlockSeperator}>
          <span className={classes.expYearTagLeft}>Nov 2018</span>
        </span>
        <div className={classes.expBlockRight}>
          <div className="exp-block-content">
            <div className={classes.companyLogo}>
              <CompanyIcon />
            </div>
            <div className={classes.companyName}>Lakme Lever Pvt Ltd</div>
            <div className={classes.role}>Supply Chain Executive</div>
            <div className={classes.duration}>Nov 2019 - Jun 2020</div>
          </div>
        </div>
      </div>

      {/* Tech Mahindra */}
      <div className={classes.expBlock}>
        <div className={classes.expBlockLeft}>
          <div className="exp-block-content hide-md">
            <div className={classes.companyLogo}>
              <CompanyIcon />
            </div>
            <div className={classes.companyName}>
              Tech Mahindra Business Services
            </div>
            <div className={classes.role}>Customer Relations Advisor</div>
            <div className={classes.duration}>May 2017 - Aug 2018</div>
          </div>
        </div>
        <span className={classes.expBlockSeperator}>
          <span className={classes.expYearTagRight}>May 2017</span>
        </span>
        <div className={classes.expBlockRight}>
          <div className="exp-block-content hide-sm">
            <div className={classes.companyLogo}>
              <CompanyIcon />
            </div>
            <div className={classes.companyName}>
              Tech Mahindra Business Services
            </div>
            <div className={classes.role}>Customer Relations Advisor</div>
            <div className={classes.duration}>May 2017 - Aug 2018</div>
          </div>
        </div>
      </div>

      {/* Intelenet */}
      <div className={classes.expBlock}>
        <div className={classes.expBlockLeft}></div>
        <span className={classes.expBlockSeperator}>
          <span className={classes.expYearTagLeft}>May 2016</span>
        </span>
        <div className={classes.expBlockRight}>
          <div className="exp-block-content">
            <div className={classes.companyLogo}>
              <CompanyIcon />
            </div>
            <div className={classes.companyName}>Intelenet Global Services</div>
            <div className={classes.role}>
              Senior Customer Service Executive
            </div>
            <div className={classes.duration}>May 2016 - May 2017</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
