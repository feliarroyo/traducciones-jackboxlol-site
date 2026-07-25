import { useState, useEffect } from "react";

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return { isOpen, setIsOpen, mounted };
}