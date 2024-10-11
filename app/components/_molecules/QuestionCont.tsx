import React from "react";
import ProgressBar from "../_organisms/ProgressBar";
import { QuestionCont_props } from "@/app/interfaces/common";

const QuestionCont = ({
  index,
  filteredData,
  question,
}: QuestionCont_props) => {
  return (
    <div className="flex flex-col gap-6 tab:gap-10 des:gap-0 des:justify-between w-full des:w-[465px] des:h-[470px]">
      <div className="flex flex-col gap-3 tab:gap-[27px] w-full">
        <span className="font-[rubik] text-[14px] tab:text-[20px] italic font-normal leading-[21px] tab:leading-[30px] text-left text-[#626C7F] dark:text-[#ABC1E1] ">
          Questions {index + 1} of {filteredData.length}
        </span>
        <h2 className="text-[20px] tab:text-[36px] font-[rubik] font-medium leading-6 tab:leading-[43px] text-[#313E51] dark:text-white">
          {question.question}
        </h2>
      </div>
      <ProgressBar
        completed={((index + 1) / filteredData.length) * 100}
        containerClassName={
          "w-[100%] h-4 bg-white dark:bg-[#3B4D66] rounded-[50px] p-[4px]"
        }
        fillerClassName={
          "h-2 text-left rounded-[12px] transition-[width] duration-1000 ease-in-out bg-[#A729F5]"
        }
      />
    </div>
  );
};

export default QuestionCont;
