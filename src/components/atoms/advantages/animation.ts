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

      const bg = sectionRef.current.querySelector("[data-timeline='bg']");
      const wrapper = sectionRef.current.querySelector("[data-timeline='wrapper']");
      const title = sectionRef.current.querySelector("[data-timeline='title']");
      const container = sectionRef.current.querySelector("[data-timeline='container']");
      const contents = sectionRef.current.querySelectorAll("[data-timeline='content']");

      timeline
        .from(bg, { opacity: 0, scale: 1.1, duration: 1 })
        .from(wrapper, { opacity: 0, y: 50, duration: 1 }, "-=0.5")
        .from(title, { opacity: 0, y: 20, duration: 0.5 }, "-=0.5")
        .from(container, { opacity: 0, y: 30, duration: 1 }, "-=0.5")
        .from(contents, { opacity: 0, y: 20, stagger: 0.3, duration: 0.5 }, "-=0.5");
    }, []);

    return () => ctx.kill();
  });

  return { sectionRef };
}
