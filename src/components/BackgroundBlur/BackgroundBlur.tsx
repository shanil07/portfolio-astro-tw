import React, { useEffect, useRef, useState } from "react";

type Props = {
  className?: string;
};

const BackgroundBlur = ({ className }: Props) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    requestAnimationFrame(() =>
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
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
        className={`h-[200px] aspect-square fixed -translate-x-1/2 -translate-y-1/2 
        transition-[left,top,translate-x,translate-y] delay-0 ease duration-[0.5s]`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        ref={ref}
      >
        <div
          className={`bg-blueGradient w-full h-full rounded-full animate-customSpin
          `}
        />
      </div>
    </div>
  );
};

export { BackgroundBlur };
