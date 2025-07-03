import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  black?: boolean;
  fixed?: boolean;
};

const Header = (props: Props) => {
  return (
    <div
      className={`${props.black ? "bg-[#2a2a2a]" : "bg-white"} ${
        props.fixed ? "fixed" : "sticky"
      } top-0 w-full z-50 flex justify-start items-center p-[20px_80px] max-md:p-[20px_20px] h-[60px]`}
    >
      <div className="flex items-center gap-[10px]">
        <div className="w-[36px] aspect-square">
          <Image
            src="/assets/common/homeIcon.png"
            alt="logo"
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <Link
            href="/"
            className={`text-[18px] max-md:text-[16px] font-medium uppercase ${
              props.black ? "text-white" : "text-[#2a2a2a]"
            }`}
          >
            Sachithanand P Udayan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
