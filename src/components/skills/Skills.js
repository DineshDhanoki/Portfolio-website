import React from "react";
import skillsStyles from "./Skills.styles";
import { ReactComponent as HtmlIcon } from "../../assets/icons/html.svg";
import { ReactComponent as CssIcon } from "../../assets/icons/css.svg";
import { ReactComponent as JSIcon } from "../../assets/icons/javascript.svg";
import { ReactComponent as ReactIcon } from "../../assets/icons/react.svg";
import { ReactComponent as TSIcon } from "../../assets/icons/typescript.svg";
import { ReactComponent as PythonIcon } from "../../assets/icons/python.svg";
import { ReactComponent as GQLIcon } from "../../assets/icons/graphql.svg";
import { ReactComponent as FigmaIcon } from "../../assets/icons/figma.svg";

const Skills = () => {
  const classes = skillsStyles();

  return (
    <section id="about" className={`${classes.skillsContainer} container`}>
      <div className="section-title">{`About me & my Career`}</div>
      <div className="section-description">
        {`Experienced Frontend Developer with 2 years of expertise in creating responsive, user-centric web applications. Proficient in HTML, CSS, JavaScript, and frameworks like React.js. Strong collaboration skills and a solid understanding of UI/UX principles. Committed to continuous improvement and staying updated with industry trends. .`}
      </div>
      <div className="section-sub-title">{`Skills I've used or practiced so far`}</div>
      <div className={classes.skillsList}>
        <div className={classes.skillsListItem}>
          <div className={classes.skillItemIcon}>
            <HtmlIcon />
          </div>
          <div className={classes.skillItemName}>HTML</div>
        </div>
        <div className={classes.skillsListItem}>
          <div className={classes.skillItemIcon}>
            <CssIcon />
          </div>
          <div className={classes.skillItemName}>CSS</div>
        </div>
        <div className={classes.skillsListItem}>
          <div className={classes.skillItemIcon}>
            <JSIcon />
          </div>
          <div className={classes.skillItemName}>JavaScript</div>
        </div>
        <div className={classes.skillsListItem}>
          <div className={classes.skillItemIcon}>
            <ReactIcon />
          </div>
          <div className={classes.skillItemName}>ReactJs</div>
        </div>
        <div className={classes.skillsListItem}>
          <div className={classes.skillItemIcon}>
            <TSIcon />
          </div>
          <div className={classes.skillItemName}>Typescript</div>
        </div>
        <div className={classes.skillsListItem}>
          <div className={classes.skillItemIcon}>
            <GQLIcon />
          </div>
          <div className={classes.skillItemName}>GraphQL</div>
        </div>
        <div className={classes.skillsListItem}>
          <div className={classes.skillItemIcon}>
            <PythonIcon />
          </div>
          <div className={classes.skillItemName}>Python</div>
        </div>
        <div className={classes.skillsListItem}>
          <div className={classes.skillItemIcon}>
            <FigmaIcon />
          </div>
          <div className={classes.skillItemName}>Figma</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
