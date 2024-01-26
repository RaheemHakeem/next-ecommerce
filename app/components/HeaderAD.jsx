"use client";

import { useEffect, useState } from "react";
import { FaApple, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import hero_endframe from "../assets/hero_endframe.png";

// AD Data
const data = [
  {
    id: 0,
    bg: "bg-black",
    icon: <FaApple className=" text-5xl" />,
    firstP: "iPhone 14 Series",
    heading: {
      heading1: "Up to 10%",
      heading2: "off Voucher",
    },
    image: hero_endframe,
  },
  {
    id: 1,
    bg: "bg-gray-800",
    icon: <FaApple className=" text-5xl" />,
    firstP: "iPhone 13 Series",
    heading: {
      heading1: "Up to 20%",
      heading2: "off Voucher",
    },
    image: hero_endframe,
  },
  {
    id: 2,
    bg: "bg-red-600",
    icon: <FaApple className=" text-5xl" />,
    firstP: "iPhone 12 Series",
    heading: {
      heading1: "Up to 15%",
      heading2: "off Voucher",
    },
    image: hero_endframe,
  },
  {
    id: 3,
    bg: "bg-green-600",
    icon: <FaApple className=" text-5xl" />,
    firstP: "iPhone 11 Series",
    heading: {
      heading1: "Up to 10%",
      heading2: "off Voucher",
    },
    image: hero_endframe,
  },
  {
    id: 4,
    bg: "bg-yellow-600",
    icon: <FaApple className=" text-5xl" />,
    firstP: "iPhone 10 Series",
    heading: {
      heading1: "Up to 20%",
      heading2: "off Voucher",
    },
    image: hero_endframe,
  },
];

const HeaderAD = () => {
  const [index, setIndex] = useState(2);
  const [cusorOver, setCusorOver] = useState(false);

  let slider;
  const startSlider = () => {
    slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
  };

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
    if (!cusorOver) {
      startSlider();
    }

    return () => clearInterval(slider);
  }, [index, data, cusorOver]);

  const handleMouseEnter = () => {
    setCusorOver(true);
  };

  const handleMouseLeave = () => {
    setCusorOver(false);
  };

  return (
    <div
      className="mt-10 ml-6"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {data.map((item) => {
        let display = "hidden";
        if (item.id === index) {
          display = "block";
        }
        return (
          <div
            className={`${display} ${item.bg} h-full w-full text-white transition-all ease-in-out`}
            key={item.id}
          >
            <div className="flex justify-between pl-16">
              <div className=" pt-[58px] flex flex-col space-y-5">
                <div className="flex items-center">
                  {item.icon}
                  <p className=" text-[12px] font-extralight ml-3">
                    {item.firstP}
                  </p>
                </div>
                <h1 className=" text-5xl font-semibold">
                  {item.heading.heading1} <br /> {item.heading.heading2}
                </h1>
                <Link href={""}>
                  <div className="flex items-center">
                    <div>
                      <h3 className="text-[16px]">Shop Now</h3>
                      <hr />
                    </div>

                    <FaArrowRight className="pl-3 text-2xl" />
                  </div>
                </Link>
              </div>
              {/* img */}
              <div className="pt-3">
                <Image
                  src={item.image}
                  alt="adHero"
                  placeholder="blur"
                  quality={100}
                />
              </div>
            </div>
            {/* buttons */}
            <div className="flex justify-center items-center pt-1 pb-4 gap-x-3">
              {data.map((item) => {
                let active = "border-none bg-gray-500";
                if (item.id === index) {
                  active = "border-2 bg-red-600";
                }
                return (
                  <button
                    className={`w-[10px] h-[10px] ${active} rounded-full`}
                    onClick={() => setIndex(item.id)}
                    key={item.id}
                  ></button>
                );
              })}

              {/* <button
                className={`w-[10px] h-[10px] ${active} rounded-full`}
                onClick={() => setIndex(1)}
              ></button>
              <button
                className={`w-[10px] h-[10px] ${active} rounded-full`}
                onClick={() => setIndex(2)}
              ></button>
              <button
                className={`w-[10px] h-[10px] ${active} rounded-full`}
                onClick={() => setIndex(3)}
              ></button>
              <button
                className={`w-[10px] h-[10px] ${active} rounded-full`}
                onClick={() => setIndex(4)}
              ></button> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HeaderAD;
