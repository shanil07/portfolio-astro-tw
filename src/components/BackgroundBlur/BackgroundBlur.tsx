import React, { useEffect, useRef, useState } from "react";

type Props = {
  className?: string;
};

const BackgroundBlur = ({ className }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const circle = document.getElementById("blur-circle");
    requestAnimationFrame(() =>
      circle?.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      )
    );
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={`${className} bg-default`}>
      <div
        id="blur-circle"
        className={`h-[200px] aspect-square fixed -translate-x-1/2 -translate-y-1/2 
        transition-[left,top,translate-x,translate-y,background-image] delay-0 ease duration-[0.5s]`}
        ref={ref}
      >
        <div
          className={`bg-blueGradient w-full h-full rounded-full animate-customSpin
          transition-[left,top,translate-x,translate-y,background] delay-0 ease duration-[0.5s]`}
        />
      </div>
    </div>
  );
};

export { BackgroundBlur };
