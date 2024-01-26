import Image from "next/image";

import girls from "../assets/2girls.png";
import { BsShopWindow } from "react-icons/bs";
import {
  PiCurrencyCircleDollarLight,
  PiTwitterLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
} from "react-icons/pi";
import { FaSackDollar } from "react-icons/fa6";
import { TbShoppingBag } from "react-icons/tb";
import { styles } from "../styles";
import md1 from "../assets/md1.png";
import md2 from "../assets/md2.png";
import md3 from "../assets/md3.png";
import Assurance from "../components/Assurance";

const About = () => {
  return (
    <div className="mt-20">
      <div className="flex ml-[135px] gap-2 text-sm">
        <p className=" text-slate-500">Home</p>
        <span className=" text-slate-500">/</span>
        <p>About</p>
      </div>

      <div className="ml-[135px] mt-[42px] flex gap-x-[75px]">
        <div className="max-w-[525px] mt-[137px]">
          <h1 className="text-[58px] font-semibold mb-10">Our Story</h1>
          <p className="text-base mb-6">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p className="text-base">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="">
          <Image
            src={girls}
            alt="2girlsbag"
            // width={70}
            placeholder="blur"
            quality={100}
          />
          {/* <img src={girls} alt="2girlsbag" className="w-full h-full" /> */}
        </div>
      </div>

      <div className={`${styles.marginX} mt-[140px]`}>
        <div className="flex gap-[30px] mb-[140px]">
          <div className="w-[270px] h-[230px] border-2 flex flex-col justify-center items-center">
            <div>
              <div className="w-[80px] h-[80px] bg-black rounded-full flex items-center justify-center text-white border-[11px] text-4xl mb-4">
                <BsShopWindow />
              </div>
            </div>
            <h1 className="text-[32px] font-bold">10.5k</h1>
            <p className="text-base">Sellers active on site</p>
          </div>

          <div className="w-[270px] h-[230px] border-2 flex flex-col justify-center items-center">
            <div>
              <div className="w-[80px] h-[80px] bg-black rounded-full flex items-center justify-center text-white border-[11px] text-4xl mb-4">
                <PiCurrencyCircleDollarLight />
              </div>
            </div>
            <h1 className="text-[32px] font-bold">33k</h1>
            <p className="text-base">Monthly Product Sale</p>
          </div>

          <div className="w-[270px] h-[230px] border-2 flex flex-col justify-center items-center">
            <div>
              <div className="w-[80px] h-[80px] bg-black rounded-full flex items-center justify-center text-white border-[11px] text-4xl mb-4">
                <TbShoppingBag />
              </div>
            </div>
            <h1 className="text-[32px] font-bold">45.5k</h1>
            <p className="text-base">Customers active on site</p>
          </div>

          <div className="w-[270px] h-[230px] border-2 flex flex-col justify-center items-center">
            <div>
              <div className="w-[80px] h-[80px] bg-black rounded-full flex items-center justify-center text-white border-[11px] text-4xl mb-4">
                <FaSackDollar />
              </div>
            </div>
            <h1 className="text-[32px] font-bold">25k</h1>
            <p className="text-base">Annual gross sale on site</p>
          </div>
        </div>

        <div>
          {/*  img */}
          <div className="flex gap-x-6">
            <div className="w-[370px]">
              <div className=" bg-slate-100  h-[430px] flex justify-center items-end mb-4">
                <Image src={md1} alt="" placeholder="blur" quality={100} />
              </div>
              <h1 className="text-[32px] font-bold">Tom Cruise</h1>
              <p className="text-base mb-2">Founder & Chairman</p>
              <div className="flex gap-x-2">
                <PiTwitterLogo />
                <PiInstagramLogo />
                <PiLinkedinLogo />
              </div>
            </div>

            <div className="w-[370px]">
              <div className=" bg-slate-100 h-[430px] flex justify-center items-end mb-4">
              <Image src={md2} alt="" placeholder="blur" quality={100} />
              </div>
              <h1 className="text-[32px] font-bold">Emma Watson</h1>
              <p className="text-base mb-2">Managing Director</p>
              <div className="flex gap-x-2">
                <PiTwitterLogo />
                <PiInstagramLogo />
                <PiLinkedinLogo />
              </div>
            </div>

            <div className="w-[370px]">
              <div className=" bg-slate-100 h-[430px] flex justify-center items-end mb-4">
              <Image src={md3} alt="" placeholder="blur" quality={100} />
              </div>
              <h1 className="text-[32px] font-bold">Will Smith</h1>
              <p className="text-base mb-2">Product Designer</p>
              <div className="flex gap-x-2">
                <PiTwitterLogo />
                <PiInstagramLogo />
                <PiLinkedinLogo />
              </div>
            </div>
          </div>
          {/* button */}
          <div className="flex justify-center items-center mt-4 gap-x-3">
            <button className="w-[10px] h-[10px] bg-slate-400 rounded-full"></button>
            <button className="w-[10px] h-[10px] bg-slate-400 rounded-full"></button>
            <button className="w-[10px] h-[10px] bg-slate-400 rounded-full"></button>
            <button className="w-[10px] h-[10px] bg-slate-400 rounded-full"></button>
            <button className="w-[10px] h-[10px] bg-slate-400 rounded-full"></button>
          </div>
        </div>
      </div>

      <div className="my-[140px] mx-[249px]">
        <Assurance />
      </div>
    </div>
  );
};

export default About;
