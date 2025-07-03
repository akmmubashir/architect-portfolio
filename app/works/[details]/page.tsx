import React from "react";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import { dataList } from "@/app/utils/data";
import { Rock_Salt } from "next/font/google";
import Image from "next/image";

const rockSalt = Rock_Salt({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rock-salt",
});

const page = async (props: { params: Promise<{ details: string }> }) => {
  const { details } = await props.params;
  const projectData = dataList.find(
    (item) => item.title.toLowerCase() === details.toLowerCase()
  );
  return (
    <div className="bg-[#d5d5d5]">
      <Header black={true} />
      <div className="bg-white p-[60px_80px_100px_80px] max-md:p-[20px_20px_80px_20px] flex flex-col gap-[60px] max-md:gap-[30px]">
        <h1
          className="text-[36px] max-md:text-[26px] font-bold uppercase text-[#2a2a2a] text-center"
          style={{
            color: projectData?.color ? projectData?.color : "#2a2a2a",
            fontFamily: rockSalt.style.fontFamily,
            fontWeight: "bold",
          }}
        >
          {projectData?.title}
        </h1>
        <div className="grid grid-cols-12 gap-[20px]">
          {projectData?.projects.map((project) => (
            <div
              key={project.id}
              className="col-span-full w-full h-full flex justify-center items-center"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer black={true} />
    </div>
  );
};

export default page;
