import { FaChevronRight } from "react-icons/fa6";

const Items = () => {
  return (
    <div className=" pt-10 w-52 h-full">
      {/* subcategory */}
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <h4>Women's Fashion </h4>
          <button className=" text-xs">
            <FaChevronRight />
          </button>
        </div>
        <div className="flex items-center justify-between">
          <h4>Men's Fashion </h4>
          <button className="text-xs">
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div className="flex flex-col space-y-4 mt-4">
        <h4>Electronics</h4>
        <h4>Electronics</h4>
        <h4>Electronics</h4>
        <h4>Electronics</h4>
        <h4>Electronics</h4>
        <h4>Electronics</h4>
        <h4>Electronics</h4>
      </div>
    </div>
  );
};

export default Items;
