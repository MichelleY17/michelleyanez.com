import { useTheme } from "../../common/ThemeContext";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";

const Twitter = () => {
  const { theme } = useTheme();
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;

  return <img src={twitterIcon} alt="Github icon" />;
};

export default Twitter;