"use client";

import Link from "next/link";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { useState, useContext, useEffect, useRef } from "react";

const lang = [
  {
    id: 1,
    language: "English",
  },
  {
    id: 2,
    language: "Spanish",
  },
  {
    id: 3,
    language: "French",
  },
  {
    id: 4,
    language: "German",
  },
];

const TopHeader = () => {
  const [isLanguageBarOpen, setIsLanguageBarOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const [langList, setLangList] = useState([]);

  // language selector
  const openLanguageBar = () => {
    setIsLanguageBarOpen(true);
  };
  const closeLanguageBar = () => {
    setIsLanguageBarOpen(false);
  };
  const activeLanguage = (id) => {
    const active = lang.find((item) => item.id === id);
    setLanguage(active.language);
  };
  useEffect(() => {
    const newLangList = lang.filter((item) => item.language !== language);
    setLangList(newLangList);
    setIsLanguageBarOpen(false);
  }, [language]);

  return (
    <div className="bg-black text-white h-12 flex justify-between items-center md:pr-[135px] sm:pr-[44px] pr-[12px] text-sm">
      <div></div>
      <div className=" text-[#d9d9d9]">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <span className="ml-2 text-white underline font-semibold">
          <Link href={''}>ShopNow</Link>
        </span>
      </div>
      <div className="flex justify-center items-center">
        <div className="relative">
          <p className=" mr-1">{language}</p>
          <div
            className={`${
              isLanguageBarOpen ? "flex" : "hidden"
            } flex-col absolute bg-black -ml-1 pt-2 pl-1 pr-6 pb-2`}
          >
            {langList.map((item) => {
              return (
                <div className="cursor-pointer mt-1" key={item.id}>
                  <p onClick={() => activeLanguage(item.id)}>{item.language}</p>
                </div>
              );
            })}
          </div>
        </div>

        <button
          className={`${isLanguageBarOpen ? "hidden" : "flex"} text-xl`}
          onClick={openLanguageBar}
        >
          <RiArrowDownSLine />
        </button>
        <button
          className={`${isLanguageBarOpen ? "flex" : "hidden"} text-xl`}
          onClick={closeLanguageBar}
        >
          <RiArrowUpSLine />
        </button>
      </div>
    </div>
  );
};

export default TopHeader;
