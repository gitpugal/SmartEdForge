"use client";
import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdCastForEducation } from "react-icons/md";

const SideBar = () => {
  const [activeRoute, setActiveRoute] = useState("Home");
  const router = useRouter();
  const navRoutes = [
    { name: "Home", path: "/home" },
    { name: "Features", path: "/features" },
    { name: "About Us", path: "/aboutUs" },
    { name: "Contact Us", path: "/contactUs" },
  ];

  return (
    <div className="w-fit  absolute left-0 top-0 z-10 bg-blue-100 shadow-md bg-opacity-30 backdrop-blur-xl text-slate-800 px-20 h-screen  hidden md:flex flex-col justify-evenly items-center ">
      <h1 className="font-extrabold text-3xl text-center flex items-center">
        <MdCastForEducation
          className="inline mr-3 my-auto"
          size={45}
          color="#60a5fa"
        />
        Smart-<span className="text-blue-400">Ed</span>-Forge
      </h1>
      <div className="flex flex-col gap-12 items-center justify-between">
        {navRoutes.map(({ name, path }) => (
          <p
            className={`${
              activeRoute == name ? " text-black font-bold" : "text-gray-600"
            } font-semibold  text-xl hover:text-blue-400 transition-all ease-in-out cursor-pointer`}
          >
            {name}
          </p>
        ))}
      </div>
      <div>
      <UserButton
        appearance={{
          elements: {
            userButtonAvatarBox: "h-20 w-20",
          },
        }}
        afterSignOutUrl="/"
      />
      </div>
    </div>
  );
};

export default SideBar;
