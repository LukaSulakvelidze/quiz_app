import { IoAccessibilityOutline, IoCodeSlashOutline } from "react-icons/io5";
import { PiPaintBrushBroad } from "react-icons/pi";
import { RiJavascriptLine } from "react-icons/ri";

type Subject = {
  id: number;
  icon: JSX.Element;
  subject: string;
  colors: string;
  to: string;
};

const subjects: Subject[] = [
  {
    id: 1,
    icon: <IoCodeSlashOutline className="w-[100%] h-[100%] text-[#FF7E35]" />,
    subject: "HTML",
    colors: "#FDF2E9",
    to: "/pages/HtmlQuiz",
  },
  {
    id: 2,
    icon: <PiPaintBrushBroad className="w-[100%] h-[100%] text-[#2FD887]" />,
    subject: "CSS",
    colors: "#E5FCF0",
    to: "/pages/CssQuiz",
  },
  {
    id: 3,
    icon: <RiJavascriptLine className="w-[100%] h-[100%] text-[#306AFF]" />,
    subject: "Javascript",
    colors: "#ECF0FE",
    to: "/pages/JavascriptQuiz",
  },
  {
    id: 4,
    icon: (
      <IoAccessibilityOutline className="w-[100%] h-[100%] text-[#A729F5]" />
    ),
    subject: "Accessibility",
    colors: "#F4E7FE",
    to: "/pages/AccessibilityQuiz",
  },
];

export default subjects;
