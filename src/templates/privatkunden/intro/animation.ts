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
      const content = sectionRef.current.querySelector("[data-timeline='content']");
      const article = sectionRef.current.querySelector("[data-timeline='article']");
      const title = sectionRef.current.querySelector("[data-timeline='title']");
      const button = sectionRef.current.querySelector("[data-timeline='button']");
      const text = sectionRef.current.querySelector("[data-timeline='text']");
      const img = sectionRef.current.querySelector("[data-timeline='img']");

      timeline
        .from(wrapper, { opacity: 0, y: 50, duration: 1 })
        .from(content, { opacity: 0, y: 50, duration: 1 }, "-=0.5")
        .from(article, { opacity: 0, y: 20, duration: 0.5 }, "-=0.5")
        .from(title, { opacity: 0, y: 20, duration: 0.5 }, "-=0.5")
        .from(button, { opacity: 0, scale: 0.8, duration: 0.5 }, "-=0.5")
        .from(text, { opacity: 0, y: 20, duration: 0.5 }, "-=0.5")
        .from(img, { opacity: 0, scale: 1.2, duration: 1 }, "-=0.5");
    });
    return () => ctx.kill();
  }, []);

  return { sectionRef };
}
