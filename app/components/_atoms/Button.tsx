import { Button_props } from "@/app/interfaces/common";
import React from "react";

const Button = ({
  className,
  onClick,
  buttonStyle,
  children,
}: Button_props) => {
  return (
    <button className={className} onClick={onClick} style={buttonStyle}>
      {children}
    </button>
  );
};

export default Button;
