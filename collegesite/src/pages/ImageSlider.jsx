import React from "react";
import { useEffect, useState } from "react";

const images = [
  "./images/tcs.jpg",
  "./images/IBM.jpg",
  "./images/GNFC.png",
  "./images/kiwitech.png",
  "./images/wipro.jpg",
  "./images/accenture.png",
];
export default function ImageSlider() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container w-44 h-44 overflow-hidden relative">
      <div
        className="slider-track flex transition-transform duration-500 ease"
        style={{ transform: `translateX(-${currentIdx * 90}%)` }}
      >
        {images.map((src, index) => (
          <div className="slider-slide min-w-full " key={index}>
            <img
              src={src}
              className="w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
