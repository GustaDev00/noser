import { useEffect, useRef } from "react";
import gsap from "gsap";

export default () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;

    const breadcrumb = headerRef.current.querySelector("[data-timeline=breadcrumb]");
    const modal = headerRef.current.querySelector("[data-timeline=modal]");
    const title = headerRef.current.querySelector("h1");
    const description = headerRef.current.querySelector("#descriptionHeader");
    const arrow = headerRef.current.querySelector("svg");

    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(breadcrumb, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 }).fromTo(
      title,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 },
      "-=0.7",
    );

    if (description) {
      tl.fromTo(description, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.5");
    }

    if (modal) {
      tl.fromTo(modal, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.3");
    }

    if (arrow) {
      tl.fromTo(arrow, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.1");

      gsap.to(arrow, { y: 1, duration: 2, repeat: -1, yoyo: true, ease: "power1.inOut" });
    }
  }, []);

  return { headerRef };
};
