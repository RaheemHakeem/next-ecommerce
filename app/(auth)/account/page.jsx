import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { styles } from "../../styles";
import LogoutButton from "@/app/components/LogoutButton";

const Account = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (!data.session) {
    redirect("/login");
  }

  return (
    <div className={`${styles.marginX} mt-20 mb-[180px]`}>
      <div className="mb-[80px] flex justify-between">
        <div className="flex gap-2 text-sm ">
          <p className=" text-slate-500">Home</p>
          <span className=" text-slate-500">/</span>
          <p>My Account</p>
        </div>

        <div className="text-sm">
          <p className=" font-medium">
            Welcome!{" "}
            <span className="text-[#db4444]">{data.session.user.email}</span>
          </p>
        </div>
      </div>

      <div className="flex gap-x-[100px]">
        <div className=" min-w-fit">
          <div className="mb-[24px]">
            <h1 className="text-base font-bold mb-[22px]">Manage My Account</h1>
            <div className="ml-[35px] text-gray-400 space-y-2">
              <p>My Profile</p>
              <p>Address Book</p>
              <p>My Payment Options</p>
            </div>
          </div>

          <div className="mb-[24px]">
            <h1 className="text-base font-bold mb-[22px]">Manage Orders</h1>
            <div className="ml-[35px] text-gray-400 space-y-2">
              <p>My Returns</p>
              <p>My Cancellations</p>
            </div>
          </div>

          <h1 className="text-base font-bold mb-[22px]">My WishList</h1>
        </div>

        <div className="py-10 px-20">
          <h1 className=" text-xl font-semibold text-[#db4444] mb-4">
            Edit Your Profile
          </h1>
          <form>
            <div className="flex gap-x-[50px] text-base mb-4">
              <div>
                <h3 className="mb-2">First Name</h3>
                <input
                  type="text"
                  placeholder="Rav"
                  className="h-[50px] bg-slate-100 w-[330px] p-3 rounded"
                />
              </div>
              <div>
                <h3 className="mb-2">Last Name</h3>
                <input
                  type="text"
                  placeholder="Keen"
                  className="h-[50px] bg-slate-100 w-[330px] p-3 rounded"
                />
              </div>
            </div>

            <div className="flex gap-x-[50px] text-base mb-4">
              <div>
                <h3 className="mb-2">Email</h3>
                <input
                  type="text"
                  placeholder="ravkeen@gmail.com"
                  className="h-[50px] bg-slate-100 w-[330px] p-3 rounded"
                />
              </div>
              <div>
                <h3 className="mb-2">Address</h3>
                <input
                  type="text"
                  placeholder="133, Abeokuta Street,Ebute-Meta. lagos"
                  className="h-[50px] bg-slate-100 w-[330px] p-3 rounded"
                />
              </div>
            </div>

            <div className="flex flex-col mb-4">
              <h3 className="mb-2">Password Changes</h3>
              <input
                type="password"
                placeholder="Current Password"
                className="h-[50px] bg-slate-100 w-full mb-2 p-3 rounded"
              />
              <input
                type="password"
                placeholder="New Password"
                className="h-[50px] bg-slate-100 w-full mb-2 p-3 rounded"
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="h-[50px] bg-slate-100 w-full p-3 rounded"
              />
            </div>

            <div className="flex justify-end">
              <button>Cancel</button>
              <button className="w-[215px] h-[56px] bg-[#db4444] rounded text-white text-base ml-8">
                Save Changes
              </button>
            </div>
          </form>
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default Account;
