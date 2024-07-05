"use client";
import DescriptionComponent from "@/components/Description.component";
import FooterComponent from "@/components/Footer.component";
import HeaderComponent from "@/components/Header.component";
import MainCalculatorComponent from "@/components/MainCalculator.component";

import { useState } from "react";

interface CalculatorType {
  index: number;
  nameInNav: string;
  title: string;
  resultMessage: string;
}
export default function Home() {
  const calculatorTypes = [
    {
      index: 1,
      nameInNav: "Hourly Rate",
      title: "Hourly Rate",
      resultMessage: "Your Hourly Rate is: ",
    },
    {
      index: 2,
      nameInNav: "Price by Project",
      title: "Project Based Pricing",
      resultMessage: "Total Project Cost is: ",
    },
    {
      index: 3,
      nameInNav: "Profit",
      title: "Profit Calculation",
      resultMessage: "Profit is: ",
    },
  ];
  const [currentCalculatorType, SetCurrentCalculatorType] =
    useState<CalculatorType>(calculatorTypes[0]);
  return (
    <div className="overflow-x-hidden flex flex-col min-h-screen">
      <HeaderComponent />
      <main className="flex-1 w-screen px-4 mx-auto ">
        <DescriptionComponent />
        <div className={`flex  flex-col  max-w-[50rem] mx-auto mt-[50px]`}>
          {/* Navigation between Calculator type */}
          <div className="flex flex-row justify-around mb-[29px]">
            <h6
              className={`border-black font-semibold text-sm text-[#3f3e5e] ${
                currentCalculatorType.index === 1
                  ? "border-b-2"
                  : " cursor-pointer text-[#8C87A8]"
              }`}
              onClick={() => SetCurrentCalculatorType(calculatorTypes[0])}
            >
              {calculatorTypes[0].nameInNav}
            </h6>
            <h6
              className={`border-black font-semibold text-sm text-[#3f3e5e] ${
                currentCalculatorType.index === 2
                  ? "border-b-2"
                  : " cursor-pointer text-[#8C87A8]"
              }`}
              onClick={() => SetCurrentCalculatorType(calculatorTypes[1])}
            >
              {calculatorTypes[1].nameInNav}
            </h6>
            <h6
              className={`border-black font-semibold text-sm text-[#3f3e5e] ${
                currentCalculatorType.index === 3
                  ? "border-b-2"
                  : " cursor-pointer text-[#8C87A8]"
              }`}
              onClick={() => SetCurrentCalculatorType(calculatorTypes[2])}
            >
              {calculatorTypes[2].nameInNav}
            </h6>
          </div>
          <MainCalculatorComponent
            currentCalculatorType={currentCalculatorType}
          />
        </div>
      </main>

      <FooterComponent />
    </div>
  );
}
