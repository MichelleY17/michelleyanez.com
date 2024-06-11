import React from "react";
import styles from "./HomeStyles.module.css";
import heroImg from "./../../../assets/fresh-burger.png";
import sun from "./../../../assets/sun.svg";
import moon from "./../../../assets/moon.svg";
import phantomLight from "../../../assets/phantom.png";
import phantomDark from "../../../assets/phantomcreepy.png";
import githubLight from "./../../../assets/github-light.svg";
import githubDark from "./../../../assets/github-dark.svg";
import twitterLight from "./../../../assets/twitter-light.svg";
import twitterDark from "./../../../assets/twitter-dark.svg";
import linkedinLight from "./../../../assets/linkedin-light.svg";
import linkedinDark from "./../../../assets/linkedin-dark.svg";
import { useTheme } from "../../../common/ThemeContext";

function Home() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const phantomIcon = theme === "light" ? phantomLight : phantomDark;
  return (
    <section id="home" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Michelle Yanez"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        ></img>
      </div>
      <div className={styles.HomeContainer}>
        <h1>
          {" "}
          <img src={phantomIcon} alt="" />
          Michelle Yanez
        </h1>
        <h2>Web Developer</h2>
        <span>
          <a href="https://github.com/MichelleY17">
            <img src={githubIcon} tralt="Twitter icon" />
          </a>
          <a href="https://twitter.com/@Yan58917">
            <img src={twitterIcon} tralt="Twitter icon" />
          </a>
          <a
            href=" https://www.linkedin.com/in/michelle-yanez-75393b304?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B1GVvG0WuR4WuLS6hcSh3cw%3D%3D
"
          >
            <img src={linkedinIcon} tralt="linkedin icon" />
          </a>
        </span>
      </div>
    </section>
  );
}

export default Home;
// rfce snip
