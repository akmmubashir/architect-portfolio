import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import InteractiveImage from "../components/interactiveImage";

const HomePage = () => {
  return (
    <div className="bg-[#898989] h-screen overflow-hidden relative">
      <Header fixed={true} />
      <InteractiveImage />
      <Footer />
    </div>
  );
};

export default HomePage;
