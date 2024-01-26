import Link from "next/link";
import { styles } from "./styles";

export default function NotFound() {
  return (
    <div className={`${styles.marginX} mt-20 mb-[80px]`}>
      <div className="flex gap-2 text-sm mb-[40px]">
        <p className=" text-slate-500">Home</p>
        <span className=" text-slate-500">/</span>
        <p>404 Error</p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-[110px] font-medium mb-[40px]">404 Not Found</h1>
        <p className="text-base mb-[80px]">
          Page does not exist, Check the link and try again.
        </p>
        <Link
          href={"/"}
          className="flex justify-center items-center w-[254px] h-[56px] bg-[#db4444] rounded text-white text-base"
        >
          Back to home page
        </Link>
      </div>
    </div>
  );
}
