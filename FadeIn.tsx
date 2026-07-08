import { type ReactNode } from "react";
import { motion } from "framer-motion";

interface FadeInProps {
  children?: ReactNode;
  as?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  [key: string]: unknown;
}

export function FadeIn({
  children,
  as = "div",
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  ...rest
}: FadeInProps) {
  const MotionComponent = motion.create(as);

  return (
    <MotionComponent
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}
