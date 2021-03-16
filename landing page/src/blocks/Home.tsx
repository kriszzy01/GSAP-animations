import React, { useEffect } from "react";
import { gsap } from "gsap";

export const Home: React.FC = () => {
  useEffect(() => {
    gsap.from(".intro", {
      duration: 2,
      xPercent: -20,
      opacity: 0,
      scale: 0,
      ease: "back",
    });
  }, []);

  return (
    <div>
      <h5 className="intro">
        The <b>SHOPPER</b>, is a worldclass, innovative, global online ecommerce
        platform, that meets your everyday daily needs.
      </h5>
    </div>
  );
};
