import { quizData } from "../interfaces/common";

const nextQuestion = (
  index: number,
  filteredData: quizData[],
  setFinalResul: React.Dispatch<React.SetStateAction<boolean>>,
  setIndex: React.Dispatch<React.SetStateAction<number>>,
  setQuestion: React.Dispatch<React.SetStateAction<quizData>>,
  setResult: React.Dispatch<React.SetStateAction<boolean | undefined>>,
  setLock: React.Dispatch<React.SetStateAction<boolean>>,
  setOptionChecked: React.Dispatch<React.SetStateAction<number>>
) => {
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

const colorCheck = (
  result: boolean | undefined,
  optionChecked: number,
  question: quizData,
  num: number
) => {
  if (result === undefined) {
    return optionChecked === num ? "#A729F5" : "";
  } else {
    if (num === question.correct) {
      return "#26D782";
    } else if (num === optionChecked) {
      return "#EE5454";
    } else {
      return "";
    }
  }
};

const checkAnswer = (
  optionChecked: number,
  setLock: React.Dispatch<React.SetStateAction<boolean>>,
  setErrorMessage: React.Dispatch<React.SetStateAction<boolean>>,
  setResult: React.Dispatch<React.SetStateAction<boolean | undefined>>,
  question: quizData,
  setScore: React.Dispatch<React.SetStateAction<number>>,
  score: number
) => {
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
export { nextQuestion, colorCheck, checkAnswer };
