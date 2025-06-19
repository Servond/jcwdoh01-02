"use client";

import { useRef, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function UseRef() {
  const inputRef = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  });

  return (
    <div className="container flex flex-col ml-0 mr-0 gap-5 justify-center items-center">
      <Input
        type="text"
        placeholder="Type Text"
        ref={inputRef}
        className="text-blue-400"
      />
      <Button
        onClick={() =>
          console.log(inputRef.current?.classList.remove("text-blue-400"))
        }
      >
        Click Me!
      </Button>
    </div>
  );
}
