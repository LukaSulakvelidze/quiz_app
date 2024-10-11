import React from "react";
import Button from "../_atoms/Button";
import { ResultScore_props } from "@/app/interfaces/common";
import Link from "next/link";
import { resetButton } from "@/app/services/commonFunc";

const ResultScore = ({
  icon,
  subject,
  currentScore,
  dataLength,
  to,
}: ResultScore_props) => {
  return (
    <div className="flex flex-col des:flex-row des:justify-between gap-10 tab:gap-16 des:gap-0 w-full">
      <h1 className="font-[rubik] font-light text-[40px] tab:text-[64px] leading-10 tab:leading-[64px] pr-[70px] des:w-[450px] des:pr-0 text-[#313E51] dark:text-white">
        Quiz completed <strong className="font-medium">You scored...</strong>
      </h1>

      <div className="flex flex-col gap-3 tab:gap-8 w-full des:w-[564px]">
        <div className="flex flex-col items-center gap-4 tab:gap-10 p-8 tab:p-12 rounded-xl bg-white dark:bg-[#3B4D66] ">
          <div className="flex items-center gap-4">
            <div className="w-10 tab:w-14 h-10 tab:h-14 rounded-[4px] tab:rounded-lg">
              {icon}
            </div>
            <p className="font-[rubik] font-medium text-[18px] tab:text-[28px] leading-[18px] tab:leading-[28px] text-[#313E51] dark:text-white">
              {subject}
            </p>
          </div>
          <h3 className="font-[rubik] font-medium text-[88px] tab:text-[144px] leading-[88px] tab:leading-[144px] text-[#313E51] dark:text-white">
            {currentScore}
          </h3>
          <span className="font-[rubik] font-normal text-[18px] tab:text-[24px] leading-[18px] tab:leading-[36px] -mt-4 text-[#313E51] dark:text-white">
            out of {dataLength}
          </span>
        </div>
        <Link className="w-full" href={to}>
          <Button
            className={
              "flex items-center justify-center w-full rounded-xl p-[19px] font-[rubik] text-[18px] tab:text-[28px] font-medium leading-[18px] tab:leading-[28px] hover:opacity-50 text-white bg-[#A729F5]"
            }
            onClick={resetButton}
          >
            Play Again
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ResultScore;
