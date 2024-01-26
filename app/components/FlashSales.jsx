'use client'

import { useEffect, useState } from "react";
import Image from "next/image";

import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { PiEyeThin } from "react-icons/pi";
import chair from "../assets/chair.png";
import gamepad from "../assets/gamepad.png";

const FlashSales = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  // Timer
  useEffect(() => {
    const futureDate = new Date('March 31, 2024').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = futureDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      let dayString = days.toString();
      let hourString = hours.toString();
      let minuteString = minutes.toString();
      let secondString = seconds.toString();

      if (dayString.length === 1) {
        dayString = "0" + dayString;
      }
      if (hourString.length === 1) {
        hourString = "0" + hourString;
      }
      if (minuteString.length === 1) {
        minuteString = "0" + minuteString;
      }
      if (secondString.length === 1) {
        secondString = "0" + secondString;
      }

      if (distance < 0) {
        // stop timer
        clearInterval(interval);
      } else {
        // update timer
        setTimerDays(dayString);
        setTimerHours(hourString);
        setTimerMinutes(minuteString);
        setTimerSeconds(secondString);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div className="flex items-center">
        <div className="bg-[#DB4444] w-5 h-10 rounded"></div>
        <div className=" text-[#DB4444] font-semibold text-base ml-3">
          Today's
        </div>
      </div>
      <div className="mt-4 flex justify-between items-end">
        <div className="flex items-end">
          <h1 className="text-4xl font-semibold mr-[86px]">Flash Sales</h1>
          {/* timer */}
          <div className="flex gap-2 items-center">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-xs font-bold">Days</h3>
              <p className="text-3xl font-extrabold">{timerDays}</p>
            </div>
            <p className="text-2xl font-bold text-[#db4444] pt-2">:</p>
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-xs font-bold">Hours</h3>
              <p className="text-3xl font-extrabold">{timerHours}</p>
            </div>
            <p className="text-2xl font-bold text-[#db4444] pt-2">:</p>
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-xs font-bold">Minutes</h3>
              <p className="text-3xl font-extrabold">{timerMinutes}</p>
            </div>
            <p className="text-2xl font-bold text-[#db4444] pt-2">:</p>
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-xs font-bold">seconds</h3>
              <p className="text-3xl font-extrabold">{timerSeconds}</p>
            </div>
          </div>
        </div>

        {/* button */}
        <div className="flex gap-3">
          <div className="flex">
            <button className="w-[23px] h-[23px] bg-slate-400 rounded-full flex justify-center items-center">
              <IoMdArrowBack />
            </button>
          </div>
          <div className="flex items-center">
            <button className="w-[23px] h-[23px] bg-slate-400 rounded-full flex justify-center items-center">
              <IoMdArrowForward />
            </button>
          </div>
        </div>
      </div>
      {/* FlashsalesItems */}
      <div className="mt-10 flex gap-x-6">
        <div>
          {/* image */}
          <div className="w-[270px] h-[250px] bg-[#f5f5f5] relative">
            <div className=" absolute top-1/2 -translate-y-1/2 left-12 w-[190px] h-[180px] flex items-center justify-center">
            <Image
                  src={chair}
                  alt="items"
                  placeholder="blur"
                  quality={100}
                />
            </div>
            <div className="flex justify-between mx-3">
              <div className="w-[55px] h-[26px] bg-[#db4444] rounded flex justify-center items-center mt-4 text-white">
                <p className=" text-xs font-thin">-40%</p>
              </div>
              <div className="flex flex-col mt-4 gap-y-2">
                <button className="w-[28px] h-[28px] bg-white rounded-full flex justify-center items-center">
                  <CiHeart className="text-2xl" />
                </button>
                <button className="w-[28px] h-[28px] bg-white rounded-full flex justify-center items-center">
                  <PiEyeThin className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
          {/* desc */}
          <div className="mt-2 flex flex-col gap-1">
            <h3 className="text-base font-bold">S-Series Comfort Chair </h3>
            <div className="flex gap-x-2">
              <p className="text-base text-[#db4444]">$375</p>
              <p className="text-base text-[#b9b7b7] line-through">$400</p>
            </div>
            <div className="flex gap-x-2">
              <p>rating??</p>
              <p>(99)</p>
            </div>
          </div>
        </div>
        {/* 2nd iteri */}
        <div>
          {/* image */}
          <div className="w-[270px] h-[250px] bg-[#f5f5f5] relative">
            <div className=" absolute top-1/2 -translate-y-1/2 left-12 w-[190px] h-[180px] flex items-center justify-center">
            <Image
                  src={gamepad}
                  alt="items"
                  placeholder="blur"
                  quality={100}
                />
              
            </div>
            <div className="flex justify-between mx-3">
              <div className="w-[55px] h-[26px] bg-[#db4444] rounded flex justify-center items-center mt-4 text-white">
                <p className=" text-xs font-thin">-40%</p>
              </div>
              <div className="flex flex-col mt-4 gap-y-2">
                <button className="w-[28px] h-[28px] bg-white rounded-full flex justify-center items-center">
                  <CiHeart className="text-2xl" />
                </button>
                <button className="w-[28px] h-[28px] bg-white rounded-full flex justify-center items-center">
                  <PiEyeThin className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
          {/* desc */}
          <div className="mt-2 flex flex-col gap-1">
            <h3 className="text-base font-bold">S-Series Comfort Chair </h3>
            <div className="flex gap-x-2">
              <p className="text-base text-[#db4444]">$375</p>
              <p className="text-base text-[#b9b7b7] line-through">$400</p>
            </div>
            <div className="flex gap-x-2">
              <p>rating??</p>
              <p>(99)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-[60px] flex justify-center">
        <button className="w-[234px] h-[56px] bg-[#db4444] rounded text-white text-base">
          View All Products
        </button>
      </div>

      <hr />
    </div>
  );
};

export default FlashSales;
