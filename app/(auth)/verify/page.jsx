import { styles } from "../../styles";

export default function Verify() {
  return (
    <div className={`${styles.marginX} mt-20 mb-[80px]`}>
      <div className="flex gap-2 text-sm mb-[40px]">
        <p className=" text-slate-500">Home</p>
        <span className=" text-slate-500">/</span>
        <p>Verify</p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-[110px] font-medium mb-[40px]">
          Thanks for registering!
        </h1>
        <p className="text-base mb-[80px]">
          Before logging in, you need to verify your email address.
        </p>
      </div>
    </div>
  );
}
