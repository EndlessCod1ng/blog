import { useState } from "react";
import  "./Counter.scss";
interface CounterProps {
  className?: string;
}
export const Counter = ({ className }: CounterProps) => {
  const [count, setCount] = useState<number>(0);
  return (
    <div className={`${className ? className : ""}`}>
      <div>{count}</div>
      <button
        className={`btn`}
        onClick={() => setCount((prev) => prev + 1)}
      >
        +1
      </button>
    </div>
  );
};
