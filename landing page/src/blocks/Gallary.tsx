import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import joker from "../assets/joker.jpg";
import peeping from "../assets/peeping.jpg";

export const Gallary: React.FC = () => {
  const clamp = gsap.utils.clamp(-3, 3);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(".gallary", { transformOrigin: "right center", force3D: true });

    ScrollTrigger.create({
      trigger: ".gallary",
      onUpdate: ({ getVelocity }) => {
        const velocity = Math.round(getVelocity() / 300);

        gsap.to(".gallary", {
          duration: 0.8,
          ease: "power4",
          skewY: clamp(velocity),
        });
      },
    });
  }, []);

  return (
    <div className="gallary">
      <img src={joker} alt="joker" />
      <img src={peeping} alt="a boy peeping" />
      <img src={joker} alt="joker" />
      <img src={peeping} alt="a boy peeping" />
    </div>
  );
};
