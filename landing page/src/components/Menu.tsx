import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

import {
  menuHide,
  menuShow,
  onMouseHover,
  onMouseExit,
  staggerLinks,
} from "../utils";

import { State } from "../types";

interface MenuProps {
  state?: State;
}

export const Menu: React.FC<MenuProps> = ({ state }) => {
  useEffect(() => {
    if (!state?.clicked) {
      menuHide(".nav_links", ".nav_before");

      gsap.to(".nav", {
        duration: 1,
        display: "none",
      });
    } else if (state.clicked || (state.clicked && !state.initial)) {
      gsap.to(".nav", { duration: 0, display: "block" });

      gsap.to([".nav_before", ".nav_links"], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });

      menuShow(".nav_links", ".nav_before");

      staggerLinks(".links");
    }
  }, [state]);

  return (
    <nav className="nav">
      <div className="nav_links">
        <ul>
          <Link
            to="/about"
            className="links"
            onMouseEnter={onMouseHover}
            onMouseLeave={onMouseExit}
          >
            About
          </Link>

          <Link
            to="/gallary"
            className="links"
            onMouseEnter={onMouseHover}
            onMouseLeave={onMouseExit}
          >
            Gallary
          </Link>

          <Link
            to="/contact"
            className="links"
            onMouseEnter={onMouseHover}
            onMouseLeave={onMouseExit}
          >
            Contact
          </Link>
        </ul>
      </div>

      <div className="nav_before"></div>
    </nav>
  );
};
