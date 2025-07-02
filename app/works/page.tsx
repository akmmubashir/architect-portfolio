import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import WorksGrid from "../components/worksGrid";

const page = () => {
  const dataList = [
    {
      id: 1,
      title: "UAE",
      bgImage: "/assets/works/uaeBg.webp",
      avatarImage: "/assets/works/uaeGuy.png",
      image: "/assets/works/uae.png",
      projectLink: "/works/uae",
      color: "#5d5c5c",
    },
    {
      id: 2,
      title: "india",
      bgImage: "/assets/works/indiaBg.webp",
      avatarImage: "/assets/works/indiaGuy.png",
      image: "/assets/works/india.png",
      projectLink: "/works/india",
      color: "#aeefc5",
    },
    {
      id: 3,
      title: "Education",
      bgImage: "/assets/works/eduBg.webp",
      avatarImage: "/assets/works/eduGuy.png",
      image: "/assets/works/edu.png",
      projectLink: "/works/education",
      color: "#eb6425",
    },
    {
      id: 4,
      title: "Art",
      bgImage: "/assets/works/artBg.webp",
      avatarImage: "/assets/works/artGuy.png",
      image: "/assets/works/art.png",
      projectLink: "/works/art",
      color: "#812333",
    },
  ];
  return (
    <div className="bg-[#d5d5d5] h-screen overflow-hidden relative">
      <Header black={true} />
      <div className="h-[calc(100vh-120px)] bg-white p-[40px_80px] flex flex-col gap-[40px] max-md:gap-[10px]">
        <h1 className="text-[36px] font-bold uppercase text-[#2a2a2a] text-center">
          Works
        </h1>
        <WorksGrid dataList={dataList} />
      </div>
      <Footer black={true} />
    </div>
  );
};

export default page;
