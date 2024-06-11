import { useTheme } from "../../common/ThemeContext";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";

const ThemeIcon= () => {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === "light" ? sun : moon;

  return <img src={themeIcon} alt="Color mode icon"
  onClick={toggleTheme} />;
};

export default ThemeIcon;