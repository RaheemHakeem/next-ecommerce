import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";
import { GoShieldCheck } from "react-icons/go";

const Assurance = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[80px] h-[80px] bg-black rounded-full flex items-center justify-center text-white border-[11px] text-4xl mb-4">
          <TbTruckDelivery />
        </div>
        <h2 className="text-[16px] font-semibold">FREE AND FAST DELIVERY</h2>
        <p className="text-sm">Free delivery for all orders over $140</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-[80px] h-[80px] bg-black rounded-full flex items-center justify-center text-white border-[11px] text-4xl mb-4">
          <RiCustomerServiceLine />
        </div>
        <h2 className="text-[16px] font-semibold">24/7 CUSTOMER SERVICE</h2>
        <p className="text-sm">Friendly 24/7 customer support</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-[80px] h-[80px] bg-black rounded-full flex items-center justify-center text-white border-[11px] text-4xl mb-4">
          <GoShieldCheck />
        </div>
        <h2 className="text-[16px] font-semibold">MONEY BACK GUARANTEE</h2>
        <p className="text-sm">We return money within 30 days</p>
      </div>
    </div>
  );
};

export default Assurance;
