import Link from "next/link";
import React from "react";
import Button from "../_atoms/Button";
import { OptionCont_props } from "@/app/interfaces/common";

const OptionCont = ({
  buttonStyle,
  onClick,
  routLocation,
  icon,
  option,
  bgColor,
}: OptionCont_props) => {
  return (
    <Button
      buttonStyle={buttonStyle}
      onClick={onClick}
      className="flex items-center justify-start gap-4 tab:gap-8 p-3 des:px-5 des:py-[18px] w-full h-[64px] tab:h-[80px] des:h-[96px] rounded-xl tab:rounded-3xl hover:border-[3px] hover:border-[#A729F5] bg-white dark:bg-[#3B4D66]"
    >
      {routLocation ? (
        <Link
          className="flex items-center justify-start gap-4 tab:gap-8 w-full "
          href={routLocation}
        >
          <div
            className={`flex justify-center items-center w-10 tab:w-14 h-10 tab:h-14 p-[5px] tab:p-2 rounded-md tab:rounded-xl`}
            style={{ backgroundColor: bgColor }}
          >
            {icon}
          </div>

          <h4 className="font-[rubik] font-medium text-[18px] tab:text-[28px] leading-[18px] tab:leading-[28px] text-[#313E51] dark:text-white">
            {option}
          </h4>
        </Link>
      ) : (
        <>
          <div
            className={`flex justify-center items-center w-10 tab:w-14 h-10 tab:h-14 p-[5px] tab:p-2 rounded-md tab:rounded-xl`}
            style={{ backgroundColor: bgColor }}
          >
            {icon}
          </div>

          <h4 className="font-[rubik] font-medium text-[18px] tab:text-[28px] leading-[18px] tab:leading-[28px] text-[#313E51] dark:text-white">
            {option}
          </h4>
        </>
      )}
    </Button>
  );
};

export default OptionCont;
