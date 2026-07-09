import { useRef, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const charRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  useEffect(() => {
    const n = text.length;
    const elements = charRefs.current;
    const unsubscribe = scrollYProgress.on("change", (v: number) => {
      for (let i = 0; i < n; i++) {
        const charStart = i / n;
        const charEnd = (i + 1) / n;
        const charProgress = Math.max(
          0,
          Math.min(1, (v - charStart) / (charEnd - charStart))
        );
        const opacity = 0.2 + 0.8 * charProgress;
        if (elements[i]) {
          elements[i]!.style.opacity = String(opacity);
        }
      }
    });
    return unsubscribe;
  }, [scrollYProgress, text]);

  return (
    <motion.p ref={ref} className={className} style={style}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          ref={(el) => {
            charRefs.current[i] = el;
          }}
          style={{ opacity: 0.2 }}
        >
          {char}
        </span>
      ))}
    </motion.p>
  );
}
