import React, { useState } from "react";
import "../styles/collapse.scss"; // à adapter à ton arborescence

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={toggleCollapse}>
        <h3 className="collapse__title">{title}</h3>
        <img
          src="/arrow-up.png"
          alt="flèche"
          className={`collapse__arrow ${isOpen ? "open" : ""}`}
        />
      </div>

      {isOpen && (
        <div className="collapse__content">
          {children}
        </div>
      )}
    </div>
  );
}
