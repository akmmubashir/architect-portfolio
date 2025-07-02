import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import InteractiveImage from "../components/interactiveImage";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="bg-white h-screen overflow-hidden relative">
      <Header fixed={true} />
      <InteractiveImage />
      <Footer />
    </div>
  );
};

export default HomePage;
