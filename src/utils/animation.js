import gsap from "gsap";

export const navbarAnimation = () => {
  const navbar = document.querySelector(".navbar");
  gsap.set(navbar, { y: -100 });
  gsap.to(navbar, {
    y: 0,
    opacity: 1,
    duration: 0.7,
  });
};
