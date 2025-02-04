import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function useAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
      const container = sectionRef.current.querySelector("[data-timeline='container']");
      const images = sectionRef.current.querySelectorAll("[data-timeline='img']");
      const content = sectionRef.current.querySelector("[data-timeline='content']");
      const card = sectionRef.current.querySelector("[data-timeline='card']");

      timeline
        .from(wrapper, { opacity: 0, y: 50, duration: 1 })
        .from(container, { opacity: 0, y: 50, duration: 1 }, "-=0.5")
        .from(images, { opacity: 0, scale: 0.8, stagger: 0.3, duration: 1 }, "-=0.5")
        .from(card, { opacity: 0, scale: 0.9, duration: 0.5 }, "-=0.5")
        .from(content, { opacity: 0, y: 20, duration: 1 }, "-=0.5");
    });
    return () => ctx.kill();
  }, []);

  return { sectionRef };
}
