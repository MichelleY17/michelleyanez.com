import React from "react";
import "../about/About.css";
import githubIcon from "./../../../assets/github-light.svg";
import twitterIcon from "./../../../assets/twitter-light.svg";
import linkedinIcon from "./../../../assets/linkedin-light.svg";
import CV from "./../../../assets/MIchelle-Yanez-Resume-pro.pdf";

import GithubIcon from "../../icons/Github";

function About() {
  return (
    <section id="about">
      <div>
        <p>dfgbghngfhnc</p>
        <span>
          <a href="https://github.com/MichelleY17">
            <GithubIcon />
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
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default About;
