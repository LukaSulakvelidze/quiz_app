import React from "react";
import Header from "../components/_organisms/Header";
import { Layout_props } from "../interfaces/common";

const Layout = ({ quizType, icon, iconBgColor, children }: Layout_props) => {
  return (
    <>
      <Header quizType={quizType} bgColor={iconBgColor}>
        {icon}
      </Header>
      {children}
    </>
  );
};

export default Layout;
