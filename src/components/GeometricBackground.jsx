import React, { useEffect, useState } from "react";

export const GeometricBackground = () => {
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    const generateShapes = () => {
      const newShapes = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        type: Math.random() > 0.5 ? "circle" : "square",
        size: Math.random() * 20 + 10,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.2 + 0.1,
        animationDuration: Math.random() * 20 + 10,
        animationDelay: Math.random() * 5,
      }));
      setShapes(newShapes);
    };

    generateShapes();
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`absolute ${shape.type === "circle" ? "rounded-full" : ""} bg-primary/20`}
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            opacity: shape.opacity,
            animation: `float ${shape.animationDuration}s ease-in-out infinite`,
            animationDelay: `${shape.animationDelay}s`,
          }}
        />
      ))}
    </div>
  );
};