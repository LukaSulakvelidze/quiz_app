import { quizData } from "../interfaces/common";

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
      const updatedScore = score + 1;
      setScore(updatedScore);
      localStorage.setItem("score", updatedScore.toString());
    } else {
      setResult(false);
    }
  } else {
    setErrorMessage(true);
  }
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
  const updatedIndex = index + 1;
  setIndex(updatedIndex);
  localStorage.setItem("index", updatedIndex.toString());
  setQuestion(filteredData[updatedIndex]);
  setResult(undefined);
  setLock(false);
  setOptionChecked(0);
};

const resetButton = () => {
  localStorage.removeItem("index");
  localStorage.removeItem("score");
};

const letterToIndex = (key: string): number => {
  const map: { [key: string]: number } = { A: 1, B: 2, C: 3, D: 4 };
  return map[key];
};
export { nextQuestion, colorCheck, checkAnswer, letterToIndex, resetButton };
