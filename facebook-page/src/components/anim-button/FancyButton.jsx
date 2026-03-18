"use client";

import styles from "@/src/components/anim-button/FancyButton.module.css";

const FancyButton = ({
  children = "Work with us",
  onClick,
  bgOriginal = "#2563eb",
  textOriginal = "#000",
  bgHover = "#000",
  textHover = "#fff",
}) => {
  return (
    <button
      className={styles.btn}
      onClick={onClick}
      style={{
        "--bg-original": bgOriginal,
        "--text-original": textOriginal,
        "--bg-hover": bgHover,
        "--text-hover": textHover,
      }}
    >
      <div className={styles.original}>{children}</div>
      <div className={styles.letters}>
        {children.split("").map((char, index) => (
          <span
            key={index}
            style={{ transitionDelay: `${index * 0.05}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </button>
  );
};

export default FancyButton;
