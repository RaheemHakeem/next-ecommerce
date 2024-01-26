'use client'

import Image from "next/image";

import { useEffect, useState } from "react";
import jbl from "../../assets/jbl.png";
import "./index.css";

const SecondAD = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  // Timer
  useEffect(() => {
    const futureDate = new Date('August 25, 2024').getTime();
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
    <div className="jbl_img text-white flex py-[70px] ">
      <div className=" ml-[56px]">
        <h2 className="text-base text-[#00ff66] mb-8">Categories</h2>
        <h1 className="text-5xl font-semibold mb-11">
          Enhance Your <br />Music Experience
        </h1>
        <div className="flex justify-between max-w-80 mb-10">
          <div className=" bg-white text-black rounded-full w-[62px] h-[62px] flex flex-col justify-center items-center">
            <p className="font-bold">{timerDays}</p> <p className="text-[11px]">Days</p>
          </div>
          <div className=" bg-white text-black rounded-full w-[62px] h-[62px] flex flex-col justify-center items-center">
            <p className="font-bold">{timerHours}</p> <p className="text-[11px]">Hours</p>
          </div>
          <div className=" bg-white text-black rounded-full w-[62px] h-[62px] flex flex-col justify-center items-center">
            <p className="font-bold">{timerMinutes}</p> <p className="text-[11px]">Minutes</p>
          </div>
          <div className=" bg-white text-black rounded-full w-[62px] h-[62px] flex flex-col justify-center items-center">
            <p className="font-bold">{timerSeconds}</p> <p className="text-[11px]">Seconds</p>
          </div>
        </div>
        <button className="w-[170px] h-14 bg-[#00ff66] text-white rounded text-base">Buy Now!</button>
      </div>
      {/* image */}
      <div className=" flex-1 flex justify-center items-center pl-6 mr-[60px]">
      <Image src={jbl} alt="JBL" placeholder="blur" quality={100} />
      </div>
    </div>
  );
};

export default SecondAD;
