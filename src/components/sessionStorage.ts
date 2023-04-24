import { useState, useEffect } from "react";

const useSessionStorage = (key: string, defaultValue: any) => {
  const [value, setValue] = useState(() => {
    const storedValue =
      typeof window !== "undefined" ? sessionStorage.getItem(key) : null;
    return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
  });

  useEffect(() => {
    typeof window !== "undefined" &&
      sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useSessionStorage;
