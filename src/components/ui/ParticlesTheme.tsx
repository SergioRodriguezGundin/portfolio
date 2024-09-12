"use client";

import { useEffect, useState } from "react";

import Particles from "@components/magicui/particles";

const ParticlesTheme = () => {
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    const handleThemeChange = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      console.log(theme);
      setColor(theme === "dark" ? "#ffffff" : "#000000");
    };

    handleThemeChange();
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Particles
      className="absolute inset-0"
      quantity={100}
      ease={80}
      color={color}
      refresh
    />
  );
};

export default ParticlesTheme;
