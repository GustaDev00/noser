import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function useAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });

    const wrapper = sectionRef.current.querySelector("[data-timeline='wrapper']");
    const content = sectionRef.current.querySelector("[data-timeline='content']");
    const title = sectionRef.current.querySelector("[data-timeline='title']");
    const description = sectionRef.current.querySelector("[data-timeline='description']");
    const container = sectionRef.current.querySelector("[data-timeline='container']");
    const cards = sectionRef.current.querySelectorAll("[data-timeline='card']");

    timeline
      .from(wrapper, { opacity: 0, y: 50, duration: 1 })
      .from(content, { opacity: 0, y: 20, duration: 0.5 }, "-=0.5")
      .from(title, { opacity: 0, y: 20, duration: 0.5 }, "-=0.5")
      .from(description, { opacity: 0, y: 20, duration: 0.5 }, "-=0.5")
      .from(container, { opacity: 0, y: 50, duration: 1 }, "-=0.5")
      .from(cards, { opacity: 0, scale: 0.8, stagger: 0.3, duration: 1 }, "-=0.5");

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return { sectionRef };
}