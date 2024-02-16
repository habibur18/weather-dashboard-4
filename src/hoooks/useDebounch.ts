import { useEffect, useRef } from "react";

const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
  const timeoutIdRef = useRef<number | null>(null); // Specify the type explicitly

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current !== null) {
        // Check if timeoutIdRef.current is not null
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  const debouncedCallback = (...args: any[]) => {
    if (timeoutIdRef.current !== null) {
      // Check if timeoutIdRef.current is not null
      clearTimeout(timeoutIdRef.current);
    }
    timeoutIdRef.current = setTimeout(() => {
      // Assign the identifier of the timeout
      callback(...args);
    }, delay);
  };

  return debouncedCallback;
};

export default useDebounce;
