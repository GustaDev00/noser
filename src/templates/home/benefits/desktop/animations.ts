import { useEffect, useRef } from "react";
import gsap from "gsap";

export default () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current || !containerRef.current) return;

      const container = containerRef.current;
      const totalScrollWidth = container.scrollWidth - container.offsetWidth;

      gsap.to(container, {
        x: () => -totalScrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=80%",
          scrub: 2,
          pin: true,
          anticipatePin: 1,
          markers: false,
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return { sectionRef, containerRef };
};
