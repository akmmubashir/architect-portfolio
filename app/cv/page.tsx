import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const page = () => {
  return (
    <div className="bg-[#d5d5d5] h-screen overflow-hidden relative">
      <Header black={true} />
      <div className="h-[calc(100vh-120px)] bg-white p-[40px_80px] flex flex-col gap-[20px] max-md:gap-[10px]">
        <h1 className="text-[36px] font-normal uppercase text-[#2a2a2a] text-center">
          CV
        </h1>
      </div>
      <Footer black={true} />
    </div>
  );
};

export default page;
