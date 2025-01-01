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

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: shoe,
      start: "top 0%",
      end: "200% -10%",
      scrub: 1,
    },
  });

  if (shoe) {
    tl.set(shoe, {
      rotate: -45,
      top: "20%",
      right: "3%",
      scale: 1,
    })
      .to(shoe, {
        duration: 0.6,
        scale: 0.8,
        top: "150%",
        right: "136%",
      })
      .to(shoe, {
        duration: 0.6,
        rotate: -60,
        top: "340%",
        right: "68%",
        scale: 0.18,
      });
  }

  return tl;
};
