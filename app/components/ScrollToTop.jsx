'use client'

import { IoMdArrowUp } from "react-icons/io";
import { styles } from "../styles";

const ScrollToTop = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
  return (
    <div className={`${styles.marginX} mt-[62px] mb-8 flex justify-end`}>
        <div className="flex">
          <button
            className="w-[26px] h-[26px] text-xl bg-slate-400 rounded-full flex justify-center items-center"
            onClick={scrollToTop}
          >
            <IoMdArrowUp />
          </button>
        </div>
      </div>
  )
}

export default ScrollToTop