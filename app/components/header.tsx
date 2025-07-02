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
      } top-0 w-full z-50 flex justify-start items-center p-[20px_80px] h-[60px]`}
    >
      <div className="flex justify-between items-center">
        <div>
          <Link
            href="/"
            className={`text-[18px] font-medium uppercase ${
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
