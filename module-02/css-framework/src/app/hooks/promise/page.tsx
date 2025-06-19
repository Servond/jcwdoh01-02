"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Counter() {
  const [image, setImage] = useState<string>("");

  async function fetchAPI() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const parse = await response.json();
    setImage(parse.message);
    // console.log(response);
    // setImage(response);
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="container flex flex-col justify-center items-center mr-auto ml-auto">
      {image && <img src={image} />}
    </div>
  );
}
