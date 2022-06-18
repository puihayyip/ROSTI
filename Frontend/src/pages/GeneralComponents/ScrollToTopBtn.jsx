import React, { useState, useEffect } from "react";
import styles from "./ScrollToTopBtn.module.css";
import { FaArrowAltCircleUp } from "react-icons/fa";

function ScrollToTopBtn() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <FaArrowAltCircleUp
      className={visible ? styles.scrollBtn : styles.hidden}
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    />
  );
}

export default ScrollToTopBtn;
