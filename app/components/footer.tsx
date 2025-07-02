import React from "react";

type Props = {
  black?: boolean;
};

const Footer = (props: Props) => {
  return (
    <div
      className={
        props.black
          ? "bg-[#2a2a2a] fixed bottom-0 w-full z-50 flex justify-center items-center p-[20px] h-[60px]"
          : "bg-white fixed bottom-0 w-full z-50 flex justify-center items-center p-[20px] h-[60px]"
      }
    >
      <p
        className={
          props.black
            ? " text-white text-[16px] font-medium"
            : " text-[#2a2a2a] text-[16px] font-medium"
        }
      >
        © {new Date().getFullYear()} by Sachithanand P U. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
