"use client";

import { Button } from "@/components/ui/button";
import { useState, useCallback } from "react";
import Todos from "./components/todos";

export default function UseCallback() {
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = useCallback(
    (input: string) => {
      setTodos((t) => [...t, input]);
    },
    [todos]
  );

  return (
    <div className="container ml-0 mr-0">
      <div className="flex flex-col gap-5 justify-center items-center">
        <Todos todos={todos} addTodo={addTodo} />
        <div>
          <p>Count: {count}</p>
          <Button onClick={() => setCount(count + 1)}>Increment</Button>
        </div>
      </div>
    </div>
  );
}
