"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Rock_Salt } from "next/font/google";

type WorkItem = {
  id: number;
  projectLink: string;
  title: string;
  color: string;
  bgImage: string;
  image: string;
  avatarImage: string;
  mobileImage: string;
};

type Props = {
  dataList: WorkItem[];
};

const rockSalt = Rock_Salt({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rock-salt",
});

const WorksGrid = (props: Props) => {
  const { dataList } = props;
  return (
    <div className="grid grid-cols-12 gap-[20px] max-md:gap-[10px] h-full">
      {dataList?.map((item: WorkItem) => (
        <Link
          href={item.projectLink}
          className="col-span-3 max-md:col-span-full h-[calc(100vh-360px)] max-md:h-full relative group"
          key={item.id}
        >
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2,
              ease: "easeOut",
            }}
            style={{
              color: item.color ? item.color : "#2a2a2a",
              fontFamily: rockSalt.style.fontFamily,
              fontWeight: "bold",
            }}
            className={`absolute top-[-10px] left-[50%] translate-x-[-50%] translate-y-[-10px] text-[36px] text-center uppercase max-md:hidden`}
          >
            {item.title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="w-full h-full flex justify-center items-center max-md:hidden"
          >
            <div className="w-[60%] h-full">
              <Image
                src={item.bgImage}
                alt={item.title + "Bg"}
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <div className="w-full h-full flex justify-center items-center absolute bottom-[-10px] left-[50%] translate-x-[-50%] opacity-0 group-hover:opacity-100 peer-hover:opacity-0 transition-opacity duration-300 max-md:hidden">
            <div className="w-full h-full">
              <Image
                src={item.image}
                alt={item.title + "Image"}
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="w-[350px] aspect-square flex justify-center items-center absolute bottom-[-140px] left-[60%] translate-x-[-60%] transition-transform duration-300
              hover:-translate-y-5 max-md:hidden"
          >
            <Image
              src={item.avatarImage}
              alt={item.title + "Avatar"}
              width={500}
              height={500}
              className="w-full h-full object-contain"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="md:hidden"
          >
            <Image
              src={item.mobileImage}
              alt={item.title + "MobileImage"}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default WorksGrid;
