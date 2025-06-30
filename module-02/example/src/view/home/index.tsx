"use client";

import useAuthStore from "@/store/useAuthStore";
import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function HomeView() {
  const { isLogin, onAddTodos, todos } = useAuthStore((state) => state);
  //   const [todos, setTodos] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onAdd = () => {
    if (inputRef.current?.value) {
      onAddTodos([...todos, inputRef.current?.value as string]);
    }
  };

  return (
    <>
      <div className="w-full py-5 flex justify-center items-center">
        <div className="w-md flex flex-col gap-5">
          <h1 className="text-4xl">TODO LIST</h1>
          <div className="flex flex-col gap-3 border border-gray-300 rounded-md shadow-2xs p-5">
            {todos.length > 0 &&
              todos.map((todo, idx) => <div key={idx}>{todo}</div>)}
          </div>
          <div className="flex flex-col gap-3">
            <Input type="text" placeholder="Add Todo" ref={inputRef} />
            <Button variant={"outline"} onClick={onAdd}>
              Add Todo
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
