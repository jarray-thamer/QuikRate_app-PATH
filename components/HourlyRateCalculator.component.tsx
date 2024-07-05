import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import ResultComponent from "./Result.component";

const HourlyRateCalculatorComponent = ({
  currency,
  handleSetResult,
}: {
  currency: string;
  handleSetResult: (data: string) => void;
}) => {
  const [result, setResult] = useState(0);
  // Form schema
  const FormSchema = z.object({
    desiredSalary: z
      .number({
        required_error: "Desired Salary is required",
        invalid_type_error: "Desired Salary must be a number",
      })
      .min(1, {
        message: "Your desired salary must be positive and higher than 0",
      }),
    laborHours: z
      .number({
        required_error: "Labor Hours are required",
        invalid_type_error: "Labor Hours must be a number",
      })
      .min(1, { message: "Labor Hours must be a positive number" }),
    profit: z
      .number({
        required_error: "Profit is required",
        invalid_type_error: "Profit must be a number",
      })
      .default(10),
  });
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const result = Math.floor(
      data.desiredSalary / data.laborHours + data.profit
    );
    handleSetResult(result.toString());
  }

  return (
    <main>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6 mt-[24px]"
        >
          <FormField
            control={form.control}
            name="desiredSalary"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel className="text-[#3f3e5e] font-normal text-sm">
                    Desired Salary
                  </FormLabel>

                  <Input
                    placeholder={currency}
                    {...field}
                    value={field.value || ""}
                    onChange={(e) => field.onChange(parseFloat(e.target.value))}
                  />

                  <FormMessage />
                </FormItem>
              </>
            )}
          />
          <FormField
            control={form.control}
            name="laborHours"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel className="text-[#3f3e5e] font-normal text-sm">
                    Labor Hours
                  </FormLabel>

                  <Input
                    placeholder={"per month"}
                    {...field}
                    value={field.value || ""}
                    onChange={(e) => field.onChange(parseFloat(e.target.value))}
                  />

                  <FormMessage />
                </FormItem>
              </>
            )}
          />
          <FormField
            control={form.control}
            name="profit"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel className="text-[#3f3e5e] font-normal text-sm">
                    Profit
                  </FormLabel>
                  <Select
                    defaultValue="10"
                    onValueChange={(value) => {
                      field.onChange(parseFloat(value));
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="10 %" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value={"10"}>10 %</SelectItem>
                      <SelectItem value={"15"}>15 %</SelectItem>
                      <SelectItem value={"20"}>25 %</SelectItem>
                      <SelectItem value={"30"}>30 %</SelectItem>
                      <SelectItem value={"35"}>35 %</SelectItem>
                      <SelectItem value={"40"}>40 %</SelectItem>
                      <SelectItem value={"50"}>50 %</SelectItem>
                      <SelectItem value={"65"}>65 %</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              </>
            )}
          />

          <Button type="submit">Calculate</Button>
        </form>
      </Form>
    </main>
  );
};

export default HourlyRateCalculatorComponent;
