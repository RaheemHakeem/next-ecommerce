import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import {
  LuGamepad,
  LuSmartphone,
  LuCamera,
  LuHeadphones,
} from "react-icons/lu";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";

const Categories = () => {
  return (
    <div>
      <div className="flex items-center">
        <div className="bg-[#DB4444] w-5 h-10 rounded"></div>
        <div className=" text-[#DB4444] font-semibold text-base ml-3">
          Categories
        </div>
      </div>

      <div className="mt-4 flex justify-between items-end">
        <div className="flex items-end">
          <h1 className="text-4xl font-semibold mr-[86px]">
            Browse By Category
          </h1>
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

      <div className=" my-[60px] flex justify-between">
        <div className=" w-[170px] h-[145px] border-solid border-[1px] flex flex-col justify-center items-center gap-y-2">
          <LuSmartphone className="text-[56px]" />
          <h2 className="text-base">Phones</h2>
        </div>
        <div className=" w-[170px] h-[145px] border-solid border-[1px] flex flex-col justify-center items-center gap-y-2">
          <HiOutlineComputerDesktop className="text-[56px]" />
          <h2 className="text-base">Computers</h2>
        </div>
        <div className=" w-[170px] h-[145px] border-solid border-[1px] flex flex-col justify-center items-center gap-y-2">
          <BsSmartwatch className="text-[56px]" />
          <h2 className="text-base">SmartWatch</h2>
        </div>
        <div className=" w-[170px] h-[145px] border-solid border-[1px] flex flex-col justify-center items-center gap-y-2">
          <LuCamera className="text-[56px]" />
          <h2 className="text-base">Camera</h2>
        </div>
        <div className=" w-[170px] h-[145px] border-solid border-[1px] flex flex-col justify-center items-center gap-y-2">
          <LuHeadphones className="text-[56px]" />
          <h2 className="text-base">HeadPhones</h2>
        </div>
        <div className=" w-[170px] h-[145px] border-solid border-[1px] flex flex-col justify-center items-center gap-y-2">
          <LuGamepad className="text-[56px]" />
          <h2 className="text-base">Gaming</h2>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Categories;
