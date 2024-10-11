"use client";
import Layout from "@/app/layouts/Layout";
import React from "react";
import subjects from "../../services/subjectsArr";
import Main from "@/app/components/_organisms/Main";
import OptionCont from "@/app/components/_molecules/OptionCont";

const Home = () => {
  return (
    <Layout>
      <Main>
        <div className="flex flex-col gap-4 des:w-[453px]">
          <h1 className="font-[rubik] text-[40px] tab:text-[64px] font-light items-stretch leading-10 tab:leading-[64px] text-[#313E51] dark:text-white">
            Welcome to the
            <strong className="font-medium"> Frontend Quiz!</strong>
          </h1>
          <p className="font-[rubik] text-[14px] tab:text-[20px] font-normal items-stretch leading-5 tab:leading-[30px] text-[#313E51] dark:text-[#ABC1E1]">
            Pick a subject to get started.
          </p>
        </div>

        <div className="flex flex-col gap-3 tab:gap-6 w-full des:w-[564px]">
          {subjects.map((sub) => {
            return (
              <OptionCont
                key={sub.id}
                routLocation={sub.to}
                icon={sub.icon}
                option={sub.subject}
                bgColor={sub.colors}
              />
            );
          })}
        </div>
      </Main>
    </Layout>
  );
};

export default Home;
