import React from "react";

interface ProgressBar_props {
  completed: number;
  containerClassName: string;
  fillerClassName: string;
}

const ProgressBar = ({
  completed,
  containerClassName,
  fillerClassName,
}: ProgressBar_props) => {
  return (
    <div className={containerClassName}>
      <div className={fillerClassName} style={{ width: `${completed}%` }}></div>
    </div>
  );
};

export default ProgressBar;
