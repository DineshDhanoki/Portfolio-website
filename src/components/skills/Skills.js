import React from "react";
import skillsStyles from "./Skills.styles";
import { ReactComponent as HtmlIcon } from "../../assets/icons/html.svg";
import { ReactComponent as CssIcon } from "../../assets/icons/css.svg";
import { ReactComponent as JSIcon } from "../../assets/icons/javascript.svg";
import { ReactComponent as ReactIcon } from "../../assets/icons/react.svg";
import { ReactComponent as JQueryIcon } from "../../assets/icons/jquery.svg";
import { ReactComponent as ReduxIcon } from "../../assets/icons/redux.svg";
import { ReactComponent as NodejsIcon } from "../../assets/icons/nodejs.svg";
import { ReactComponent as TSIcon } from "../../assets/icons/typescript.svg";
import { ReactComponent as PythonIcon } from "../../assets/icons/python.svg";
import { ReactComponent as MDBIcon } from "../../assets/icons/mongodb.svg";
import { ReactComponent as GQLIcon } from "../../assets/icons/graphql.svg";
import { ReactComponent as WebpackIcon } from "../../assets/icons/webpack.svg";

const Skills = () => {
  const classes = skillsStyles();

  return (
    <section id="about" className={`${classes.skillsContainer} container`}>
      <div className={`section-title`}>Skills</div>
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
            <ReduxIcon />
          </div>
          <div className={classes.skillItemName}>Redux</div>
        </div>
        <div className={classes.skillsListItem}>
          <div className={classes.skillItemIcon}>
            <WebpackIcon />
          </div>
          <div className={classes.skillItemName}>Webpack</div>
        </div>
        <div className={classes.skillsListItem}>
          <div className={classes.skillItemIcon}>
            <JQueryIcon />
          </div>
          <div className={classes.skillItemName}>JQuery</div>
        </div>
        <div className={classes.skillsListItem}>
          <div className={classes.skillItemIcon}>
            <TSIcon />
          </div>
          <div className={classes.skillItemName}>Typescript</div>
        </div>
        <div className={classes.skillsListItem}>
          <div className={classes.skillItemIcon}>
            <NodejsIcon />
          </div>
          <div className={classes.skillItemName}>NodeJs</div>
        </div>
        <div className={classes.skillsListItem}>
          <div className={classes.skillItemIcon}>
            <GQLIcon />
          </div>
          <div className={classes.skillItemName}>GraphQL</div>
        </div>
        <div className={classes.skillsListItem}>
          <div className={classes.skillItemIcon}>
            <MDBIcon />
          </div>
          <div className={classes.skillItemName}>MongoDB</div>
        </div>
        <div className={classes.skillsListItem}>
          <div className={classes.skillItemIcon}>
            <PythonIcon />
          </div>
          <div className={classes.skillItemName}>Python</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
