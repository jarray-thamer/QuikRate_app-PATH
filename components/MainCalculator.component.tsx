import React, { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

import { Separator } from "./ui/separator";
import HourlyRateCalculatorComponent from "./HourlyRateCalculator.component";
import PBPComponent from "./PBP.component";
import ProfitCalculationComponent from "./ProfitCalculation.component";
import ResultComponent from "./Result.component";

interface CalculatorType {
  index: number;
  nameInNav: string;
  title: string;
  resultMessage: string;
}

const MainCalculatorComponent = ({
  currentCalculatorType,
}: {
  currentCalculatorType: CalculatorType;
}) => {
  const [result, setResult] = useState("0");
  const [currency, setCurrency] = useState("TND");

  const handleSetResult = (data: string) => {
    setResult(data);
  };

  useEffect(() => {
    setResult("0");
  }, [currentCalculatorType]);

  return (
    <>
      <main className="border border-[#f2f2f2] rounded-[12px]  w-full p-[24px] ">
        <h2 className="mb-[24px]">{currentCalculatorType.title}</h2>

        <Label
          htmlFor="currency"
          className="text-[#3f3e5e] font-normal text-sm"
        >
          Currency
        </Label>

        <Select
          onValueChange={(value) => {
            setCurrency(value);
          }}
          defaultValue={"TND"}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select your currency" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="TND">TND</SelectItem>
            <SelectItem value="USD">USD</SelectItem>
          </SelectContent>
        </Select>

        <Separator className="my-[24px]" />
        {currentCalculatorType.index === 1 ? (
          <HourlyRateCalculatorComponent
            handleSetResult={handleSetResult}
            currency={currency}
          />
        ) : currentCalculatorType.index === 2 ? (
          <PBPComponent currency={currency} handleSetResult={handleSetResult} />
        ) : (
          <ProfitCalculationComponent
            currency={currency}
            handleSetResult={handleSetResult}
          />
        )}
      </main>
      <ResultComponent
        currentCalculatorTypeResultMessage={currentCalculatorType.resultMessage}
        currency={currency}
        result={result}
      />
    </>
  );
};

export default MainCalculatorComponent;
