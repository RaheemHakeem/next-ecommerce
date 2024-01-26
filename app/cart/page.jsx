import Image from "next/image";

import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import chair from "../assets/chair.png";
import gamepad from "../assets/gamepad.png";
import { styles } from "../styles";

const dummyData = [
  {
    id: 1,
    name: "S-Series Comfort Chair",
    image: chair,
    price: "650",
  },
  {
    id: 2,
    name: "H1 Gamepad",
    image: gamepad,
    price: "520",
  },
];

const Cart = () => {
  return (
    <div className={`${styles.marginX} mt-20 mb-[140px]`}>
      <div className="flex gap-2 text-sm mb-[80px]">
        <p className=" text-slate-500">Home</p>
        <span className=" text-slate-500">/</span>
        <p>Cart</p>
      </div>

      <div className=" mx-10 my-6">
        <table className="w-full table-fixed">
          <thead>
            <tr>
              <th className="text-left pb-10">Product</th>
              <th className="text-center pb-10">Price</th>
              <th className="text-center pb-10">Quantity</th>
              <th className=" text-end pb-10">Subtotal</th>
            </tr>
          </thead>
          {dummyData.map((data) => {
            return (
              <tbody>
                <tr>
                  <td className="text-center pb-10">
                    <div className="flex items-center">
                      <Image
                        src={data.image}
                        alt={data.name}
                        placeholder="blur"
                        width={54}
                        height={54}
                        quality={100}
                        className="mr-3"
                      />
                      <p>{data.name}</p>
                    </div>
                  </td>
                  <td className="text-center pb-10">
                    <p>${data.price}</p>
                  </td>
                  <td className="text-center pb-10">
                    <div className="flex justify-center items-center">
                      <div className="w-[72px] h-[44px] flex justify-center items-center border border-gray-400 rounded">
                        <p>01</p>
                        <div className="flex flex-col ml-2">
                          <button>
                            <MdKeyboardArrowUp />
                          </button>
                          <button>
                            <MdKeyboardArrowDown />
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-end pb-10">
                    <p>${data.price}</p>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>

      <div className="flex justify-between mb-20">
        <button className="w-[218px] border border-gray-400 py-4 rounded">
          Return To Shop
        </button>
        <button className="w-[218px] border border-gray-400 py-4 rounded">
          Update Cart
        </button>
      </div>

      <div className="flex justify-between">
        <form action="">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border border-gray-400 py-2 pl-3 rounded mr-4 w-[300px] h-[56px]"
          />
          <button className=" bg-[#db4444] h-[56px] w-[211px] text-white rounded ">
            Apply Coupon
          </button>
        </form>

        <div className="border border-gray-400 w-[470px] rounded py-8 px-6">
          <h1 className="text-[20px] font-semibold mb-6">Cart Total</h1>
          <div className="flex justify-between mb-4">
            <p>Subtotal</p>
            <p>$1750</p>
          </div>
          <div className="h-[1px] bg-slate-300 mb-4" />
          <div className="flex justify-between mb-4">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className="h-[1px] bg-slate-300 mb-4" />
          <div className="flex justify-between mb-4">
            <p>Total</p>
            <p>$1750</p>
          </div>
          <div className="flex justify-center ">
            <button className="bg-[#db4444] h-[56px] w-[260px] text-white rounded ">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
