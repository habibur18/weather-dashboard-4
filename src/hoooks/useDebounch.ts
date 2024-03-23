import { useEffect, useRef } from "react";

// Define a generic type T for the callback function
const useDebounce = <T extends (...args: any[]) => void>(callback: T, delay: number) => {
  const timeoutIdRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current !== null) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  // Use the Parameters utility type to get the parameter types of the callback function
  const debouncedCallback = (...args: Parameters<T>) => {
    if (timeoutIdRef.current !== null) {
      clearTimeout(timeoutIdRef.current);
    }
    timeoutIdRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedCallback;
};

export default useDebounce;
