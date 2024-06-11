import { useTheme } from "../../common/ThemeContext";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";

const GithubIcon = () => {
  const { theme } = useTheme();
  const githubIcon = theme === "light" ? githubLight : githubDark;

  return <img src={githubIcon} alt="Github icon" />;
};

export default GithubIcon;
