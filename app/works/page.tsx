import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import WorksGrid from "../components/worksGrid";
import { dataList } from "../utils/data";

const page = () => {
  return (
    <div className="bg-white h-screen max-md:h-full md:overflow-hidden relative">
      <Header black={true} />
      <div className="h-[calc(100vh-120px)] max-md:h-full bg-white p-[40px_80px] max-md:p-[20px] flex flex-col gap-[40px] max-md:gap-[10px]">
        <h1 className="text-[36px] max-md:text-[26px] font-bold uppercase text-[#2a2a2a] text-center">
          Works
        </h1>
        <WorksGrid dataList={dataList} />
      </div>
      <Footer black={true} />
    </div>
  );
};

export default page;
