import { IoMdSend } from "react-icons/io";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdCopyright } from "react-icons/md";

import qrcode from "../assets/Qrcode.png";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";

import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-black pt-[80px] text-white">
      <div className="mx-[135px] mb-[60px] flex justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-6">Exclusive</h1>
          <h3 className="text-xl font-medium mb-6">Subscribe</h3>
          <p className="text-base font-thin mb-3">
            Get 10% off your first order
          </p>
          <div>
            <form className="relative">
              <input
                type="text"
                placeholder="Enter your email"
                className=" bg-transparent border-[1px] border-white rounded p-2"
              />
              <button className="absolute top-1/2 -translate-y-1/2 right-4 text-3xl">
                <IoMdSend />
              </button>
            </form>
          </div>
        </div>

        <div>
          <h1 className="text-xl font-medium mb-6">Support</h1>
          <p className="text-base mb-3">
            133, Abeokuta Street, <br />
            Ebute-Meta. lagos
          </p>
          <p className="mb-3 text-base">raheemhakeem25@gmail.com</p>
          <p className="text-base">+2347032184587</p>
        </div>

        <div>
          <h1 className="text-xl font-medium mb-6">Account</h1>
          <p className="text-base mb-3">My Account</p>
          <p className="text-base mb-3">Login/Register</p>
          <p className="text-base mb-3">Cart</p>
          <p className="text-base mb-3">Wishlist</p>
          <p className="text-base">Shop</p>
        </div>

        <div>
          <h1 className="text-xl font-medium mb-6">Quick Link</h1>
          <p className="text-base mb-3">Privacy Policy</p>
          <p className="text-base mb-3">Terms Of Use</p>
          <p className="text-base mb-3">FAQ</p>
          <p className="text-base">Contact</p>
        </div>

        <div>
          <h1 className="text-xl font-medium mb-6">Download App</h1>
          <p className="text-xs text-[#bebdbd] mb-3">
            Save $3 with App New User Only
          </p>
          <div className="flex gap-x-3 mb-6">
            <Image src={qrcode} alt="qrcode" placeholder="blur" quality={100} />

            <div className="flex flex-col gap-y-3">
              <Image
                src={playstore}
                alt="playstore"
                placeholder="blur"
                quality={100}
              />
              <Image
                src={appstore}
                alt="appstore"
                placeholder="blur"
                quality={100}
              />
            </div>
          </div>
          <div className="flex gap-x-6 text-xl">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-slate-500"></div>
      <div className="py-3 flex justify-center items-center">
        <div className="text-base text-slate-500 flex justify-center items-center">
          <MdCopyright />
          <p>Copyright Rav 2024. All right reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
