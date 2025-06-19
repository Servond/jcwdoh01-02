"use client";

import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";

export default function UseMemo() {
  const [number, setNumber] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const isNumberEven = useMemo(() => {
    let i = 0;

    while (i < 900000000) {
      i++;
    }

    return number % 2 === 0;
  }, [number]);
  return (
    <div className="container ml-auto mr-auto">
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col justify-center items-center">
          <p>
            number: {number} is {isNumberEven ? "even" : "odd"}
          </p>
          <Button onClick={() => setNumber(number + 1)}>
            Increment Number
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p>count: {count}</p>
          <Button onClick={() => setCount(count + 1)}>Increment Count</Button>
        </div>
      </div>
    </div>
  );
}
