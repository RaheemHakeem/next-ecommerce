import { FiPhone } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { styles } from "../styles";

const Contact = () => {
  return (
    <div className={`${styles.marginX} mt-20 mb-[140px]`}>
      <div className="flex gap-2 text-sm mb-[80px]">
        <p className=" text-slate-500">Home</p>
        <span className=" text-slate-500">/</span>
        <p>Contact</p>
      </div>

      <div className="flex gap-x-[30px] my-10">
        {/* info */}
        <div className="max-w-[340px] px-8">
          <div className="flex items-center mb-4">
            <div className="w-[40px] h-[40px] bg-red-600 rounded-full flex justify-center items-center text-white text-xl mr-3">
              <FiPhone />
            </div>
            <h1 className="text-base font-semibold">Call Us</h1>
          </div>
          <p className="text-sm mb-2">We are available 24/7, 7 days a week</p>
          <p className="text-sm">Phone: +234703218487</p>
          <div className=" my-8 h-[1px] bg-slate-400" />
          <div className="flex items-center mb-4">
            <div className="w-[40px] h-[40px] bg-red-600 rounded-full flex justify-center items-center text-white text-xl mr-3">
              <GoMail />
            </div>
            <h1 className="text-base font-semibold">Write Us</h1>
          </div>
          <p className="text-sm mb-2">
            Fill out the form and we would contact you within 24 hours
          </p>
          <p className="text-sm">Email: raheemhakeem25@gmail.com</p>
        </div>
        {/* form */}
        <form className="flex flex-col gap-y-[32px]">
          <div className="flex gap-x-4">
            <input
              type="text"
              className=" bg-[#f5f5f5] p-2 w-[235px] h-[50px] text-base rounded"
              placeholder="Your Name"
            />
            <input
              type="text"
              className=" bg-[#f5f5f5] p-2 w-[235px] h-[50px] text-base rounded"
              placeholder="Your Email"
            />
            <input
              type="text"
              className=" bg-[#f5f5f5] p-2 w-[235px] h-[50px] text-base rounded"
              placeholder="Your Phone"
            />
          </div>
          <div>
            <textarea
              type="text"
              className=" bg-[#f5f5f5] text-base p-2 w-full h-[207px] resize-none"
              placeholder="Your Message"
            />
          </div>
          <div className="flex justify-end">
            <button className="w-[215px] h-[56px] bg-[#db4444] rounded text-white text-base">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
