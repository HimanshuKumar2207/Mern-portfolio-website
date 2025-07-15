import { useEffect } from "react";

const symbols = ["<>", "</>", "{}", "[]", "*", "⚙️", "⌘", "★", "∞", "∑"];
const colors = ["#4F46E5", "#D946EF", "#F59E0B", "#10B981", "#EF4444", "#3B82F6", "#6366F1"];

const ClickEffect = () => {
  useEffect(() => {
    const handleClick = (e) => {
      const count = 15; // number of symbols per click
      const radius = 600; // distance from center

      for (let i = 0; i < count; i++) {
        const angle = (2 * Math.PI * i) / count;
        const offsetX = Math.cos(angle) * radius;
        const offsetY = Math.sin(angle) * radius;

        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];

        const span = document.createElement("span");
        span.textContent = symbol;
        span.style.position = "fixed";
        span.style.left = `${e.clientX}px`;
        span.style.top = `${e.clientY}px`;
        span.style.fontSize = "20px";
        span.style.fontWeight = "bold";
        span.style.color = color;
        span.style.pointerEvents = "none";
        span.style.userSelect = "none";
        span.style.zIndex = "9999";

        const id = `float-${Date.now()}-${i}`;
        span.id = id;

        span.style.transform = `translate(0, 0)`;
        span.style.transition = `transform 10s ease-out, opacity 2s ease-in`;
        document.body.appendChild(span);

        // Trigger animation with delay
        requestAnimationFrame(() => {
          span.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(2)`;
          span.style.opacity = "0";
        });

        setTimeout(() => {
          span.remove();
        }, 10000);
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return null;
};

export default ClickEffect;
