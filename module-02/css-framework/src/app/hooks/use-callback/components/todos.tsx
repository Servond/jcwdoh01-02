"use client";

import { useRef, memo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ITodos {
  todos: string[];
  addTodo: (input: string) => void;
}

function Todos(props: ITodos) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { todos, addTodo } = props;

  console.log("render");
  return (
    <div>
      <h1 className="text-4xl font-bold">My Todo</h1>
      {todos.map((todo, idx) => (
        <p key={idx}>{todo}</p>
      ))}
      <Input type="text" ref={inputRef} />
      <Button
        onClick={() => addTodo(inputRef.current ? inputRef.current.value : "")}
      >
        Add Todo
      </Button>
    </div>
  );
}

export default memo(Todos);
