"use client";
import Layout from "@/app/layouts/Layout";
import React, { useEffect, useState } from "react";
import { IoCodeSlashOutline } from "react-icons/io5";
import { CiCircleRemove } from "react-icons/ci";
import quizJSONData from "../../services/quizData/quizData.json";
import { quizData } from "@/app/interfaces/common";
import Main from "@/app/components/_organisms/Main";
import OptionCont from "@/app/components/_molecules/OptionCont";
import Button from "@/app/components/_atoms/Button";
import ResultScore from "@/app/components/_molecules/ResultScore";
import {
  checkAnswer,
  colorCheck,
  letterToIndex,
  nextQuestion,
} from "@/app/services/commonFunc";
import QuestionCont from "@/app/components/_molecules/QuestionCont";

const HtmlQuiz = () => {
  const filteredData = quizJSONData.filter((cat) => cat.category === "HTML");

  const [index, setIndex] = useState(() => {
    const storedIndex = localStorage.getItem("index");
    return storedIndex ? parseInt(storedIndex) : 0;
  });

  const [question, setQuestion] = useState<quizData>(() => {
    const storedIndex = localStorage.getItem("index");
    const startIndex = storedIndex ? parseInt(storedIndex) : 0;
    return filteredData[startIndex];
  });

  const [optionChecked, setOptionChecked] = useState(0);
  const [result, setResult] = useState<boolean>();
  const [lock, setLock] = useState(false);
  const [finalResult, setFinalResul] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    const scoreFromLocal = localStorage.getItem("score");

    if (scoreFromLocal) {
      setScore(parseInt(scoreFromLocal));
    }
  }, []);

  return (
    <Layout
      icon={<IoCodeSlashOutline className="w-[100%] h-[100%] text-[#FF7E35]" />}
      quizType="HTML"
      iconBgColor={"#FDF2E9"}
    >
      <Main>
        {!finalResult ? (
          <>
            <QuestionCont
              index={index}
              filteredData={filteredData}
              question={question}
            />
            <div className="flex flex-col gap-3 tab:gap-6 w-full des:w-[564px]">
              {Object.entries(question.answers).map(([index, value]) => {
                const optionIndex = letterToIndex(index);
                return (
                  <OptionCont
                    key={index}
                    onClick={() => {
                      if (!lock) {
                        setOptionChecked(optionIndex);
                      }
                    }}
                    buttonStyle={{
                      border: `${
                        colorCheck(
                          result,
                          optionChecked,
                          question,
                          optionIndex
                        ) &&
                        "3px solid " +
                          colorCheck(
                            result,
                            optionChecked,
                            question,
                            optionIndex
                          )
                      }`,
                    }}
                    option={value}
                    bgColor={`${
                      colorCheck(
                        result,
                        optionChecked,
                        question,
                        optionIndex
                      ) === ""
                        ? "#F4F6FA"
                        : colorCheck(
                            result,
                            optionChecked,
                            question,
                            optionIndex
                          )
                    }`}
                    icon={
                      <span
                        className="font-[rubik] text-[18px] tab:text-[28px] font-medium leading-[18px] tab:leading-[28px]"
                        style={{
                          color: `${
                            colorCheck(
                              result,
                              optionChecked,
                              question,
                              optionIndex
                            )
                              ? "white"
                              : "#626C7F"
                          }`,
                        }}
                      >
                        {index}
                      </span>
                    }
                  />
                );
              })}

              {lock ? (
                <Button
                  onClick={() =>
                    nextQuestion(
                      index,
                      filteredData,
                      setFinalResul,
                      setIndex,
                      setQuestion,
                      setResult,
                      setLock,
                      setOptionChecked
                    )
                  }
                  className={
                    "flex items-center justify-center w-full rounded-xl tab:rounded-3xl p-[19px] tab:p-8 tab:mt-2 font-[rubik] text-[18px] tab:text-[28px] font-medium leading-[18px] tab:leading-[28px] hover:opacity-50 text-white bg-[#A729F5]"
                  }
                >
                  Next Question
                </Button>
              ) : (
                <Button
                  onClick={() =>
                    checkAnswer(
                      optionChecked,
                      setLock,
                      setErrorMessage,
                      setResult,
                      question,
                      setScore,
                      score
                    )
                  }
                  className={
                    "flex items-center justify-center w-full rounded-xl tab:rounded-3xl p-[19px] tab:p-8 tab:mt-2 font-[rubik] text-[18px] tab:text-[28px] font-medium leading-[18px] tab:leading-[28px] hover:opacity-50 text-white bg-[#A729F5]"
                  }
                >
                  Submit Answer
                </Button>
              )}
              {errorMessage && (
                <div className="flex items-center justify-center gap-2">
                  <CiCircleRemove className="w-8 tab:w-10 h-8 tab:h-10 text-[#EE5454]" />
                  <span className="font-[rubik] font-normal text-[18px] tab:text-[24px] leading-[18px] tab:leading-[36px] text-[#EE5454]">
                    Please select an answer
                  </span>
                </div>
              )}
            </div>
          </>
        ) : (
          <ResultScore
            icon={
              <IoCodeSlashOutline className="w-[100%] h-[100%] text-[#FF7E35]" />
            }
            subject={"HTML"}
            currentScore={score}
            dataLength={filteredData.length}
            to={"/pages/Home"}
          />
        )}
      </Main>
    </Layout>
  );
};

export default HtmlQuiz;
