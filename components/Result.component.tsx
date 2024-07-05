import React from "react";

const ResultComponent = ({
  result,
  currentCalculatorTypeResultMessage,
  currency,
}: {
  result: string;
  currency: string;
  currentCalculatorTypeResultMessage: string;
}) => {
  return (
    <main className="mt-[24px] border border-[#f2f2f2] rounded-[12px]  w-full py-[24px] px-[68px] text-center mb-[56px]">
      <h1 className="text-[#3F3E5E] font-semibold text-sm">
        {currentCalculatorTypeResultMessage}
        {result} {currency}
      </h1>
    </main>
  );
};

export default ResultComponent;
