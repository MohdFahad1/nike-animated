import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const navbarAnimation = () => {
  const navbar = document.querySelector(".navbar");
  gsap.set(navbar, { y: -100 });
  gsap.to(navbar, {
    y: 0,
    opacity: 1,
    duration: 0.7,
  });
};

export const shoeAnimation = () => {
  const shoe = document.querySelector(".shoe");

  const tl = gsap.timeline();

  if (shoe) {
    tl.set(shoe, {
      rotate: -45,
      top: "20%",
      right: "3%",
    });

    tl.to(shoe, {
      duration: 0.7,
      scale: 0.8,
      top: "150%",
      right: "130%",
      scrollTrigger: {
        trigger: shoe,
        start: "top 0%",
        end: "bottom 0%",
        markers: true,
        scrub: 1,
      },
    });
  }

  return tl;
};