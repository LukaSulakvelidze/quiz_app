import React from "react";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col des:flex-row gap-10 tab:gap-16 des:gap-0 items-center des:items-start des:justify-between px-6 tab:px-16 des:px-[144px] py-[42px] tab:py-[9px] tab:pb-[241px] des:pb-[220px]">
      {children}
    </main>
  );
};

export default Main;
