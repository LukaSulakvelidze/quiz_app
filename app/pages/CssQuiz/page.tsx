"use client";
import OptionCont from "@/app/components/_molecules/OptionCont";
import ResultScore from "@/app/components/_molecules/ResultScore";
import { quizData } from "@/app/interfaces/common";
import quizJSONData from "../../services/quizData/quizData.json";
import Layout from "@/app/layouts/Layout";
import React, { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import Main from "@/app/components/_organisms/Main";
import { PiPaintBrushBroad } from "react-icons/pi";
import QuestionCont from "@/app/components/_molecules/QuestionCont";
import Button from "@/app/components/_atoms/Button";

const CssQuiz = () => {
  const filteredData = quizJSONData.filter((cat) => cat.category === "CSS");

  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState<quizData>(filteredData[index]);
  const [optionChecked, setOptionChecked] = useState(0);
  const [result, setResult] = useState<boolean>();
  const [lock, setLock] = useState(false);
  const [finalResult, setFinalResul] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [score, setScore] = useState(0);

  const checkAnswer = () => {
    if (optionChecked) {
      setLock(true);
      setErrorMessage(false);
      if (question.correct === optionChecked) {
        setResult(true);
        setScore(score + 1);
      } else {
        setResult(false);
      }
    } else {
      setErrorMessage(true);
    }
  };

  const colorCheck = (num: number) => {
    if (result === undefined) {
      if (optionChecked === num) {
        return "#A729F5";
      } else {
        return "#F4F6FA";
      }
    } else {
      if (result) {
        return "green";
      } else {
        return "red";
      }
    }
  };

  const nextQuestion = () => {
    if (index === filteredData.length - 1) {
      setFinalResul(true);
      return;
    }
    setIndex(index + 1);
    setQuestion(filteredData[index + 1]);
    setResult(undefined);
    setLock(false);
    setOptionChecked(0);
  };

  return (
    <Layout
      icon={<PiPaintBrushBroad className="w-[100%] h-[100%] text-[#2FD887]" />}
      quizType="CSS"
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
              <OptionCont
                onClick={() => {
                  setOptionChecked(1);
                }}
                buttonStyle={{
                  border: `${optionChecked === 1 ? "3px solid #A729F5" : ""}`,
                  hover: {
                    backgroundColor: `${optionChecked === 1 ? "#A729F5" : ""}`,
                  },
                }}
                option={question.option1}
                bgColor={colorCheck(1)}
                icon={
                  <span
                    className="font-[rubik] text-[18px] tab:text-[28px] font-medium leading-[18px] tab:leading-[28px]"
                    style={{
                      color: `${optionChecked === 1 ? "white" : "#626C7F"}`,
                    }}
                  >
                    A
                  </span>
                }
              />
              <OptionCont
                onClick={() => {
                  setOptionChecked(2);
                }}
                buttonStyle={{
                  border: `${optionChecked === 2 ? "3px solid #A729F5" : ""}`,
                }}
                option={question.option2}
                bgColor={colorCheck(2)}
                icon={
                  <span
                    className="font-[rubik] text-[18px] tab:text-[28px] font-medium leading-[18px] tab:leading-[28px]"
                    style={{
                      color: `${optionChecked === 2 ? "white" : "#626C7F"}`,
                    }}
                  >
                    B
                  </span>
                }
              />
              <OptionCont
                onClick={() => {
                  setOptionChecked(3);
                }}
                buttonStyle={{
                  border: `${optionChecked === 3 ? "3px solid #A729F5" : ""}`,
                }}
                option={question.option3}
                bgColor={colorCheck(3)}
                icon={
                  <span
                    className="font-[rubik] text-[18px] tab:text-[28px] font-medium leading-[18px] tab:leading-[28px]"
                    style={{
                      color: `${optionChecked === 3 ? "white" : "#626C7F"}`,
                    }}
                  >
                    C
                  </span>
                }
              />
              <OptionCont
                onClick={() => {
                  setOptionChecked(4);
                }}
                buttonStyle={{
                  border: `${optionChecked === 4 ? "3px solid #A729F5" : ""}`,
                }}
                option={question.option4}
                bgColor={colorCheck(4)}
                icon={
                  <span
                    className="font-[rubik] text-[18px] tab:text-[28px] font-medium leading-[18px] tab:leading-[28px]"
                    style={{
                      color: `${optionChecked === 4 ? "white" : "#626C7F"}`,
                    }}
                  >
                    D
                  </span>
                }
              />

              {lock ? (
                <Button
                  onClick={nextQuestion}
                  className={
                    "flex items-center justify-center w-full rounded-xl tab:rounded-3xl p-[19px] tab:p-8 tab:mt-2 font-[rubik] text-[18px] tab:text-[28px] font-medium leading-[18px] tab:leading-[28px] hover:opacity-50 text-white bg-[#A729F5]"
                  }
                >
                  Next Question
                </Button>
              ) : (
                <Button
                  onClick={checkAnswer}
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
              <PiPaintBrushBroad className="w-[100%] h-[100%] text-[#2FD887]" />
            }
            subject={"CSS"}
            currentScore={score}
            dataLength={filteredData.length}
            to={"/pages/Home"}
          />
        )}
      </Main>
    </Layout>
  );
};

export default CssQuiz;
