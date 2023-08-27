import React, { useEffect, useRef, useState } from "react";
import "./BackgroundBlur.css";

type Props = {
  className?: string;
};

const BackgroundBlur = ({ className }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent, duration: number = 4000) => {
    const { clientX, clientY } = e;
    const circle = document.getElementById("blur-circle");
    requestAnimationFrame(() => {
      circle?.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration, fill: "forwards" }
      );
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={`${className} bg-default`}>
      <div id="blur-circle" className="bg-blueGradient" ref={ref}></div>
      <div id="blur" />
    </div>
  );
};

export { BackgroundBlur };
