import { useTheme } from "../../common/ThemeContext";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";

const Linkedin = () => {
  const { theme } = useTheme();
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return <img src={linkedinIcon} alt="Github icon" />;
};

export default Linkedin;