import React, { useState, useEffect } from "react";
import { HiArrowSmUp } from "react-icons/hi";

const ScrollUpBtn = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <>
      <button
        className="cursor-pointer z-[10000] bg-[#944A07] animate-bounce fixed h-[60px] rounded-full w-[60px] bottom-14 right-7 text-[2rem]"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
        title="scroll Up"
      >
        <HiArrowSmUp className="text-white mx-auto" />
      </button>
    </>
  );
};

export default ScrollUpBtn;
