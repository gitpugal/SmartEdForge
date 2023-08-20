"use client";
import React from "react";
import heroImage1 from "../public/assets/heroImages/online-learning-concept.png";
import heroImage2 from "../public/assets/heroImages/trajectory-education.png";
import heroImage3 from "../public/assets/heroImages/ideas-in-education.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdMessage } from "react-icons/md";

const Hero = () => {
  const features = [
    "100+ Institutions",
    "10M+ Students",
    "2000+ Partners",
    "20+ Features",
  ];
  return (
    <div className="min-h-full  md:pb-20 max-h-fit w-screen">
      <div className="h-screen pt-14 md:pt-0 w-screen gap-20 px-5  flex items-center flex-col md:flex-row justify-start md:justify-between md:px-14">
        <div className="w-full  md:w-[60%] md:px-20 md:relative md:bottom-20">
          <p className="text-blue-400 text-xl">A new age learning platform.</p>
          <h1 className="text-3xl md:text-8xl py-5 font-semibold">Smart-Ed-Forge</h1>
          <p className="md:text-2xl w-full pr-10 text-gray-600">
            Elevating Education, Empowering Futures. Your All-in-One Platform
            for Seamless Online Institution Management.
          </p>
          <button className="bg-blue-400 mt-10 font-semibold px-4 py-3 md:px-10 md:py-6 md:text-2xl rounded-3xl text-white">
            schedule a demo
          </button>
        </div>
        <motion.div
          className="md:w-1/2 w-screen relative bottom-16 h-[90%]"
          animate={{
            y: [-15, 10, -10],
            transition: {
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        >
          <Image
            src={heroImage2}
            className="absolute bottom-16  right-0   p-10 rounded-2xl "
            alt="hero Image"
          />
        </motion.div>
      </div>
      <div className="w-full flex flex-row items-center justify-evenly h-fit py-14 bg-blue-400 px-2 md:px-10 text-white">
        {features.map((feature) => (
          <p className=" md:text-4xl font-bold">
            {feature.split(" ")[0]}{" "}
            <span className="block md:text-xl text-gray-100">
              {feature.split(" ")[1]}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Hero;
