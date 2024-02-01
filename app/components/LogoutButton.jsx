"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signOut();

    if (!error) {
      router.push("/login");
    }
    if (error) {
      console.log(error);
    }
  };
  return (
    <button
      onClick={handleLogout}
      className="w-[215px] h-[56px] bg-[#db4444] rounded text-white text-base ml-8"
    >
      Test Logout
    </button>
  );
}
