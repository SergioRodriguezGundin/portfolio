import { useEffect, useState } from "react";

const useThemeColor = ({lightColor, darkColor}: {lightColor: string, darkColor: string}) => {
  const [color, setColor] = useState(lightColor);

  useEffect(() => {
    const handleThemeChange = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      setColor(theme === "dark" ? lightColor : darkColor);
    };

    handleThemeChange();
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  return color;
};

export default useThemeColor;
