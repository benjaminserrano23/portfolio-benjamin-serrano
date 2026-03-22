import { useCallback } from "react";

export function useRipple() {
  const trigger = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement("span");
    ripple.className = "ripple-effect";
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    el.classList.add("ripple-container");
    el.appendChild(ripple);

    ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
  }, []);

  return trigger;
}
