import Image from "next/image";

import ps5 from "../assets/ps5.png";
import woman from "../assets/woman.png";
import speakers from "../assets/speakers.png";
import perfume from "../assets/perfume.png";

const NewArrival = () => {
  return (
    <div>
      <div className="flex items-center">
        <div className="bg-[#DB4444] w-5 h-10 rounded"></div>
        <div className=" text-[#DB4444] font-semibold text-base ml-3">
          Featured
        </div>
      </div>

      <h1 className="text-4xl font-semibold mt-5 mb-[60px]">New Arrival</h1>

      <div className="flex gap-[30px] h-[600px]">
        <div className="bg-black w-full flex justify-center items-end relative">
          <Image src={ps5} alt="ps5" placeholder="blur" quality={100} />
          <div className="absolute text-white bottom-8 left-8">
            <h2 className=" font-semibold text-2xl mb-2">PlayStation 5</h2>
            <p className="text-sm font-extralight mb-4">
              Black and White version of the PS5 <br />
              coming out on sale.
            </p>
            <div className=" max-w-max">
              <h3 className="text-base">Shop Now</h3>
              <hr />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-8 w-full">
          <div className="bg-[#0d0d0d] flex justify-end relative">
            <Image src={woman} alt="woman" placeholder="blur" quality={100} />
            <div className="absolute text-white bottom-[26px] left-8">
              <h2 className="font-semibold text-2xl mb-2">
                Women's Collections
              </h2>
              <p className="text-sm font-extralight mb-4">
                Featured woman collections that <br /> gives you another vibe.
              </p>
              <div className=" max-w-max">
                <h3 className="text-base">Shop Now</h3>
                <hr />
              </div>
            </div>
          </div>
          <div className="flex gap-x-[30px] h-full">
            <div className="bg-[#0d0d0d] w-full flex justify-center items-center relative">
              <Image
                src={speakers}
                alt="speakers"
                placeholder="blur"
                quality={100}
              />
              <div className="absolute text-white bottom-[26px] left-8">
                <h2 className="font-semibold text-2xl mb-1">Speakers</h2>
                <p className="text-sm font-extralight mb-2">
                  Amazon wireless speakers
                </p>
                <div className=" max-w-max">
                  <h3 className="text-base">Shop Now</h3>
                  <hr />
                </div>
              </div>
            </div>
            <div className="bg-[#0d0d0d] w-full flex justify-center items-center relative">
              <Image
                src={perfume}
                alt="perfume"
                placeholder="blur"
                quality={100}
              />
              <div className="absolute text-white bottom-[26px] left-8">
                <h2 className="font-semibold text-2xl mb-1">Perfume</h2>
                <p className="text-sm font-extralight mb-2">
                  GUCCI INTENSE OUD EDP
                </p>
                <div className=" max-w-max">
                  <h3 className="text-base">Shop Now</h3>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
