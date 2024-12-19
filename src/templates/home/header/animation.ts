/* eslint-disable import/no-anonymous-default-export */
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      const timeline = gsap.timeline({});

      const background = sectionRef.current.querySelector("[data-timeline='background']");
      const wrapper = sectionRef.current.querySelector("[data-timeline='wrapper']");
      const content = sectionRef.current.querySelector("[data-timeline='content']");
      const title = sectionRef.current.querySelector("[data-timeline='title']");
      const line = sectionRef.current.querySelector("[data-timeline='line']");
      const subtitle = sectionRef.current.querySelector("[data-timeline='subtitle']");
      const br = sectionRef.current.querySelector("[data-timeline='br']");
      const button = sectionRef.current.querySelector("[data-timeline='button']");
      const divider = sectionRef.current.querySelector("[data-timeline='divider']");
      const container = sectionRef.current.querySelector("[data-timeline='container']");
      const cardPeoples = sectionRef.current.querySelector("[data-timeline='card-peoples']");
      const cardQuality = sectionRef.current.querySelector("[data-timeline='card-quality']");

      timeline
        .from(background, { opacity: 0, duration: 1 })
        .from(wrapper, { opacity: 0, y: 50, duration: 1 }, "-=0.5")
        .from(content, { opacity: 0, y: 50, duration: 1 }, "-=0.5")
        .from(title, { opacity: 0, y: 20, duration: 0.5 }, "-=0.5")
        .from(line, { width: 0, duration: 0.5 }, "-=0.5")
        .from(subtitle, { opacity: 0, y: 20, duration: 0.5 }, "-=0.5")
        .from(br, { opacity: 0, duration: 0.5 }, "-=0.5")
        .from(button, { opacity: 0, y: 20, duration: 0.5 }, "-=0.5")
        .from(divider, { width: 0, duration: 0.5 }, "-=0.5")
        .from(container, { opacity: 0, y: 50, duration: 1 }, "-=0.5")
        .from(cardPeoples, { opacity: 0, y: 50, duration: 1 }, "-=0.5")
        .from(cardQuality, { opacity: 0, y: 50, duration: 1 }, "-=0.5");
    });

    return () => {
      ctx.kill();
    };
  }, []);

  return { sectionRef };
};
