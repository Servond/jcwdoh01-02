"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="container flex flex-col justify-center items-center mr-auto ml-auto">
      <p>You clicked {count} times</p>
      <Button onClick={handleIncrement}>Increment</Button>
    </div>
  );
}
