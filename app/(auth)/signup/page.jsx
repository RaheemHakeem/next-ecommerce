"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

import { FcGoogle } from "react-icons/fc";
import phonecart from "../../assets/phonecart.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const [name, setName] = useState("");
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e, email, password, name) => {
    e.preventDefault();
    setPending(true);

    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`,
        data: {
          username: name,
          email: email,
        },
      },
    });

    if (error) {
      setFormError(error.message);
      setPending(false);
    }
    if (!error) {
      router.push("/verify");
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
        <h1 className="text-4xl font-semibold mb-6">Create an account</h1>
        <h3 className="text-base mb-12">Enter your details below</h3>

        <form
          onSubmit={(e) => handleSubmit(e, email, password, name)}
          className="flex flex-col"
        >
          <div className="flex flex-col gap-y-10 mb-[40px]">
            <div>
              <input
                type="text"
                placeholder="Name"
                className=" bg-slate-100 w-full h-8 pl-1"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
              <div className=" h-[1px] bg-slate-400"></div>
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                className=" bg-slate-100 w-full h-8 pl-1"
              />
              <div className=" h-[1px] bg-slate-400"></div>
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className=" bg-slate-100 w-full h-8 pl-1"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
              <div className=" h-[1px] bg-slate-400"></div>
            </div>
          </div>

          <button
            disabled={pending}
            type="submit"
            className="w-full h-[56px] bg-[#db4444] rounded text-white text-base mb-4"
          >
            {pending && <span>Creating...</span>}
            {!pending && <span>Create Account</span>}
          </button>
        </form>
        <div>
          <p>{formError}</p>
        </div>
        <button className="flex h-[56px] justify-center items-center border border-slate-300 mb-4">
          <FcGoogle className="text-2xl mr-2" />
          <p className="text-base">Sign up with Google</p>
        </button>

        <div className="flex justify-center">
          <p className="text-base text-slate-500 mr-3">
            Already have an account?
          </p>
          <div>
            <Link className="text-base text-slate-700 mb-1" href={"/login"}>
              Log in
            </Link>
            <div className=" h-[1px] bg-slate-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
