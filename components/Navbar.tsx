"use client";
import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdCastForEducation } from "react-icons/md";

const Navbar = () => {
  const [activeRoute, setActiveRoute] = useState("Home");
  const router = useRouter();
  const navRoutes = [
    { name: "Home", path: "/home" },
    { name: "Features", path: "/features" },
    { name: "About Us", path: "/aboutUs" },
    { name: "Contact Us", path: "/contactUs" },
  ];

  return (
    <div className="w-full absolute top-0 z-10 bg-blue-100 shadow-md bg-opacity-30 backdrop-blur-xl text-slate-800 px-20 h-fit  py-5 flex flex-row justify-between items-center ">
      <h1 className="font-extrabold text-3xl text-center flex items-center">
        <MdCastForEducation
          className="inline mr-3 my-auto"
          size={45}
          color="#60a5fa"
        />
        Smart-<span className="text-blue-400">Ed</span>-Forge
      </h1>
      <div className="flex flex-row gap-12 items-center justify-between">
        {navRoutes.map(({ name, path }) => (
          <p
            className={`${
              activeRoute == name ? " text-black font-bold" : "text-gray-600"
            } font-semibold text-xl hover:text-blue-400 transition-all ease-in-out cursor-pointer`}
          >
            {name}
          </p>
        ))}
      </div>
      <div className="flex w-80 flex-row gap-8 items-center">
        <button
          onClick={() => router.push("/sign-up")}
          className="w-1/2 hover:-translate-y-1 transition-all ease-in-out  bg-blue-400 font-semibold text-white rounded-[80px] text-xl px-7 py-3"
        >
          Login
        </button>
        <button
          onClick={() => router.push("/authentication")}
          className="w-1/2 hover:-translate-y-1 transition-all ease-in-out  border-blue-400 border-2 font-semibold text-blue-400 rounded-[80px] text-xl px-7 py-3"
        >
          Signup
        </button>
        {/* <UserButton afterSignOutUrl="/" /> */}
      </div>
    </div>
  );
};

export default Navbar;
