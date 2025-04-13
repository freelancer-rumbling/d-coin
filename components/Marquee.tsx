import { useEffect, useRef } from "react";

const Marque = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const text = textRef.current;
    if (text) {
      const textContent = text.textContent;
      const clone = text.cloneNode(true);
      clone.textContent = textContent;
      text.appendChild(clone);
    }
  }, []);

  return (
    <div className="scrolling-text text-white" ref={textRef}>
      asdasdasdasdasdasdasdasdasdasasdasdasdasdasdasdasdasdasdasdasdasasdasdasdasdasdasdasdasdasdasdasdasdasasdasdasdasdasdasdasdasdasdasdas
    </div>
  );
};

export default Marque;
