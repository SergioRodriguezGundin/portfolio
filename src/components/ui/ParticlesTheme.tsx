"use client";

import Particles from '@components/magicui/particles';
import useThemeColor from "@hooks/UseThemeColor";

const ParticlesTheme = () => {
  const color = useThemeColor({ lightColor: "#ffffff", darkColor: "#000000" });
  return (
    <Particles
      className="absolute inset-0"
      quantity={120}
      ease={80}
      color={color}
      refresh
    />
  );
};

export default ParticlesTheme;
