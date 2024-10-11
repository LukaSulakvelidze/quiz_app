"use client";
import React, { useEffect, useState } from "react";
import { RxSun } from "react-icons/rx";
import { GoMoon } from "react-icons/go";
import CustomSwitch from "../_molecules/DarkModeSwitch";
import { Header_props } from "@/app/interfaces/common";

const Header = ({ children, quizType, bgColor }: Header_props) => {
  const [theme, setTheme] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const storedSwitchState = localStorage.getItem("Checked") === "true";

    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
      setIsChecked(storedTheme === "dark" || storedSwitchState);
    } else {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setTheme(systemTheme);
      document.documentElement.classList.add(systemTheme);
      setIsChecked(systemTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      localStorage.setItem("Checked", "false");
      setTheme("light");
      setIsChecked(false);
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      localStorage.setItem("Checked", "true");
      setTheme("dark");
      setIsChecked(true);
    }
  };

  return (
    <header
      className={`flex items-center px-6 tab:px-16 des:px-[140px] py-4 tab:py-10 des:py-[83px] ${
        quizType ? "justify-between" : "justify-end"
      }`}
    >
      {quizType && (
        <div className="flex items-center gap-4 tab:gap-6">
          <div
            style={{ backgroundColor: bgColor }}
            className={`flex items-center justify-center w-10 tab:w-14 h-10 tab:h-14 tab:p-2 rounded-[4px] tab:rounded-lg`}
          >
            {children}
          </div>
          <h2 className="font-[rubik] font-medium text-[18px] tab:text-[28px] leading-[18px] tab:leading-[28px] text-[#313E51] dark:text-white">
            {quizType}
          </h2>
        </div>
      )}
      <div className="flex gap-2 tab:gap-4 items-center w-fit">
        <RxSun className="tab:w-6 tab:h-6 text-[#626C7F] dark:text-white" />
        <CustomSwitch checked={isChecked} onClick={toggleTheme} />
        <GoMoon className="tab:w-6 tab:h-6 text-[#626C7F] dark:text-white" />
      </div>
    </header>
  );
};

export default Header;
