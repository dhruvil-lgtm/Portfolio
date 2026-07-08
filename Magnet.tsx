import { useRef, useCallback, type ReactNode } from "react";

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className,
}: MagnetProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const wrapper = wrapperRef.current;
      const content = contentRef.current;
      if (!wrapper || !content) return;

      const rect = wrapper.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const distX = mouseX - centerX;
      const distY = mouseY - centerY;
      const distance = Math.sqrt(distX * distX + distY * distY);

      if (distance < Math.max(rect.width, rect.height) + padding) {
        const moveX = distX / strength;
        const moveY = distY / strength;
        content.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
        content.style.transition = activeTransition;
      }
    },
    [padding, strength, activeTransition]
  );

  const handleMouseLeave = useCallback(() => {
    const content = contentRef.current;
    if (!content) return;
    content.style.transform = "translate3d(0, 0, 0)";
    content.style.transition = inactiveTransition;
  }, [inactiveTransition]);

  return (
    <div
      ref={wrapperRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={contentRef} style={{ willChange: "transform" }}>
        {children}
      </div>
    </div>
  );
}
