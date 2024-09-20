"use client";

import Particles from '@components/magicui/particles';
import useThemeColor from "@hooks/UseThemeColor";

const ParticlesTheme = () => {
  const color = useThemeColor({lightColor: "#ffffff", darkColor: "#000000"});
  console.log(color);
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
