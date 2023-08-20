import SideBar from "@/components/SideBar";
import React from "react";

const page = () => {
  return (
    <div className="bg-gradient-to-br  relative flex items-center justify-center from-blue-400 to-teal-400 w-full h-screen">
      <SideBar />
      <h1 className="text-5xl font-semibold text-white">
        Welcome to <span className="text-orange-400">Faculty Dashboard</span>
      </h1>
    </div>
  );
};

export default page;
