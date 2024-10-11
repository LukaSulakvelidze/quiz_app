import { ReactNode } from "react";

export interface Layout_props {
  quizType?: string;
  icon?: JSX.Element;
  iconBgColor?: string;
  children: React.ReactNode;
}

export interface Header_props {
  quizType: string | undefined;
  bgColor: string | undefined;
  children?: React.ReactNode;
}

export interface OptionCont_props {
  buttonStyle?: object;
  onClick?: () => void | boolean;
  routLocation?: string;
  option: string;
  bgColor: string;
  icon: React.ReactNode;
}

export interface Button_props {
  className: string;
  buttonStyle?: object;
  onClick?: () => void | boolean;
  children: React.ReactNode;
}
export interface ResultScore_props {
  icon: ReactNode;
  subject: string;
  currentScore: number;
  dataLength: number;
  to: string;
}

export interface QuestionCont_props {
  index: number;
  question: quizData;
  filteredData: quizData[];
}

export type quizData = {
  category: string;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correct: number;
};
