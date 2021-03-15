import { gsap } from "gsap";

export const textIntro = (elem: string) => {
  gsap.from(elem, {
    duration: 2,
    xPercent: -20,
    opacity: 0,
    scale: 0,
    ease: "back",
  });
};

export const menuShow = (elem1: string, elem2: string) => {
  gsap.from([elem1, elem2], {
    duration: 1,
    height: 0,
    overflow: "hidden",
    transformOrigin: "right top",
    skewY: 4,
    ease: "power4.inOut",
    stagger: (index, target, list) => {
      return index * 0.07;
    },
  });
};

export const menuHide = (elem1: string, elem2: string) => {
  gsap.to([elem1, elem2], {
    duration: 0.8,
    height: 0,
    ease: "power4.inOut",
    stagger: 0.07,
  });
};

export const staggerLinks = (elem: string) => {
  gsap.from(elem, {
    y: 100,
    delay: 0.7,
    ease: "bounce",
    stagger: 0.3,
  });
};

export const onMouseHover = (event: any) => {
  gsap.to(event.target, {
    duration: 0.5,
    y: 4,
    skewX: 6,
    ease: "power4.inOut",
  });
};

export const onMouseExit = (event: any) => {
  gsap.to(event.target, {
    duration: 0.5,
    y: -4,
    skewX: 0,
    ease: "power4.inOut",
  });
};

export const skewGallary = (elem1: string) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(elem1, { transformOrigin: "right center", force3D: true });
};
