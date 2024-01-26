import Image from "next/image";

import { CiHeart } from "react-icons/ci";
import { PiEyeThin } from "react-icons/pi";
import chair from "../assets/chair.png";
import gamepad from "../assets/gamepad.png";

const BestSelling = () => {
  return (
    <div>
      <div className="flex items-center">
        <div className="bg-[#DB4444] w-5 h-10 rounded"></div>
        <div className=" text-[#DB4444] font-semibold text-base ml-3">
          This Month
        </div>
      </div>

      <div className="mt-4 flex justify-between items-end">
        <div className="flex items-end">
          <h1 className="text-4xl font-semibold mr-[86px]">
            Best Selling Products
          </h1>
        </div>

        <button className="w-[159px] h-[56px] bg-[#db4444] rounded text-white text-base">
          View All
        </button>
      </div>

      {/* BestSellingItems */}
      <div className="mt-10 flex gap-x-6">
        <div>
          {/* image */}
          <div className="w-[270px] h-[250px] bg-[#f5f5f5] relative">
            <div className=" absolute top-1/2 -translate-y-1/2 left-12 w-[190px] h-[180px] flex items-center justify-center">
              <Image src={chair} alt="items" placeholder="blur" quality={100} />
            </div>
            <div className="flex justify-end mx-3">
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
            <Image src={gamepad} alt="items" placeholder="blur" quality={100} />
            </div>
            <div className="flex justify-end mx-3">
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
    </div>
  );
};

export default BestSelling;
