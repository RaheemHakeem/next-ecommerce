"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { FcGoogle } from "react-icons/fc";
import phonecart from "../../assets/phonecart.png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    setError("");
    setPending(true);

    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message);
      setPending(false);
    }
    if (!error) {
      router.push("/");
    }
  };

  return (
    <div className="mt-[60px] mb-[140px] mr-[135px] flex gap-x-[129px] justify-between">
      <div className="max-w-[705px]">
        <Image
          src={phonecart}
          alt="phonecart"
          placeholder="blur"
          quality={100}
        />
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-semibold mb-6 w-full">
          Log in to Exclusive
        </h1>
        <h3 className="text-base mb-12">Enter your details below</h3>

        <form
          action=""
          className="flex flex-col"
          onSubmit={(e) => handleSubmit(e, email, password)}
        >
          <div className="flex flex-col gap-y-10 mb-[40px]">
            <div>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                value={email}
                placeholder="Email"
                className=" bg-slate-100 w-full h-8 pl-1"
              />
              <div className=" h-[1px] bg-slate-400"></div>
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                className=" bg-slate-100 w-full h-8 pl-1"
              />
              <div className=" h-[1px] bg-slate-400"></div>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <button
              disabled={pending}
              type="submit"
              className=" w-[143px] h-[56px] bg-[#db4444] rounded text-white text-base "
            >
              {pending && <span>...</span>}
              {!pending && <span>Login</span>}
            </button>
            <p className="text-base text-[#db4444]">Forget Password?</p>
          </div>

          <div>
            <p>{error}</p>
          </div>
        </form>

        <button className="flex h-[56px] justify-center items-center border border-slate-300 mb-4">
          <FcGoogle className="text-2xl mr-2" />
          <p className="text-base">Log In with Google</p>
        </button>
        
        <div className="flex justify-center">
          <p className="text-base text-slate-500 mr-3">
            Don't have an account?
          </p>
          <div>
            <Link className="text-base text-slate-700 mb-1" href={"/signup"}>
              Register
            </Link>
            <div className=" h-[1px] bg-slate-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
