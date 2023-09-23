import React from "react";
import { useRef, useState, useEffect } from "react";

export default function Animation(props) {
  const [isVisible1, setIsVisible1] = useState(false);
  const element = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const element1 = element.current;
      if (element) {
        const elementTop = element1.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.75) {
          setIsVisible1(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        opacity: isVisible1 ? 1 : 0,
        transform: isVisible1 ? "translateY(0)" : "translateY(-20px)",
        transition: `all 0.75s ease ${props.delay} `,
      }}
      ref={element}
    >
      {props.children}
    </div>
  );
}
