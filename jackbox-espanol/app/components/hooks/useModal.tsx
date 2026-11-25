import { useState, useSyncExternalStore } from "react";

const subscribe = () => () => {};

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  // false during SSR and hydration, true afterwards (portals need `document`)
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  return { isOpen, setIsOpen, mounted };
}
