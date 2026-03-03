"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed w-[500px] h-[500px] bg-white/3 rounded-full blur-3xl transition duration-200 ease-out z-0"
      style={{
        left: position.x - 250,
        top: position.y - 250,
      }}
    />
  );
}