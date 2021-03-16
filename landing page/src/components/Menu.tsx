import React, { useCallback, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

interface MenuProps {
  toggleMenu: boolean;
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Menu: React.FC<MenuProps> = ({ toggleMenu, setToggleMenu }) => {
  const animateMenu = useCallback(() => {
    switch (toggleMenu) {
      case true:
        gsap.set(".nav", { duration: 0, display: "block" });
        gsap.set(".nav_child", { duration: 1, height: "100%" });

        //Stagger the links
        gsap.from(".links", {
          opacity: 0,
          y: 100,
          delay: 0.7,
          ease: "bounce",
          stagger: 0.3,
          overflow: "hidden",
        });

        gsap.from(".nav_child", {
          duration: 1,
          ease: "Power4.easeInOut",
          stagger: 0.02,
          height: "0",
          transformOrigin: "right top",
          skewY: 7,
        });
        break;

      default:
        gsap.to(".nav_child", {
          ease: "Power4.easeInOut",
          stagger: 0.02,
          height: "0",
        });
        break;
    }
  }, [toggleMenu]);

  const handleHover = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    skewX: number,
    y: number
  ) => {
    gsap.to(event.target, {
      duration: 0.5,
      y,
      skewX,
      ease: "power4.inOut",
    });
  };

  useEffect(() => {
    animateMenu();
  }, [animateMenu, toggleMenu]);

  return (
    <nav className="nav" onClick={() => setToggleMenu(false)}>
      <div className="nav_links nav_child">
        <ul>
          <Link
            to="/about"
            className="links"
            onMouseEnter={(event) => handleHover(event, 4, 6)}
            onMouseLeave={(event) => handleHover(event, -4, 0)}
          >
            About
          </Link>

          <Link
            to="/gallary"
            className="links"
            onMouseEnter={(event) => handleHover(event, 4, 6)}
            onMouseLeave={(event) => handleHover(event, -4, 0)}
          >
            Gallary
          </Link>

          <Link
            to="/contact"
            className="links"
            onMouseEnter={(event) => handleHover(event, 4, 6)}
            onMouseLeave={(event) => handleHover(event, -4, 0)}
          >
            Contact
          </Link>
        </ul>
      </div>

      <div className="nav_before nav_child"></div>
    </nav>
  );
};
