"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

export function FadeImage(props: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Image
      {...props}
      className={`
        ${props.className || ""} 
        transition-opacity duration-300 ease-in-out
        ${isLoaded ? "opacity-100" : "opacity-0"}
      `}
      onLoad={(e) => {
        setIsLoaded(true);
        // Si pasaste un onLoad explícito, lo respetamos
        if (props.onLoad) props.onLoad(e);
      }}
    />
  );
}